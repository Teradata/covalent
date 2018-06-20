# Developer Guide for the Platform

* [Source Structure](#source-structure)
* [Adding a new platform feature (component/module/utility)](#adding-a-new-platform-feature-componentmoduleutility) 
* [Adding a new documentation component](#adding-a-new-documentation-component) 

## Source Structure

The source has two parts, the platform and a documentation app.

```
/src/app - Contains the documentation application
/src/platform - Contains the platform assets 
```

## Adding a new platform feature (component/module/utility)

Please reference these [docs](https://github.com/Teradata/covalent/blob/93c5a064d1aa19fab5015f5def2b300f48671de2/src/platform/experimental/README.md). 



 
## Adding a new documentation component

You can use the `ng generate component components/[name]` and it will generate the new component stub in `src/app/components/[name]`.
