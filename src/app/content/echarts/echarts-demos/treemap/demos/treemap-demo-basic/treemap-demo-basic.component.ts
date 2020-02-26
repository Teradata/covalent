import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import * as echarts from 'echarts/lib/echarts';
import { getThemes } from '@covalent/echarts/base';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  selector: 'treemap-demo-basic',
  styleUrls: ['./treemap-demo-basic.component.scss'],
  templateUrl: './treemap-demo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TreemapDemoBasicComponent implements OnInit {
  themes: string[] = getThemes();
  selectedTheme: string;

  // Series data
  data: any = [
    {
      value: 40,
      name: 'Accessibility',
      path: 'Accessibility',
    },
    {
      value: 180,
      name: 'Accounts',
      path: 'Accounts',
      children: [
        {
          value: 76,
          name: 'Access',
          path: 'Accounts/Access',
          children: [
            {
              value: 12,
              name: 'DefaultAccessPlugin.bundle',
              path: 'Accounts/Access/DefaultAccessPlugin.bundle',
            },
            {
              value: 28,
              name: 'FacebookAccessPlugin.bundle',
              path: 'Accounts/Access/FacebookAccessPlugin.bundle',
            },
            {
              value: 20,
              name: 'LinkedInAccessPlugin.bundle',
              path: 'Accounts/Access/LinkedInAccessPlugin.bundle',
            },
            {
              value: 16,
              name: 'TencentWeiboAccessPlugin.bundle',
              path: 'Accounts/Access/TencentWeiboAccessPlugin.bundle',
            },
          ],
        },
        {
          value: 92,
          name: 'Authentication',
          path: 'Accounts/Authentication',
          children: [
            {
              value: 24,
              name: 'FacebookAuthenticationPlugin.bundle',
              path: 'Accounts/Authentication/FacebookAuthenticationPlugin.bundle',
            },
            {
              value: 16,
              name: 'LinkedInAuthenticationPlugin.bundle',
              path: 'Accounts/Authentication/LinkedInAuthenticationPlugin.bundle',
            },
            {
              value: 20,
              name: 'TencentWeiboAuthenticationPlugin.bundle',
              path: 'Accounts/Authentication/TencentWeiboAuthenticationPlugin.bundle',
            },
            {
              value: 16,
              name: 'TwitterAuthenticationPlugin.bundle',
              path: 'Accounts/Authentication/TwitterAuthenticationPlugin.bundle',
            },
            {
              value: 16,
              name: 'WeiboAuthenticationPlugin.bundle',
              path: 'Accounts/Authentication/WeiboAuthenticationPlugin.bundle',
            },
          ],
        },
        {
          value: 12,
          name: 'Notification',
          path: 'Accounts/Notification',
          children: [
            {
              value: 12,
              name: 'SPAAccountsNotificationPlugin.bundle',
              path: 'Accounts/Notification/SPAAccountsNotificationPlugin.bundle',
            },
          ],
        },
      ],
    },
    {
      value: 1904,
      name: 'AddressBook Plug-Ins',
      path: 'AddressBook Plug-Ins',
      children: [
        {
          value: 744,
          name: 'CardDAVPlugin.sourcebundle',
          path: 'AddressBook Plug-Ins/CardDAVPlugin.sourcebundle',
          children: [
            {
              value: 744,
              name: 'Contents',
              path: 'AddressBook Plug-Ins/CardDAVPlugin.sourcebundle/Contents',
            },
          ],
        },
        {
          value: 28,
          name: 'DirectoryServices.sourcebundle',
          path: 'AddressBook Plug-Ins/DirectoryServices.sourcebundle',
          children: [
            {
              value: 28,
              name: 'Contents',
              path: 'AddressBook Plug-Ins/DirectoryServices.sourcebundle/Contents',
            },
          ],
        },
        {
          value: 680,
          name: 'Exchange.sourcebundle',
          path: 'AddressBook Plug-Ins/Exchange.sourcebundle',
          children: [
            {
              value: 680,
              name: 'Contents',
              path: 'AddressBook Plug-Ins/Exchange.sourcebundle/Contents',
            },
          ],
        },
        {
          value: 432,
          name: 'LDAP.sourcebundle',
          path: 'AddressBook Plug-Ins/LDAP.sourcebundle',
          children: [
            {
              value: 432,
              name: 'Contents',
              path: 'AddressBook Plug-Ins/LDAP.sourcebundle/Contents',
            },
          ],
        },
        {
          value: 20,
          name: 'LocalSource.sourcebundle',
          path: 'AddressBook Plug-Ins/LocalSource.sourcebundle',
          children: [
            {
              value: 20,
              name: 'Contents',
              path: 'AddressBook Plug-Ins/LocalSource.sourcebundle/Contents',
            },
          ],
        },
      ],
    },
  ];

  // CHART JS Config object
  config: any = {
    grid: { borderColor: 'transparent' },
    xAxis: { show: false },
    yAxis: { show: false },
    series: [
      {
        type: 'treemap',
        data: this.data,

        top: '10%',
        left: '10%',
        bottom: '10%',
        right: '10%',
        itemStyle: {
          normal: {
            borderColor: '#fff',
          },
        },
        levels: [
          { itemStyle: { normal: { borderWidth: 0, gapWidth: 5 } } },
          { itemStyle: { normal: { gapWidth: 1 } } },
          { colorSaturation: [0.35, 0.5], itemStyle: { normal: { gapWidth: 1, borderColorSaturation: 0.6 } } },
        ],
        label: {
          show: true,
          formatter: '{b}',
        },
      },
    ],
  };

  constructor(private _cdr: ChangeDetectorRef, public themeSelector: ChartThemeSelectorService) {}

  async ngOnInit(): Promise<void> {
    this.selectedTheme = this.themeSelector.selected;
    this._cdr.markForCheck();
  }

  selectChartTheme(theme: string): void {
    this.themeSelector.select(theme);
  }
}
