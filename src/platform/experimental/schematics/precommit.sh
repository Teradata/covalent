# Run test and linter
npm run test
tslint --format codeFrame -c ./tslint.json "./src/**/*.ts"

# Link project
npm link

# Create Angular base project
cd /tmp
rm -rf testxyz
ng new testxyz

# Run covalent schematics
cd testxyz
npm link covalent-schematics
ng g covalent-schematics:ng-add

# Check generated files
git status
npm install

