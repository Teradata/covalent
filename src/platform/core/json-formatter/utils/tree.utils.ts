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

export function isArray(_: any = []): boolean {
  return Array.isArray(_);
}

export function isObject(_: any = {}): boolean {
  return typeof _ === 'object';
}

export function isNull(_: any): boolean {
  return _ === null;
}

export function isUndefined(_: any): boolean {
  return _ === undefined;
}

export function isDate(_: any): boolean {
  const date: Date = new Date(_);
  const isDate = Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());

  return isDate;
}

export function isCollection(node: any[] | any = []): boolean {
  return !isNull(node) && isObject(node);
}
