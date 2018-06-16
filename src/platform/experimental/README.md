## Experimental Sandbox
This `experimental` entrypoint is a sandbox zone for Covalent. It is used to conduct experiments on potential features that may or may not become incorporated into Covalent. We want to set the correct expectations for how the community should view this experimental entrypoint. We do not plan to provide long or short term support for any items created in the experimental entrypoint unless the experiment is promoted into the rest of the Covalent ecosystem making it no longer an experiment. We would love any feedback on these experiments from the community :).
___

### How to create a new Angular experiment module (aka import { myNewExperiment } from @covalent/experimental)
Side note: based on demand we can look into writing a script or Angular schematic to create a new experiment rather then doing the steps below manually

**Step 1:** 

* Verify you have already cloned the Covalent repo onto you computer.

**Step 2:** Copy the template experiment
* Go inside the `src/platform/experimental` folder and copy/paste the `template-rename-me-experiment-module` folder into the same directory.

**Step 3:** Renaming the templates contents
1. Rename the copied folder to your experiments name (keep it short and use dashes) (EX: my-new-experiment)
2. Everywhere in your new experiment folder (filenames and file content) where you see `rename-me` `renameMe` or `RenameMe` replace it with your experiments name, respective of the convention shown.
3. Last but not least, update the `src/platform/experimental/public-api.ts` to include your experiment too. Follow the same convention as the example template `export * from './template-rename-me-experiment-module/index';` and rename it to respectivly to match your experiments name.

**Step 4:** Your almost ready to become that mad scientist you always dreamed of, but some minor notes to leave with you.
1. By following the template your experiment will be compiled into standard compliant Angular Package Format (APF) via [ng-packagr](https://github.com/dherges/ng-packagr). If you would like to learn more about the benefits of APF you can reference this [link](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit).
2. Don't forget to update your experiments `public-api.ts` and your experiments `*.module.ts` files as you decide what parts of your new experiment/feature you want to publicly expose to your fellow developers using it.
3. After you create your experiment test it out on a new/existing compatible angular project (respective of the angular version your experiment is using) and verify that you can use your experiment as designed. Do this by running `npm run build:lib`, and npm installing the generated `deploy/experimental.tgz` respective of file path from the new project that you create. To find out more about how to `npm  --save install` your .tgz file check this [link](https://docs.npmjs.com/cli/install).
4. If you experiment starts to become a serious project: (1) fill out your experiments `README.md` and (2) write unit tests for it.
5. If you have question please don't hesitate to ask us by either opening a GitHub issue or connecting with us in the Covalent Slack channel.
___

### How to create a new experiment that is NOT an Angular module 

**Step 1:** 
* Make sure you have already cloned the Covalent repo onto you computer.

**Step 2:** 
* In the `src/platform/experimental` folder create a new folder and name it after your experiment (keep it short and use dashes) (EX: my-new-experiment)

**Step 3:** 
* Add anything you need to conduct your experiment in your new experiment's folder. Add respective documation for your fellow developer as needed. If you have question please don't hesitate to ask us by either opening a GitHub issue or connecting with us in the Covalent Slack channel.

