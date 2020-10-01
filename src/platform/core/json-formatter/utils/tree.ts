import { isArray, isDate, isObject, isUndefined } from './tree.utils';

export type JsonTree = JsonTreeNode[];

export interface JsonTreeNode {
  key: string;
  value: any;
  valueType: string;
  children?: JsonTreeNode[];
}

export class JsonTreeNode {
  constructor(key: any, value: any) {
    this.key = key;
    this.value = value;
    this.valueType = getType(value);
  }
  key: string;
  value: any;
  valueType: string;
  children?: JsonTreeNode[];
}

/**
 * Gets type of object.
 * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
 */

export function getObjectType(object: any): string {
  return !object ? 'null' : isArray(object) ? 'array' : isDate(object) ? 'date' : 'object';
}

export function getType(value: any): string {
  return isObject(value) ? getObjectType(value) : typeof value;
}

export class JsonHirearchy {
  tree: JsonTree = [];
  rootNode: JsonTreeNode;

  constructor(json: any | any[], key: string = '') {
    this.rootNode = new JsonTreeNode(key, json);
    this.rootNode.valueType = getType(json);
    this.rootNode.children = this.jsonTransform(json);

    this.tree = [this.rootNode];
  }

  jsonTransform(obj: any) {
    return Object.entries(obj).reduce<JsonTree>((tree: JsonTree, [key, value]: any) => {
      const node = new JsonTreeNode(key, value);

      if (node.valueType === 'array' || node.valueType === 'object') {
        node.children = this.jsonTransform(value);
      }

      return [...tree, node];
    }, []);
  }
}
