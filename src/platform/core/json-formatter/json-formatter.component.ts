import { ListRange } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, ViewChild } from '@angular/core';

import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { JsonHirearchy, JsonTree, JsonTreeNode } from './utils/tree';
import {
  getNodeLevel,
  getIsNodeExpandable,
  nodeTransformer,
  getNodeChildren,
  JsonTreeFlatNode,
  isArray,
} from './utils/tree.utils';

/**
 * Setup type value map to render correct values for each
 * supported type
 */
export const typeValues: {
  [key: string]: (node: JsonTreeFlatNode | JsonTreeNode) => any;
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
export const valueByType = new Map(Object.entries(typeValues));

@Component({
  selector: 'td-json-formatter',
  styleUrls: ['./json-formatter.component.scss'],
  templateUrl: './json-formatter.component.html',
})
export class TdJsonFormatterComponent {
  @ViewChild('viewport', { static: true }) _viewPort: CdkVirtualScrollViewport;

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

  @Input() set data(json) {
    this._data = new JsonHirearchy(json, this.key || '').tree || [];
    this.dataSource.data = this._data;
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
    this.treeControl.dataNodes.forEach((node: JsonTreeFlatNode) => {
      const relativeLevel = levelsOpen - 1;
      node.level <= relativeLevel && node.hasChildren && this.treeControl.expand(node);
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
    return this.displayKey(this._key) || '';
  }

  treeControl: FlatTreeControl<JsonTreeFlatNode> = new FlatTreeControl<JsonTreeFlatNode>(
    getNodeLevel,
    getIsNodeExpandable,
  );
  dataSource: MatTreeFlatDataSource<JsonTreeNode, JsonTreeFlatNode>;

  constructor() {
    const treeFlattener = new MatTreeFlattener<JsonTreeNode, JsonTreeFlatNode>(
      nodeTransformer,
      getNodeLevel,
      getIsNodeExpandable,
      getNodeChildren,
    );
    // Populates our flattened data into the tree control
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, treeFlattener);
  }

  displayKey(key: any): string {
    const elipsis: string = key && key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
    return key ? `${key.substring(0, 30)}${elipsis}` : key;
  }

  getValue(node: JsonTreeFlatNode | JsonTreeNode): string {
    return valueByType.get(node.valueType)(node);
  }

  hasChild(index: number, nodeData: JsonTreeFlatNode) {
    return getIsNodeExpandable(nodeData);
  }

  getParentNode(node: JsonTreeFlatNode) {
    const nodeIndex = this.dataSource._flattenedData.value.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.dataSource._flattenedData.value[i].level === node.level - 1) {
        return this.dataSource._flattenedData.value[i];
      }
    }

    return null;
  }

  shouldRender(node: JsonTreeFlatNode) {
    const parent = this.getParentNode(node);
    return !parent || parent.isExpanded;
  }

  private previewHelper: any = {
    needsEllipsis: (previewData: any, previewString: any) =>
      previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
      previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH,
    previewNodes: (node: JsonTreeFlatNode) =>
      node?.originalNode?.children?.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT),
    object: {
      callback: (node: JsonTreeNode) => node.key + ': ' + this.getValue(node),
      chars: ['{', '}'],
    },
    array: {
      callback: (node: JsonTreeNode) => this.getValue(node),
      chars: ['[', ']'],
    },
  };
  /**
   * Creates preview of nodes children to render in tooltip depending if its an array or an object.
   */
  getPreview(node: JsonTreeFlatNode): string {
    if (node.valueType === 'array' || node.valueType === 'object') {
      const type: string = node.valueType;
      const [startChar, endChar] = this.previewHelper[type].chars;

      const previewData = this.previewHelper.previewNodes(node).map(this.previewHelper[type].callback);

      const previewString: string = previewData.join(', ');
      const ellipsis: string = this.previewHelper.needsEllipsis(previewData, previewString) ? '…' : '';

      const truncatedPreviewString: string = previewString.substring(
        0,
        TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH,
      );

      return `${startChar} ${truncatedPreviewString} ${ellipsis} ${endChar}`;
    }

    return '';
  }
}
