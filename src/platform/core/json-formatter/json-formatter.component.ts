import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, Input, OnInit } from "@angular/core";

import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from "@angular/material/tree";
import { JsonHirearchy, JsonTree, JsonTreeNode } from "./utils/tree";
import {
  getNodeLevel,
  getIsNodeExpandable,
  nodeTransformer,
  getNodeChildren,
  JsonTreeFlatNode,
} from "./utils/tree.utils";

/**
 * Setup type value map to render correct values for each
 * supported type
 */
export const typeValues: { [key: string]: (node: JsonTreeFlatNode) => any } = {
  boolean: (node) => node.value,
  number: (node) => node.value,
  undefined: (node) => node.valueType,
  null: (node) => node.valueType,
  date: (node) => new Date(node.value).toString(),
  string: (node) => `"${node.value} "`,
  object: () => "Object",
  function: (node) =>
    node.value
      .toString()
      .replace(/[\r\n]/g, "")
      .replace(/\{.*\}/, "") + "{…}",
  array: (node) => `Array [${node.childrenCount}]`,
};
export const valueByType = new Map(Object.entries(typeValues));

@Component({
  selector: "td-json-formatter",
  styleUrls: ["./json-formatter.component.scss"],
  templateUrl: "./json-formatter.component.html",
})
export class TdJsonFormatterComponent {
  private _data: JsonTree;
  private _levelsOpen: number = 0;
  private _key: string;

  @Input() set data(json) {
    this._data = new JsonHirearchy(json, this.key || "").tree || [];
    this.dataSource.data = this._data;
  }

  get data() {
    return this._data;
  }

  /**
   * levelsOpen?: number
   * Levels opened by default when JS object is formatted and rendered.
   */
  @Input("levelsOpen")
  set levelsOpen(levelsOpen: number) {
    if (!Number.isInteger(levelsOpen)) {
      throw new Error("[levelsOpen] needs to be an integer.");
    }
    this._levelsOpen = levelsOpen;
    this.treeControl.dataNodes.forEach((node: JsonTreeFlatNode) => {
      const relativeLevel = levelsOpen - 1;
      node.level <= relativeLevel &&
        node.hasChildren &&
        this.treeControl.expand(node);
    });
  }
  get levelsOpen(): number {
    return this._levelsOpen;
  }

  /**
   * key?: string
   * Tag to be displayed next to formatted object.
   */
  @Input("key")
  set key(key: string) {
    this._key = key;
  }
  get key(): string {
    const elipsis: string = this._key && this._key.length > 30 ? "…" : "";
    return this._key ? this._key.substring(0, 30) + elipsis : this._key;
  }

  treeControl: FlatTreeControl<JsonTreeFlatNode> = new FlatTreeControl<
    JsonTreeFlatNode
  >(getNodeLevel, getIsNodeExpandable);
  dataSource: MatTreeFlatDataSource<JsonTreeNode, JsonTreeFlatNode>;

  constructor() {
    const treeFlattener = new MatTreeFlattener<JsonTreeNode, JsonTreeFlatNode>(
      nodeTransformer,
      getNodeLevel,
      getIsNodeExpandable,
      getNodeChildren
    );
    // Populates our flattened data into the tree control
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      treeFlattener
    );
  }

  getValue(node: JsonTreeFlatNode) {
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
}
