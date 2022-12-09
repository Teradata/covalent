import aquaSplash from '../themes/aqua-splash';
import californiaCoast from '../themes/california-coast';
import hawaiianSunrise from '../themes/hawaiian-sunrise';
import passionFlower from '../themes/passion-flower';
import razzleberryPie from '../themes/razzleberry-pie';
import teradataClassic from '../themes/teradata-classic';
import teradataDefault from '../themes/teradata-default';
import urbanSunrise from '../themes/urban-sunrise';
import volcanicEruption from '../themes/volcanic-eruption';

/**
 * Function used to register a theme into echarts
 * Theme name and theme object needed as stated in
 * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.registerTheme
 */
export function registerTheme(echartsLibrary: typeof echarts, themeName: string, theme: object): void {
  echartsLibrary.registerTheme(themeName, theme);
}

/**
 * Function to register all default themes
 * @internal
 */
export function registerDefaultThemes(echartsLibrary: typeof echarts): void {
  registerTheme(echartsLibrary, 'aqua-splash', aquaSplash);
  registerTheme(echartsLibrary, 'california-coast', californiaCoast);
  registerTheme(echartsLibrary, 'hawaiian-sunrise', hawaiianSunrise);
  registerTheme(echartsLibrary, 'passion-flower', passionFlower);
  registerTheme(echartsLibrary, 'razzleberry-pie', razzleberryPie);
  registerTheme(echartsLibrary, 'teradata-classic', teradataClassic);
  registerTheme(echartsLibrary, 'teradata-default', teradataDefault);
  registerTheme(echartsLibrary, 'urban-sunrise', urbanSunrise);
  registerTheme(echartsLibrary, 'volcanic-eruption', volcanicEruption);
}

/**
 * Returns all the theme names bundled with covalent echarts.
 */
export function getThemes(): string[] {
  return [
    'aqua-splash',
    'california-coast',
    'hawaiian-sunrise',
    'passion-flower',
    'razzleberry-pie',
    'teradata-classic',
    'teradata-default',
    'urban-sunrise',
    'volcanic-eruption',
  ];
}
