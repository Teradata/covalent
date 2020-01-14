# td-powerbi-embed
`td-powerbi-embed` element generates an embedding Power BI visualization, which is built on top of the official [powerbi-client](https://github.com/microsoft/PowerBI-JavaScript). library.


## API Summary

#### Inputs

+ accessToken: string
  + The generation of this token is not part of this library. The token must be fetched by a server and serverd to the client.
+ tokenType: 'Aad' | 'Embed'
  + Sets the the type of the token attributed.
+ id: string
  + The asset id, which can be retrieved from the embed URL.
+ type: 'dashboard' | 'report' | 'tile'
  + The asset type for embedding.
+ embedUrl: string
  + The embed URL generated either from `Publish to Web` or `Embed` options.
+ settings?: ISettings
  + Embed configuration settings.
+ theme?: any
  + Custom theme object.
+ viewMode?: 'View' | 'Edit'
  + Vizualization view mode. Default is 'View'.

#### Outputs

+ vizLoaded: function($event) 
  + Returns the loaded visualization object.

## Setup

Import the [CovalentPowerBIModule] in your NgModule:

```typescript
import { CovalentPowerBIModule } from '@covalent/powerbi-embed';
@NgModule({
  imports: [
    CovalentPowerBIModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
<td-powerbi-embed
  [embedUrl]="embedUrl"
  [tokenType]="'Aad'"
  [id]="reportId"
  [type]="'report'"
  [accessToken]="accessToken"
  [theme]="theme"
  (vizLoaded)="onVizLoaded($event)">
</td-powerbi-embed>
```
