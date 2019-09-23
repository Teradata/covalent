import * as echarts from 'echarts/lib/echarts';

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
export function registerTheme(themeName: string, theme: Object): void {
  echarts.registerTheme(themeName, theme);
}

/**
 * Function to register all default themes
 * @internal
 */
export function registerDefaultThemes(): void {
  registerTheme('aqua-splash', aquaSplash);
  registerTheme('california-coast', californiaCoast);
  registerTheme('hawaiian-sunrise', hawaiianSunrise);
  registerTheme('passion-flower', passionFlower);
  registerTheme('razzleberry-pie', razzleberryPie);
  registerTheme('teradata-classic', teradataClassic);
  registerTheme('teradata-default', teradataDefault);
  registerTheme('urban-sunrise', urbanSunrise);
  registerTheme('volcanic-eruption', volcanicEruption);
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
