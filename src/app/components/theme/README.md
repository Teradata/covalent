# Vantage Theme Service

Exposes methods to toggle theme and observables to listen to theme changes.

## Sample usage

```ts
import { VantageThemeModule } from '@td-vantage/ui-platform/theme';
{
  imports: [VantageThemeModule],
};
```

Choose your weapon of choice

### Within TypeScript

```ts
import { VantageThemeService } from '@td-vantage/ui-platform/theme';
 {
  constructor(public _themeService: VantageThemeService) {}

  ngOnInit(): void {
    this._themeService
      .map({ 'dark-theme': 'dark-logo', 'light-theme': 'light-logo' })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(console.log);

    this._themeService.darkTheme$.pipe(takeUntil(this.unsubscribe)).subscribe(console.log);
    this._themeService.lightTheme$.pipe(takeUntil(this.unsubscribe)).subscribe(console.log);
    this._themeService.activeTheme$.pipe(takeUntil(this.unsubscribe)).subscribe(console.log);
  }
}
```

### Within HTML

```html
<div>
  <div>Active theme: {{ _themeService.activeTheme$ | async }}</div>
  <div>Dark theme is active: {{ _themeService.darkTheme$ | async }}</div>
  <div>Light theme is active: {{ _themeService.lightTheme$ | async }}</div>
  <div>
    Theme map: {{ _themeService.map({ 'dark-theme': 'hacker vibes 👩‍💻', 'light-theme': 'miami vibes 🏖️' }) | async }}
  </div>
</div>
```
