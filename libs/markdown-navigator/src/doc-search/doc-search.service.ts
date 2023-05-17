import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export enum EDocType {
  DOCUMENT = 'DOCUMENT',
  MAP = 'MAP',
  TOPICS = 'TOPICS',
}

interface IDocFilter {
  key: string;
  negative: boolean;
  values: string[];
}

export interface IDocSearchResult {
  documentId: string;
  title: string;
}

interface IDocSearchResponse {
  results: IDocSearchResult[];
}

export interface ITopicSearchTopic {
  breadcrumb?: string[];
  contentId?: string;
  contentUrl: string;
  mapId?: string;
  title: string;
  tocId?: string;
}

export interface ITopicSearchEntry {
  type: EDocType;
  topic: ITopicSearchTopic;
}

interface ITopicSearchResult {
  entries: ITopicSearchEntry[];
}

interface ITopicSearchResponse {
  results: ITopicSearchResult[];
}

export interface IDocSuggestion {
  type: EDocType;
  value: string;
}

interface IDocSuggestionResponse {
  suggestions: IDocSuggestion[];
}

@Injectable({
  providedIn: 'root',
})
export class DocSearchService {
  // this should be pulled from config somewhere
  private readonly docServer = 'add doc server URL here';

  constructor(private readonly _http: HttpClient) {}

  retrieveDocument$(docId: string): Observable<string> {
    const headers: HttpHeaders = this.buildHeaders('text/html');

    return this._http.get<string>(
      `${this.docServer}documents/${docId}/content`,
      { headers }
    );
  }

  searchDocuments$(searchTerm: string): Observable<IDocSearchResult[]> {
    const headers: HttpHeaders = this.buildHeaders();

    return this._http
      .post<IDocSearchResponse>(
        `${this.docServer}documents/search?per_page=5`,
        {
          contentLocale: 'en-US', // need to get from config
          query: searchTerm,
        },
        { headers }
      )
      .pipe(
        map(
          (response: IDocSearchResponse) =>
            response.results as IDocSearchResult[]
        )
      );
  }

  suggestDocs$(searchTerm: string): Observable<IDocSuggestion[]> {
    const headers: HttpHeaders = this.buildHeaders();

    return this._http
      .post<IDocSuggestionResponse>(
        `${this.docServer}suggest`,
        {
          contentLocale: 'en-US', // need to get from config
          filters: [],
          input: searchTerm,
          sort: [],
        },
        { headers }
      )
      .pipe(
        map(
          (results: IDocSuggestionResponse) =>
            results.suggestions as IDocSuggestion[]
        )
      );
  }

  topicSearch$(searchTerm: string): Observable<ITopicSearchEntry[]> {
    // topicSearch$(searchTerm: string): Observable<IDocSearchResponse> {
    const headers: HttpHeaders = this.buildHeaders();

    return this._http
      .post<ITopicSearchResponse>(
        `${this.docServer}clustered-search`,
        {
          contentLocale: 'en-US', // need to get from config
          filters: this.buildLakeFilters(),
          query: searchTerm,
          sort: [],
          paging: {
            page: 1,
            perPage: 5,
          },
        },
        { headers }
      )
      .pipe(
        map(
          (searchResponse: ITopicSearchResponse) =>
            searchResponse.results[0].entries || []
        )
      );
  }

  private buildHeaders(contentType = 'application/json'): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Content-Type', contentType);
    headers = headers.set('Ft-Calling-App', 'teradata/internal');
    headers = headers.set('FT-Authorization', 'need bearer token here'); // dev?

    return headers;
  }

  private buildLakeFilters(): IDocFilter[] {
    return [
      {
        key: 'edition',
        values: ['"Lake"'],
        negative: false,
      },
    ];
  }
}
