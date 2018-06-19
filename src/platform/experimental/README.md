
<p align="center">
  <img src="https://user-images.githubusercontent.com/24550592/41626750-1c5e3278-73d2-11e8-9725-7e6b41a773da.png" alt="covalent-experimental-logo" width="450px"/>
</p>

The experimental area is a sandboxed repository used to conduct experiments on potential features that may or may not become part of a fully supported Covalent release. We want to set the correct expectations of how the community should view this experimental area. We do not plan to provide support for any items created in the experimental area unless the experiment is promoted into the non-experimental area of Covalent github repository. We would love any feedback on these experiments from the community :).
___

### How to create a new experiment (import { myNewExperiment } from @covalent/experimental)

**Step 1:** Clone Covalent repo

1. `git clone https://github.com/Teradata/covalent`

**Step 2:** Copy the template experiment
1. `cd src/platform/experimental`
2. `cp -R template-rename-me-experiment-module <my-new-experiment>` Change my-new-experiment to the name of your experiment (keep it short and use dashes)

**Step 3:** Renaming the templates contents
1. Rename the copied folder to your experiments name (keep it short and use dashes) (EX: my-new-experiment)
2. Everywhere in your new experiment folder (filenames and file content) where you see `rename-me` `renameMe` or `RenameMe` replace it with your experiments name, respective of the convention shown.
3. Last but not least, update the `src/platform/experimental/public-api.ts` to include your experiment too. Follow the same convention as the example template `export * from './template-rename-me-experiment-module/index';` and rename it to respectivly to match your experiments name.

**Notes:** 
1. By following the template your experiment will be compiled into standard compliant Angular Package Format (APF) via [ng-packagr](https://github.com/dherges/ng-packagr). If you would like to learn more about the benefits of APF you can reference this [link](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit).
2. Don't forget to update your experiments `public-api.ts` and your experiments `*.module.ts` files as you decide what parts of your new experiment/feature you want to publicly expose to your fellow developers using it.
3. After you create your experiment test it out on a new/existing compatible angular project (respective of the angular version your experiment is using) and verify that you can use your experiment as designed. Do this by running `npm run build:lib`, and npm installing the generated `deploy/experimental.tgz` respective of file path from the new project that you create. To find out more about how to `npm  --save install` your .tgz file check this [link](https://docs.npmjs.com/cli/install).
4. If you experiment starts to become a serious project: (1) fill out your experiments `README.md` and (2) write unit tests for it.
5. If you have question please don't hesitate to ask us by either opening a GitHub issue or connecting with us in the [Covalent Gitter channel](https://gitter.im/Teradata/covalent).

