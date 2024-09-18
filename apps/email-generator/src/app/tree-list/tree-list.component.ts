import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentenceCasePipe } from '../pipes/sentence-case.pipe';

export interface TemplateNode {
  title: string;
  value?: string;
  templates?: TemplateNode[];
}

@Component({
  selector: 'app-tree-list',
  standalone: true,
  imports: [CommonModule, SentenceCasePipe],
  templateUrl: './tree-list.component.html',
  styleUrl: './tree-list.component.scss',
})
export class TreeListComponent {
  @Input() nodes: TemplateNode[] = [];
  @Output() itemClick = new EventEmitter<string>();

  activeNode = '';
  expandedNodes: Record<string, boolean> = {};

  handleToggle(title: string) {
    this.expandedNodes[title] = !this.expandedNodes[title];
  }

  handleClick(value: string, title: string) {
    this.activeNode = title;
    this.itemClick.emit(value);
  }

  renderTree(nodes: TemplateNode[]): string[] {
    return nodes.map((node) => node.title);
  }

  isNodeExpanded(node: TemplateNode): boolean {
    return !!this.expandedNodes[node.title];
  }
}
