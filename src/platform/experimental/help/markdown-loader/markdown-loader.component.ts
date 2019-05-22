import { Component, Input, ChangeDetectorRef, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { MarkdownLoaderService } from './markdown-loader.service';

@Component({
  selector: 'td-markdown-loader',
  styleUrls: ['./markdown-loader.component.scss'],
  templateUrl: './markdown-loader.component.html',
})
export class TdMarkdownLoaderComponent implements OnChanges {
  @Input() url: string;
  @Input() httpOptions: object;
  content: string;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _markdownUrlLoaderService: MarkdownLoaderService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.url.currentValue !== changes.url.previousValue ||
      changes.httpOptions.currentValue !== changes.httpOptions.previousValue
    ) {
      this.loadMarkdown();
    }
  }

  async loadMarkdown(): Promise<void> {
    this.content = await this._markdownUrlLoaderService.load(this.url, this.httpOptions);
    this._changeDetectorRef.markForCheck();
  }
}
