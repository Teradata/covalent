import { Injectable, Renderer2, Inject, RendererFactory2, Provider, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject, Observable, fromEventPattern, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

export const THEME_LOCAL_STORAGE_KEY: string = 'vantage.theme';

export enum VantageTheme {
  DARK = 'dark-theme',
  LIGHT = 'light-theme',
}

export interface IVantageThemeMap {
  [VantageTheme.DARK]?: any;
  [VantageTheme.LIGHT]?: any;
}

@Injectable()
export class VantageThemeService {
  private _renderer2: Renderer2;

  private readonly _activeThemeSubject: BehaviorSubject<VantageTheme>;
  private readonly preferDarkMediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

  public activeTheme$: Observable<VantageTheme>;
  public darkTheme$: Observable<boolean>;
  public lightTheme$: Observable<boolean>;

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private _document: any) {
    const initialValue: VantageTheme =
      <VantageTheme>localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || this.checkOSPreference();

    this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
    this._activeThemeSubject = new BehaviorSubject<VantageTheme>(initialValue);

    this.activeTheme$ = this._activeThemeSubject.asObservable();
    this.darkTheme$ = this._activeThemeSubject
      .asObservable()
      .pipe(map((theme: VantageTheme) => theme === VantageTheme.DARK));
    this.lightTheme$ = this._activeThemeSubject
      .asObservable()
      .pipe(map((theme: VantageTheme) => theme === VantageTheme.LIGHT));

    // apply initial theme
    this.applyTheme(initialValue, false);

    // observe media query change events
    const mediaObserver: Observable<VantageTheme> = fromEventPattern<MediaQueryListEvent>(
      this.preferDarkMediaQuery.addListener.bind(this.preferDarkMediaQuery),
      this.preferDarkMediaQuery.removeListener.bind(this.preferDarkMediaQuery),
    ).pipe(
      map((event: MediaQueryListEvent) => {
        return event.matches ? VantageTheme.DARK : VantageTheme.LIGHT;
      }),
    );

    // account for storage events in other browser tabs
    const storageObserver: Observable<VantageTheme> = fromEvent(window, 'storage').pipe(
      filter((event: StorageEvent) => event.key === THEME_LOCAL_STORAGE_KEY),
      map((event: StorageEvent) => (event.newValue ? (event.newValue as VantageTheme) : this.checkOSPreference())),
    );

    // apply theme on storage or media query change
    merge(storageObserver, mediaObserver).subscribe((theme: VantageTheme) => this.applyTheme(theme));
  }

  private get _activeTheme(): VantageTheme {
    return this._activeThemeSubject.getValue();
  }

  private set _activeTheme(theme: VantageTheme) {
    this._activeThemeSubject.next(theme);
  }

  public get darkThemeIsActive(): boolean {
    return this._activeTheme === VantageTheme.DARK;
  }
  public get lightThemeIsActive(): boolean {
    return this._activeTheme === VantageTheme.LIGHT;
  }

  public activeTheme(): VantageTheme {
    return this._activeTheme;
  }

  public applyLightTheme(): VantageTheme {
    return this.applyTheme(VantageTheme.LIGHT);
  }

  public applyDarkTheme(): VantageTheme {
    return this.applyTheme(VantageTheme.DARK);
  }

  public toggleTheme(): VantageTheme {
    return this._activeTheme === VantageTheme.DARK ? this.applyLightTheme() : this.applyDarkTheme();
  }

  public map(mapObject: IVantageThemeMap, fallback?: any): Observable<any> {
    return this.activeTheme$.pipe(map((value: VantageTheme) => (value in mapObject ? mapObject[value] : fallback)));
  }

  private applyTheme(theme: VantageTheme, saveSetting: boolean = true): VantageTheme {
    this._renderer2.removeClass(
      this._document.querySelector('html'),
      theme === VantageTheme.DARK ? VantageTheme.LIGHT : VantageTheme.DARK,
    );
    this._renderer2.addClass(this._document.querySelector('html'), theme);

    if (saveSetting) {
      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    }

    return (this._activeTheme = theme);
  }

  private checkOSPreference(): VantageTheme {
    // it should now be light-by-default
    return this.preferDarkMediaQuery.matches ? VantageTheme.DARK : VantageTheme.LIGHT;
  }
}

export function VANTAGE_THEME_PROVIDER_FACTORY(
  parent: VantageThemeService,
  rendererFactory: RendererFactory2,
  _document: any,
): VantageThemeService {
  return parent || new VantageThemeService(rendererFactory, _document);
}

export const VANTAGE_THEME_PROVIDER: Provider = {
  // If there is already a service available, use that. Otherwise, provide a new one.
  provide: VantageThemeService,
  deps: [[new Optional(), new SkipSelf(), VantageThemeService], [RendererFactory2], [DOCUMENT]],
  useFactory: VANTAGE_THEME_PROVIDER_FACTORY,
};
