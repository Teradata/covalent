import { ListRange } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, ViewChild } from '@angular/core';

import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { JsonHirearchy, JsonTree, JsonTreeNode } from './utils/tree';
import { JsonTreeFlatNode } from './utils/tree.utils';

interface PreviewHelper {
  needsEllipsis: (previewData: any, previewString: any) => boolean;
  previewNodes: (node: JsonTreeFlatNode) => JsonTreeNode[];
  previewStrategy: {
    object: previewTypeStrategy;
    array: previewTypeStrategy;
  };
}

type previewTypeStrategy = {
  format: (node: JsonTreeNode) => string;
  chars: string[];
};

/**
 * Function to be passed to TreeFlattener to figure out if
 * node has children.
 */
export function getIsNodeExpandable({ hasChildren }: JsonTreeFlatNode): boolean {
  return hasChildren;
}

/**
 * Function to be passed to TreeFlattener to transform
 * a JSonTreeNode -> JsonTreeFlatNode.
 */
export function nodeTransformer(node: JsonTreeNode, level: number): JsonTreeFlatNode {
  const hasChildren: boolean = node && node.children && node.children.length > 0 ? true : false;
  return {
    key: node.key,
    value: node.value,
    valueType: node.valueType,
    level: level,
    hasChildren: hasChildren,
    childrenCount: hasChildren ? node.children.length : 0,
    isExpanded: false,
    originalNode: node,
  };
}

/**
 * Function to be passed to TreeFlattener to figure out
 * node level.
 */
export function getNodeLevel({ level }: JsonTreeFlatNode): number {
  return level;
}

/**
 * Function to be passed to TreeFlattener that returns
 * a node's children.
 */
export function getNodeChildren({ children }: JsonTreeNode): JsonTreeNode[] {
  return children;
}

/**
 * Strategies to handle rendering of a node's value
 * based on its own type.
 */
export const typeValues: {
  [key: string]: (node: JsonTreeFlatNode | JsonTreeNode) => string;
} = {
  boolean: (node) => node.value,
  number: (node) => node.value,
  undefined: (node) => node.valueType,
  null: (node) => node.valueType,
  date: (node) => new Date(node.value).toString(),
  string: (node) => `"${node.value} "`,
  object: () => 'Object',
  function: (node) =>
    node.value
      .toString()
      .replace(/[\r\n]/g, '')
      .replace(/\{.*\}/, '') + '{…}',
  array: (node) => `Array [${node.value.length}]`,
};

@Component({
  selector: 'td-json-formatter',
  styleUrls: ['./json-formatter.component.scss'],
  templateUrl: './json-formatter.component.html',
})
export class TdJsonFormatterComponent {
  /**
   * Max length for property names. Any names bigger than this get trunctated.
   */
  private static KEY_MAX_LENGTH: number = 30;

  /**
   * Max length for preview string. Any names bigger than this get trunctated.
   */
  private static PREVIEW_STRING_MAX_LENGTH: number = 80;

  /**
   * Max tooltip preview elements.
   */
  private static PREVIEW_LIMIT: number = 5;

  private _data: JsonTree;
  private _levelsOpen: number = 0;
  private _key: string;

  /**
   * Map of strategies to use when rendering values based on type.
   */
  private _renderByTypeStrategy: Map<string, (node: JsonTreeFlatNode | JsonTreeNode) => string> = new Map(
    Object.entries(typeValues),
  );

  /**
   * Treecontrol for generated hirearchy from JSON.
   */
  _treeControl: FlatTreeControl<JsonTreeFlatNode> = new FlatTreeControl<JsonTreeFlatNode>(
    getNodeLevel,
    getIsNodeExpandable,
  );

  /**
   * Data source to be used for tree.
   */
  _dataSource: MatTreeFlatDataSource<JsonTreeNode, JsonTreeFlatNode>;

  /**
   * data: any
   * JS object to be formatted.
   */

  @Input() set data(json) {
    this._data = new JsonHirearchy(json, this.key || '').tree || [];
    this._dataSource.data = this._data;
  }

  get data() {
    return this._data;
  }

  /**
   * levelsOpen?: number
   * Levels opened by default when JS object is formatted and rendered.
   */
  @Input('levelsOpen')
  set levelsOpen(levelsOpen: number) {
    if (!Number.isInteger(levelsOpen)) {
      throw new Error('[levelsOpen] needs to be an integer.');
    }
    this._levelsOpen = levelsOpen;

    this._treeControl.dataNodes.forEach((node: JsonTreeFlatNode) => {
      node.level < levelsOpen && node.hasChildren && this._treeControl.expand(node);
    });
  }
  get levelsOpen(): number {
    return this._levelsOpen;
  }

  /**
   * key?: string
   * Tag to be displayed next to formatted object.
   */
  @Input('key')
  set key(key: string) {
    this._key = key;
  }
  get key(): string {
    return this._displayKey(this._key) || '';
  }

  constructor() {
    const treeFlattener = new MatTreeFlattener<JsonTreeNode, JsonTreeFlatNode>(
      nodeTransformer,
      getNodeLevel,
      getIsNodeExpandable,
      getNodeChildren,
    );

    this._dataSource = new MatTreeFlatDataSource(this._treeControl, treeFlattener);
  }

  _displayKey(key: any): string {
    const elipsis: string = key && key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
    return key ? `${key.substring(0, 30)}${elipsis}` : key;
  }

  _getValue(node: JsonTreeFlatNode | JsonTreeNode): string {
    return this._renderByTypeStrategy.get(node.valueType)(node);
  }

  _hasChild(nodeData: JsonTreeFlatNode) {
    return getIsNodeExpandable(nodeData);
  }

  /**
   * Helper method for getting preview of values.
   */

  private _previewHelper: PreviewHelper = {
    needsEllipsis: (previewData: any, previewString: any) =>
      previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
      previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH,
    previewNodes: (node: JsonTreeFlatNode) =>
      node?.originalNode?.children?.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT),
    previewStrategy: {
      object: {
        format: (node: JsonTreeNode) => node.key + ': ' + this._getValue(node),
        chars: ['{', '}'],
      },
      array: {
        format: (node: JsonTreeNode) => this._getValue(node),
        chars: ['[', ']'],
      },
    },
  };

  /**
   * Creates preview of nodes children to render in tooltip depending if its an array or an object.
   */

  _getPreview(node: JsonTreeFlatNode): string {
    if (node.valueType === 'array' || node.valueType === 'object') {
      const type: string = node.valueType;
      const [startChar, endChar]: string[] = this._previewHelper.previewStrategy[type].chars;

      const previewData: string[] = this._previewHelper
        .previewNodes(node)
        .map(this._previewHelper.previewStrategy[type].format);

      const previewString: string = previewData.join(', ');
      const ellipsis: string = this._previewHelper.needsEllipsis(previewData, previewString) ? '…' : '';

      const truncatedPreviewString: string = previewString.substring(
        0,
        TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH,
      );

      return `${startChar} ${truncatedPreviewString} ${ellipsis} ${endChar}`;
    }

    return '';
  }
}
