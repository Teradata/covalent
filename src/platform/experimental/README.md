## Experimental 
This experimental entrypoint is a sandbox zone for Covalent. It is used to conduct experiments on potential features that may or may not become incorporated into Covalent. We want to set the correct expectations for how the community should view this experimental entrypoint. We do not plan to provide long or short term support for any items created in the experimental entrypoint unless the experiment is promoted into the rest of the Covalent ecosystem making it no longer an experiment. We would love any feedback on these experiments from the community :).

### How to create a new experiment module (aka import { myNewExperiment } from @covalent/experimental)
Side note: based on demand we can look into writing a cross platform script or an Angular schematic to create a new experiment rather then doing the steps below manually

**Step 1:** 

* Make you have already cloned the Covalent repo onto you computer.

**Step 2:** Copy the template experiment
* Inside the `src/platform/experimental` folder copy and past the `template-rename-me-expierment-module` folder into `src/platform/experimental` directory. You should see that it automatically got renamed too `template-rename-me-experiment-module.1` if you are using vscode.

**Step 3:** Renaming the templates content
1. Rename the just copied folder to your experiments name (keep it short and use dashes) (EX: my-new-experiment)
2. Everywhere in your new experiment folder where you see `rename-me` `renameMe` or `RenameMe` replace it with your experiments name, respective of the convetion shown.
3. Last but not least, update the `src/platform/experimental/public-api.ts` to include your experiment too. Follow the same convention as the `export * from './template-rename-me-experiment-module/index';` template example and rename it respectivly.

**Step 4:** Your almost ready to become that mad scientist you always dreamed of with your crazy new experiment, but some minor notes to leave you with.
1. By following the template your experiment will be compiled into standard complient Angular Package Format (APF) via [ng-packagr](https://github.com/dherges/ng-packagr). If you would like to learn more about the benefits of APF you can checkout this [out](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit)
2. Don't forget to update your experiments `public-api.ts` and your experiments `*.module.ts` files as you decide what parts of your new experiment/feature you want to publicly expose to developers using it. If you don't your fellow developers won't be able to use it after it gets all bundled up :(.
3. After you create your experiment test it out on a new angular project to make sure that your fellow developers can use em too. Do this by running `npm run build:lib`, and npm installing the generated `deploy/experimental.tgz` (respective of file path from the new project that you create)

## How to create a new experiment NOT a module 
