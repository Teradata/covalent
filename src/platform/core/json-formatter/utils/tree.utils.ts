import { JsonTreeNode } from './tree';

export interface JsonTreeFlatNode {
  key: string;
  value: any;
  valueType: string;
  level: number;
  hasChildren: boolean;
  childrenCount: number;
  isExpanded: boolean;
  originalNode?: JsonTreeNode;
}

export const isArray = (_: any = []) => Array.isArray(_);
export const isObject = (_: any = {}) => typeof _ === 'object';
export const isNull = (_: any) => _ === null;
export const isUndefined = (_: any) => _ === undefined;
export const isDate = (_: any) => {
  const date: Date = new Date(_);
  const isDate = Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());

  return isDate;
};

export const isCollection = (node: any[] | any = []) => !isNull(node) && isObject(node);

export function getIsNodeExpandable({ hasChildren }: JsonTreeFlatNode) {
  return hasChildren;
}

export function nodeTransformer(node: JsonTreeNode, level: number) {
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

export function getNodeLevel({ level }: JsonTreeFlatNode) {
  return level;
}

export function getNodeChildren({ children }: JsonTreeNode) {
  return children;
}
