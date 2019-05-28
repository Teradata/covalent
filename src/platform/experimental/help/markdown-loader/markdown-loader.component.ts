import { Component, Input, ChangeDetectorRef, SimpleChanges, SimpleChange, OnChanges, Output, EventEmitter } from '@angular/core';
import { MarkdownLoaderService } from './markdown-loader.service';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'td-markdown-loader',
  styleUrls: ['./markdown-loader.component.scss'],
  templateUrl: './markdown-loader.component.html',
})
export class TdMarkdownLoaderComponent implements OnChanges {
  @Input() url: string;
  @Input() httpOptions: object;

  @Output() contentReady: EventEmitter<any> = new EventEmitter();

  content: string;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _markdownUrlLoaderService: MarkdownLoaderService,
    private _loadingService: TdLoadingService,
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
    this._loadingService.register('loading');
    this.content = await this._markdownUrlLoaderService.load(this.url, this.httpOptions);
    this._loadingService.resolve('loading');
    this._changeDetectorRef.markForCheck();
  }
}
