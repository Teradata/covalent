
<p align="center">
  <img src="https://user-images.githubusercontent.com/24550592/41626750-1c5e3278-73d2-11e8-9725-7e6b41a773da.png" alt="covalent-experimental-logo" width="450px"/>
</p>

The experimental area is a sandboxed repository used to conduct experiments on potential features that may or may not become part of a fully supported Covalent release. We want to set the correct expectations of how the community should view this experimental area. We do not plan to provide support for any items created in the experimental area unless the experiment is promoted into the non-experimental area of Covalent github repository. We would love any feedback on these experiments from the community :).
___

### How to create a new experiment

**Step 1:** Clone Covalent repo

1. `git clone https://github.com/Teradata/covalent`

**Step 2:** Copy the template experiment
1. `cd src/platform/experimental`
2. `cp -R template-rename-me-experiment-module <my-new-experiment>` Change my-new-experiment to the name of your experiment (keep it short and use dashes)

**Step 3:** Renaming the templates contents
1. `cd <my-new-experiment>` (Replace above my-new-experiment to the name of your experiment)
2. List out the directory contents with command: `ls`
3. Notice all the filenames with `rename-me` in them for example `rename-me.component.html`
4. Change all filenames with `rename-me` to `<my-new-experiment>` for example: my-new-experiment.component.html. (Replace above my-new-experiment to the name of your experiment)
5. Open all the files in the directory with a text editor and anywhere you see `rename-me` `renameMe` or `RenameMe` replace it with your experiments name. Respective of casing style.
6. In a text editor open `src/platform/experimental/public-api.ts` and include your experiment by adding the following line to the end of the file: `export * from './<my-new-experiment>/index';` (Replace above my-new-experiment to the name of your experiment)

**Step 4:** Run test-bed application

1. `npm run serve:experimental`

**Notes:** 
1. By following the template your experiment will be compiled into standard compliant Angular Package Format (APF) via [ng-packagr](https://github.com/dherges/ng-packagr). If you would like to learn more about the benefits of APF you can reference this [link](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit).
2. Don't forget to update your experiments `public-api.ts` and your experiments `*.module.ts` files as you decide what parts of your new experiment/feature you want to publicly expose to your fellow developers using it.
3. After you create your experiment test it out on a new/existing compatible angular project (respective of the angular version your experiment is using) and verify that you can use your experiment as designed. Do this by running `npm run build:lib`, and npm installing the generated `deploy/experimental.tgz` respective of file path from the new project that you create. To find out more about how to `npm  --save install` your .tgz file check this [link](https://docs.npmjs.com/cli/install).
4. If you experiment starts to become a serious project: (1) fill out your experiments `README.md` and (2) write unit tests for it.
5. If you have question please don't hesitate to ask us by either opening a GitHub issue or connecting with us in the [Covalent Gitter channel](https://gitter.im/Teradata/covalent).


### How to install experimental modules

WARNING: Experimental features are prone to change or be removed at any time. Do not use in production as these features are unsupported!

#### Installation

```bash
npm install --save https://github.com/Teradata/covalent-experimental-nightly.git
```

#### Import the Covalent Experimental NgModules
  
**src/app/app.module.ts**
```ts
import { CovalentTabSelectModule } from '@covalent/experimental/tab-select';
...
// other imports 
@NgModule({
  imports: [
    CovalentTabSelectModule,
  ],
  ...
})
export class AppModule { }
```