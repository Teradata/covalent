import { CommonModule } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { THEME_LOCAL_STORAGE_KEY, VantageThemeService, VantageTheme, VANTAGE_THEME_PROVIDER } from './theme.service';
import { Observable } from 'rxjs';

let mockItems = {};
const mockLocalStorage = {
  getItem: (key: string) => {
    return key in mockItems ? mockItems[key] : undefined;
  },

  removeItem: (key: string) => {
    delete mockItems[key];
  },

  setItem: (key: string, value: string) => {
    mockItems[key] = value;
  },
};
const resetMockItems = () => (mockItems = {});

describe('ThemeService', () => {
  let service: VantageThemeService;
  let mediaSpy: jasmine.Spy;
  let mediaQueryList: MediaQueryList;
  let browserDefaultTheme: VantageTheme;

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    browserDefaultTheme = mediaQueryList.matches ? VantageTheme.DARK : VantageTheme.LIGHT;

    mediaSpy = spyOn(window, 'matchMedia').and.returnValue(mediaQueryList);

    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [VANTAGE_THEME_PROVIDER],
    });
  });

  afterEach(resetMockItems);

  it('should be able map values based on active theme', fakeAsync(() => {
    service = TestBed.inject(VantageThemeService);

    const mapObs: Observable<any> = service.map({ 'dark-theme': 'hacker vibes 👩‍💻', 'light-theme': 'miami vibes 🏖️' });
    let mapResult: string;

    service.applyDarkTheme();

    mapObs.subscribe((map: any) => {
      mapResult = map;
    });

    tick(50);

    expect(mapResult).toEqual('hacker vibes 👩‍💻');

    service.applyLightTheme();

    tick(50);

    expect(mapResult).toEqual('miami vibes 🏖️');
  }));

  it('should be able to give fallback from map values based on active theme', fakeAsync(() => {
    service = TestBed.inject(VantageThemeService);

    const mapObs: Observable<any> = service.map({ 'dark-theme': 'hacker vibes 👩‍💻' }, 'fallback');
    let mapResult: string;

    service.applyLightTheme();

    mapObs.subscribe((map: any) => {
      mapResult = map;
    });

    tick(50);

    expect(mapResult).toEqual('fallback');
  }));

  it('should be able to apply light theme', fakeAsync(() => {
    service = TestBed.inject(VantageThemeService);

    service.applyLightTheme();

    tick(50);

    expect(service.activeTheme()).toBe(VantageTheme.LIGHT);
    expect(localStorage.setItem).toHaveBeenCalled();
  }));

  it('should be able to apply dark theme', fakeAsync(() => {
    service = TestBed.inject(VantageThemeService);

    service.applyDarkTheme();

    tick(50);

    expect(service.activeTheme()).toBe(VantageTheme.DARK);
    expect(localStorage.setItem).toHaveBeenCalled();
  }));

  it('should apply theme on OS preference change', fakeAsync(() => {
    let mediaQueryEvent: MediaQueryListEvent = new MediaQueryListEvent('storage', {
      media: '(prefers-color-scheme: dark)',
      matches: true,
    });

    service = TestBed.inject(VantageThemeService);

    window.matchMedia('(prefers-color-scheme: dark)').dispatchEvent(mediaQueryEvent);

    tick(50);

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(mediaSpy).toHaveBeenCalled();
    expect(service.activeTheme()).toBe(browserDefaultTheme);

    mediaQueryEvent = new MediaQueryListEvent('change', {
      media: '(prefers-color-scheme: dark)',
      matches: false,
    });

    window.matchMedia('(prefers-color-scheme: dark)').dispatchEvent(mediaQueryEvent);

    tick(50);

    expect(service.activeTheme()).toBe(VantageTheme.LIGHT);
  }));

  it('should pull previous theme choices from localStorage', fakeAsync(() => {
    // start with preloaded localStorage theme
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, VantageTheme.DARK);
    const storageEvent: StorageEvent = new StorageEvent('storage', {
      key: THEME_LOCAL_STORAGE_KEY,
      newValue: VantageTheme.DARK,
    });

    service = TestBed.inject(VantageThemeService);

    window.dispatchEvent(storageEvent);

    tick(50);

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(mediaSpy).toHaveBeenCalled();
    expect(service.activeTheme()).toBe(VantageTheme.DARK);
  }));

  it('should check OS preferences when a storage event occurs if newValue is undefined', fakeAsync(() => {
    // start with preloaded localStorage theme
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, undefined);
    const storageEvent: StorageEvent = new StorageEvent('storage', {
      key: THEME_LOCAL_STORAGE_KEY,
      newValue: undefined,
    });

    // ensure browser under test is always the same
    mediaSpy.and.returnValue({ matches: false, addListener: () => undefined, removeListener: () => undefined });

    service = TestBed.inject(VantageThemeService);

    window.dispatchEvent(storageEvent);

    spyOn(service as any, 'checkOSPreference');

    tick(50);

    expect(mediaSpy).toHaveBeenCalled();

    expect(service.activeTheme()).toBe(VantageTheme.LIGHT);
  }));

  it('should fall back to the browser theme preference', () => {
    service = TestBed.inject(VantageThemeService);

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(mediaSpy).toHaveBeenCalled();
    expect(service.activeTheme()).toBe(browserDefaultTheme);
  });

  it('should default to the Light theme in absence of other preferences', () => {
    mediaSpy.and.returnValue({ matches: false, addListener: () => undefined, removeListener: () => undefined });
    service = TestBed.inject(VantageThemeService);

    expect(service.activeTheme()).toBe(VantageTheme.LIGHT);
  });

  it('should set the theme in localStorage', () => {
    service = TestBed.inject(VantageThemeService);
    service.applyDarkTheme();

    expect(localStorage.setItem).toHaveBeenCalledWith(THEME_LOCAL_STORAGE_KEY, VantageTheme.DARK);
    expect(service.activeTheme()).toBe(VantageTheme.DARK);
    expect(localStorage.getItem(THEME_LOCAL_STORAGE_KEY)).toBe(VantageTheme.DARK);
  });

  it('should toggle between light and dark', () => {
    service = TestBed.inject(VantageThemeService);
    service.applyDarkTheme();

    expect(service.activeTheme()).toBe(VantageTheme.DARK);

    service.toggleTheme();

    expect(service.activeTheme()).toBe(VantageTheme.LIGHT);

    service.toggleTheme();

    expect(service.activeTheme()).toBe(VantageTheme.DARK);
  });
});
