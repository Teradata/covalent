import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  Subject,
  take,
  takeUntil,
} from 'rxjs';
import { IMarkdownNavigatorItem } from '../markdown-navigator.component';
import {
  DocSearchService,
  ITopicSearchEntry,
  IDocSearchResult,
  ITopicSearchTopic,
  IDocSuggestion,
} from './doc-search.service';

@Component({
  selector: 'td-doc-search',
  templateUrl: './doc-search.component.html',
  styleUrls: ['./doc-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocSearchComponent implements OnDestroy {
  private readonly _destroyedSubject: Subject<boolean> = new Subject();

  public docSearchResults$?: Observable<IDocSearchResult[]>;
  public documentResult$?: Observable<string>;
  public suggestResults$?: Observable<IDocSuggestion[]>;
  public topicResults$?: Observable<ITopicSearchEntry[]>;
  // public topicResults$?: Observable<IDocSearchResponse>;

  @Output() showTopicContent: EventEmitter<IMarkdownNavigatorItem> =
    new EventEmitter();

  constructor(private readonly docSearchService: DocSearchService) {}

  ngOnDestroy(): void {
    this._destroyedSubject.next(true);
    this._destroyedSubject.complete();
  }

  doDocSearch(searchTerm: string): void {
    this.docSearchResults$ = this.docSearchService.searchDocuments$(searchTerm);
  }

  doDocSuggest(searchTerm: string): void {
    this.suggestResults$ = this.docSearchService.suggestDocs$(searchTerm);
  }

  resultClicked(result: IDocSearchResult): void {
    this.documentResult$ = this.docSearchService.retrieveDocument$(
      result.documentId
    );
  }

  suggestionClicked(suggestion: IDocSuggestion): void {
    // this.topicResults$ = this.docSearchService.topicSearch$(suggestion.value);
    this.docSearchService
      .topicSearch$(suggestion.value)
      .pipe(
        map((searchResults: ITopicSearchEntry[]) => searchResults[0].topic),
        filter((searchResult: ITopicSearchTopic) => !!searchResult.contentUrl),
        takeUntil(this._destroyedSubject)
      )
      .subscribe({
        next: (topic: ITopicSearchTopic) => {
          this.showTopicContent.emit({
            title: topic.title,
            url: topic.contentUrl,
          } as IMarkdownNavigatorItem);
        },
      });
  }

  topicClicked(topic: ITopicSearchTopic): void {
    // this.topicContent$ = this.docSearchService.retrieveTopicContent$(
    //   topic.mapId,
    //   topic.contentId
    // );
  }
}
