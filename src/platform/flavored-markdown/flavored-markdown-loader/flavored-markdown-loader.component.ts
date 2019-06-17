import { Component, Input, ChangeDetectorRef, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { MarkdownLoaderService } from '@covalent/markdown';

// TODO: make a td-markdown-loader component

@Component({
  selector: 'td-flavored-markdown-loader',
  styleUrls: ['./flavored-markdown-loader.component.scss'],
  templateUrl: './flavored-markdown-loader.component.html',
})
export class TdFlavoredMarkdownLoaderComponent implements OnChanges {
  @Input() url: string;
  @Input() httpOptions: object;
  @Input() anchor: string;

  @Output() contentReady: EventEmitter<void> = new EventEmitter();
  @Output() loadFailed: EventEmitter<void> = new EventEmitter();

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
