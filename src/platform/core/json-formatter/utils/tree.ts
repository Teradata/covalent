import { isArray, isCollection, isDate, isObject, isUndefined } from './tree.utils';

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

export const getType = (value: any) => {
  if (isObject(value) && !isUndefined(value)) {
    return !value ? 'null' : isArray(value) ? 'array' : isDate(value) ? 'date' : 'object';
  }
  return typeof value;
};

export class JsonHirearchy {
  tree: JsonTree = [];
  type: any = '';
  rootNode: JsonTreeNode;

  // Perform traversal upon initiation
  constructor(json: any, key: string = '') {
    this.rootNode = new JsonTreeNode(key, json);
    this.rootNode.valueType = getType(json);
    this.rootNode.children = this.jsonTransform(json);

    this.tree = [this.rootNode];
  }

  jsonTransform(obj: object) {
    return Object.entries(obj).reduce<JsonTree>((tree: JsonTree, [key, value]: any) => {
      const node = new JsonTreeNode(key, value);
      // If object or array dive in, dates are exempt here
      if (isCollection(value) && !isDate(value) && !isUndefined(value)) {
        node.children = this.jsonTransform(value);
      }

      return [...tree, node];
    }, []);
  }
}
