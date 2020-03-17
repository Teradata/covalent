# tdLoading

Simply add the `tdLoading` attribute with a [name] value to the element you want to mask.

Dont forget to add the asterisk syntax before the `tdLoading` directive if its not used in a `<ng-template>` element. More ingo on the asterisk (*) syntax [here](https://angular.io/guide/structural-directives#asterisk)

## API Summary

#### Inputs

+ tdLoading: string
  + Name reference of the loading mask, used to register/resolve requests to the mask.
+ tdLoadingType?: LoadingType or ["linear" | "circular"]
  + Sets the type of loading mask depending on value.
  + Defaults to [LoadingType.Circular | "circular"]
+ tdLoadingMode?: LoadingMode or ["determinate" | "indeterminate"]
  + Sets the mode of loading mask depending on value.
  + Defaults to [LoadingMode.Indeterminate | "indeterminate"].
+ tdLoadingStrategy?: LoadingStrategy or ["replace" | "overlay"]
  + Sets the strategy of loading mask depending on value.
  + Defaults to [LoadingMode.Replace | "replace"]
+ tdLoadingColor?: "primary" | "accent" | "warn"
  + Sets the theme color of the loading component. 
  + Defaults to "primary"
+ tdLoadingUntil?: any
  + If its null, undefined or false it will be used to register requests to the mask.
  + Else if its any value that can be resolved as true, it will resolve the mask.
  + [name] is optional when using [until], but can still be used to register/resolve it manually.

# tdLoadingService

This service is designed to be a factory of loading masks and serves as a facade for their usage.

Simply add this service as a provider to be able to use it in a component.

TdLoadingService.create() method receives as parameter an object that implements the [ITdLoadingConfig] interface.
 
```typescript
interface ITdLoadingConfig {
  name: string;
  type?: LoadingType;
  mode?: LoadingMode;
  color?: 'primary' | 'accent' | 'warn';
}
```

## API Summary

#### Methods

+ register: function(name?: string, registers: number = 1)
  + Registers a request for the loading mask referenced by the name parameter.
  + Can optionally pass registers argument to set a number of register calls.
  + If no paramemeters are used, then default main mask will be used
+ resolve: function(name?: string, resolves: number = 1)
  + Resolves a request for the loading mask referenced by the name parameter.
  + Can optionally pass resolves argument to set a number of resolve calls.
  + If no paramemeters are used, then default main mask will be used.
+ resolveAll: function(name?: string)
  + Resolves all requests for the loading mask referenced by the name parameter.
  + If no paramemeters are used, then default main mask will be used.
+ setValue: function(name: string, value: number)
  + Set value on a loading mask referenced by the name parameter. 
  + Usage only available if its mode is 'determinate'.
+ create: function(options: ITdLoadingConfig
  + Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
  + Only displayed when the mask has a request registered on it.

## Setup

Import the [CovalentLoadingModule] in your NgModule:

```typescript
import { CovalentLoadingModule } from '@covalent/core/loading';
@NgModule({
  imports: [
    CovalentLoadingModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for (*) syntax:

```html
<div *tdLoading="'stringName'; type:'circular'; mode:'indeterminate'; strategy:'replace'; color:'primary'">
  ...
</div>
```

```typescript
import { TdLoadingService } from '@covalent/core/loading';
...
})
export class Demo {
  constructor(private _loadingService: TdLoadingService) {
    ...
  }

  registerLoading(): void {
    this._loadingService.register('stringName');
  }

  resolveLoading(): void {
    this._loadingService.resolve('stringName');
  }
}
```

Exmaple for (*) until async syntax:

```html
<div *tdLoading="let item until observable | async; type:'circular'; color:'primary'">
  {{item}}
</div>
```

Example for `<ng-template>` syntax:

```html
<ng-template tdLoading="stringName" tdLoadingType="circular" tdLoadingMode="indeterminate" tdLoadingStrategy="replace" tdLoadingColor="primary">
  ...
</ng-template>
```

```typescript
import { TdLoadingService } from '@covalent/core/loading';
...
})
export class Demo {
  constructor(private _loadingService: TdLoadingService) {
    ...
  }

  registerLoading(): void {
    this._loadingService.register('stringName');
  }

  resolveLoading(): void {
    this._loadingService.resolve('stringName');
  }
}
```

Example for `<ng-template>` until syntax:

```html
<ng-template tdLoading [tdLoadingUntil]="boolean">
  ...
</ng-template>
```

Example creating a global mask with the `tdLoadingService`:

```typescript
import { TdLoadingService, LoadingType, LoadingMode } from '@covalent/core/loading';
...
export class Demo {
  constructor(private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'stringName',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'accent',
    });
  }

  registerLoading(): void {
    this._loadingService.register('stringName');
  }

  resolveLoading(): void {
    this._loadingService.resolve('stringName'); // or this._loadingService.resolveAll('stringName');
  }
}
```
