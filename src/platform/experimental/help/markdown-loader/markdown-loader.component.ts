import { Component, Input, ChangeDetectorRef, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { MarkdownLoaderService } from './markdown-loader.service';

@Component({
  selector: 'td-markdown-loader',
  styleUrls: ['./markdown-loader.component.scss'],
  templateUrl: './markdown-loader.component.html',
})
export class TdMarkdownLoaderComponent implements OnChanges {
  @Input() url: string;
  @Input() httpOptions: object;
  @Input() anchor: string;

  @Output() contentReady: EventEmitter<any> = new EventEmitter();
  @Output() loadFailed: EventEmitter<any> = new EventEmitter();

  content: string;
  loading: boolean = true;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _markdownUrlLoaderService: MarkdownLoaderService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.url || changes.httpOptions) {
      this.loadMarkdown();
    }
  }

  async loadMarkdown(): Promise<void> {
    this.loading = true;
    try {
      this.content = await this._markdownUrlLoaderService.load(this.url, this.httpOptions);
    } catch {
      this.loadFailed.emit();
    } finally {
      this.loading = false;
      this._changeDetectorRef.markForCheck();
    }
  }
}
