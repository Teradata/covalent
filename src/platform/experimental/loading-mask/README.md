

<!-- # td-loading-mask -->

Loading Mask component generates an animated/static block for progressive loading.

selector: `td-loading-mask`  
  
<br />
## API Summary

#### Inputs

+ animated?: boolean
  + Disables animation making masks static.
  + Defaults to: true
+ animationDuration?: string
  + Modifies how fast or slow the shimmer animation is.
  + Defaults to: '1.9s'
+ borderRadius?: string
  + Sets border radius of loading mask.
  + Defaults to: '8px'
+ height?: boolean
  + Sets height of loading mask.
  + Defaults to: '16px'
+ width?: boolean
  + Sets width of loading mask.
  + Defaults to: '90px'


## Setup
```
import {TdLoadingMaskModule} from '@covalent/experimental/loading-mask';
```