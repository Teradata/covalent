# td-chart-series[td-treemap]

`td-chart-series[td-treemap]` element generates a treemap series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="treemap"` in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: [config] input properties will override input values

There are also lots of property inputs like:

+ id?: string
  + It can be used to refer the component in option or API.
+ name?: string
  + Series name used for displaying in tooltip and filtering with legend.
+ leafDepth?: number
  + Represents how many levels are shown at most.
+ roam?: boolean
  + Whether to enable dragging roam (move and zoom).

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap)

## Setup

Import the [CovalentTreemapEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTreemapEchartsModule } from '@covalent/echarts/treemap';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentTreemapEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-chart>
  <td-chart-series td-treemap
                  [top]="'10%'"
                  [left]="'10%'"
                  [bottom]="'10%'"
                  [right]="'10%'"
                  [data]="[{
                        value: 40,
                        name: 'Accessibility',
                        path: 'Accessibility'
                      }, {
                        value: 180,
                        name: 'Accounts',
                        path: 'Accounts',
                        children: [{
                          value: 76,
                          name: 'Access',
                          path: 'Accounts/Access',
                          children: [{
                            value: 12,
                            name: 'DefaultAccessPlugin.bundle',
                            path: 'Accounts/Access/DefaultAccessPlugin.bundle'
                          }, {
                            value: 28,
                            name: 'FacebookAccessPlugin.bundle',
                            path: 'Accounts/Access/FacebookAccessPlugin.bundle'
                          }, {
                            value: 20,
                            name: 'LinkedInAccessPlugin.bundle',
                            path: 'Accounts/Access/LinkedInAccessPlugin.bundle'
                          }, {
                            value: 16,
                            name: 'TencentWeiboAccessPlugin.bundle',
                            path: 'Accounts/Access/TencentWeiboAccessPlugin.bundle'
                          }]
                        }, {
                          value: 92,
                          name: 'Authentication',
                          path: 'Accounts/Authentication',
                          children: [{
                            value: 24,
                            name: 'FacebookAuthenticationPlugin.bundle',
                            path: 'Accounts/Authentication/FacebookAuthenticationPlugin.bundle'
                          }, {
                            value: 16,
                            name: 'LinkedInAuthenticationPlugin.bundle',
                            path: 'Accounts/Authentication/LinkedInAuthenticationPlugin.bundle'
                          }, {
                            value: 20,
                            name: 'TencentWeiboAuthenticationPlugin.bundle',
                            path: 'Accounts/Authentication/TencentWeiboAuthenticationPlugin.bundle'
                          }, {
                            value: 16,
                            name: 'TwitterAuthenticationPlugin.bundle',
                            path: 'Accounts/Authentication/TwitterAuthenticationPlugin.bundle'
                          }, {
                            value: 16,
                            name: 'WeiboAuthenticationPlugin.bundle',
                            path: 'Accounts/Authentication/WeiboAuthenticationPlugin.bundle'
                          }]
                        }, {
                          value: 12,
                          name: 'Notification',
                          path: 'Accounts/Notification',
                          children: [{
                            value: 12,
                            name: 'SPAAccountsNotificationPlugin.bundle',
                            path: 'Accounts/Notification/SPAAccountsNotificationPlugin.bundle'
                          }]
                        }]
                      }, {
                        value: 1904,
                        name: 'AddressBook Plug-Ins',
                        path: 'AddressBook Plug-Ins',
                        children: [{
                          value: 744,
                          name: 'CardDAVPlugin.sourcebundle',
                          path: 'AddressBook Plug-Ins/CardDAVPlugin.sourcebundle',
                          children: [{
                            value: 744,
                            name: 'Contents',
                            path: 'AddressBook Plug-Ins/CardDAVPlugin.sourcebundle/Contents'
                          }]
                      }, {
                        value: 28,
                        name: 'DirectoryServices.sourcebundle',
                        path: 'AddressBook Plug-Ins/DirectoryServices.sourcebundle',
                        children: [{
                          value: 28,
                          name: 'Contents',
                          path: 'AddressBook Plug-Ins/DirectoryServices.sourcebundle/Contents'
                        }]
                      }, {
                        value: 680,
                        name: 'Exchange.sourcebundle',
                        path: 'AddressBook Plug-Ins/Exchange.sourcebundle',
                        children: [{
                          value: 680,
                          name: 'Contents',
                          path: 'AddressBook Plug-Ins/Exchange.sourcebundle/Contents'
                        }]
                      }, {
                        value: 432,
                        name: 'LDAP.sourcebundle',
                        path: 'AddressBook Plug-Ins/LDAP.sourcebundle',
                        children: [{
                          value: 432,
                          name: 'Contents',
                          path: 'AddressBook Plug-Ins/LDAP.sourcebundle/Contents'
                        }]
                      }, {
                        value: 20,
                        name: 'LocalSource.sourcebundle',
                        path: 'AddressBook Plug-Ins/LocalSource.sourcebundle',
                        children: [{
                          value: 20,
                          name: 'Contents',
                          path: 'AddressBook Plug-Ins/LocalSource.sourcebundle/Contents'
                        }]
                      }]
                    }]"
                  [visibleMin]="300"
                  [label] = "{
                    show: true,
                    formatter: '{b}'
                  }"
                  [itemStyle]="{
                    normal: {
                      borderColor: '#fff'
                    }
                  }"
                  [levels]="[{itemStyle: {normal: {borderWidth: 0, gapWidth: 5 }}},{itemStyle: {normal: {gapWidth: 1}}},{colorSaturation: [0.35, 0.5], itemStyle: {normal: {gapWidth: 1, borderColorSaturation: 0.6}}}]">
  </td-chart-series>
</td-chart>
```
