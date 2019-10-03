# Run test and linter
npm run test:schematics
npm run tslint

# Link project
cd ../src/platform/core
npm link

# Create Angular base project
cd /tmp
rm -rf testxyz
ng new testxyz

# Run covalent schematics
cd testxyz
npm link @covalent/core
ng g @covalent/core:ng-add

# Check generated files
git status
npm install

