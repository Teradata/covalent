# Getting Started

Get started with Covalent using the Angular CLI.

See the  [material getting started](https://github.com/angular/material2/blob/master/guides/getting-started.md) for instructions.

## Install the CLI
 
```bash
npm install -g @angular/cli@latest
```
 
## Create a new project
 
```bash
ng new my-project
```

The new command creates a project with a build system for your Angular app.

## Install Covalent Echarts module 

```bash
npm install --save @covalent/echarts
```

To test (__only for testing!__) the latest changes from develop, install the nightly build:

```bash
npm install --save https://github.com/Teradata/covalent-echarts-nightly.git
```

## Import the Covalent Core NgModule
  
**src/app/app.module.ts**
```ts
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
// other imports 
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
  ],
  ...
})
export class AppModule { }
```

## Configuring SystemJS
If your project is using SystemJS for module loading, you will need to add `@covalent/echarts` 
to the SystemJS configuration:

```js
System.config({
  // existing configuration options
  map: {
    ...,
    '@covalent/echarts/base': 'npm:@covalent/core/bundles/covalent-echarts-base.umd.min.js',
  }
});
```
