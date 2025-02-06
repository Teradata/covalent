import {
  Component,
  Input,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TdMarkdownLoaderService } from '@covalent/markdown';
import { ITdFlavoredMarkdownButtonClickEvent, TdFlavoredMarkdownComponent } from '../flavored-markdown.component';
import { ICopyCodeTooltips } from '@covalent/highlight';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

// TODO: make a td-markdown-loader component

@Component({
  selector: 'td-flavored-markdown-loader',
  styleUrls: ['./flavored-markdown-loader.component.scss'],
  templateUrl: './flavored-markdown-loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatProgressBar, TdFlavoredMarkdownComponent]
})
export class TdFlavoredMarkdownLoaderComponent implements OnChanges {
  /**
   * url: string
   * The url of the markdown file.
   */
  @Input() url?: string;

  /**
   * httpOptions: object
   * HTTP options that can be part of the request.
   */
  @Input() httpOptions?: object;

  /**
   * anchor: string
   * Anchor to jump to.
   */
  @Input() anchor?: string;

  /**
   * copyCodeToClipboard?: boolean
   *
   * Display copy button on code snippets to copy code to clipboard.
   *
   */
  @Input() copyCodeToClipboard? = false;

  /**
   * copyCodeTooltips?: ICopyCodeTooltips
   *
   * Tooltips for copy button to copy and upon copying.
   */
  @Input() copyCodeTooltips?: ICopyCodeTooltips = {};

  /**
   * useCfmList?: boolean = false;
   * Use CFM list component instead of vanilla markdown list. Used in covalent documentation app.
   */
  @Input() useCfmList? = false;

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

  @Output() buttonClicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent> =
    new EventEmitter();

  content!: string;
  loading = true;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _markdownUrlLoaderService: TdMarkdownLoaderService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['url'] || changes['httpOptions']) {
      this.loadMarkdown();
    }
  }

  async loadMarkdown(): Promise<void> {
    this.loading = true;
    this._changeDetectorRef.markForCheck();
    try {
      this.content = await this._markdownUrlLoaderService.load(
        this.url ?? '',
        this.httpOptions
      );
    } catch (error) {
      this.loadFailed.emit(error as Error);
    } finally {
      this.loading = false;
      this._changeDetectorRef.markForCheck();
    }
  }
}
