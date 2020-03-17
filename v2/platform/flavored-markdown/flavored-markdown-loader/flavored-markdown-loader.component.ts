import { Component, Input, ChangeDetectorRef, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { MarkdownLoaderService } from '@covalent/markdown';

// TODO: make a td-markdown-loader component

@Component({
  selector: 'td-flavored-markdown-loader',
  styleUrls: ['./flavored-markdown-loader.component.scss'],
  templateUrl: './flavored-markdown-loader.component.html',
})
export class TdFlavoredMarkdownLoaderComponent implements OnChanges {
  /**
   * url: string
   * The url of the markdown file.
   */
  @Input() url: string;

  /**
   * httpOptions: object
   * HTTP options that can be part of the request.
   */
  @Input() httpOptions: object;

  /**
   * anchor: string
   * Anchor to jump to.
   */
  @Input() anchor: string;

  /**
   * contentReady: void
   * Emitted when markdown rendering is finished.
   */
  @Output() contentReady: EventEmitter<void> = new EventEmitter();

  /**
   * loadFailed: Error
   * Emitted when loading of markdown file fails.
   */
  @Output() loadFailed: EventEmitter<Error> = new EventEmitter();

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
    } catch (error) {
      this.loadFailed.emit(error);
    } finally {
      this.loading = false;
      this._changeDetectorRef.markForCheck();
    }
  }
}
