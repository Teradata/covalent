# Covalent schematics
Utilizes the Angular Schematics workflow tool to create Covalent applications

## Prerequisites

Prerequisites to run Covalent schematics in your project:

```
Node : v8.15.0
Npm : 6.7.0
Typescript : 3.1.3
Tslint : 5.12.1
Angular CLI : 7.2.2
```

## Install Covalent core schematics
The following will:
- Ensure project dependencies are placed in package.json
- Install all core components
- Optionally install dynamic forms, http service, code highlight, markdown parser, flavored markdown parser
- Add Covalent theme file to your src folder
- Include theme.scss in angular config

### Build locally
To run Covalent core schematic locally, run the following commands:

(alternatively run `./precommit-schematics.sh` from scripts folder that includes the same commands)

#### Run test and linter
```
npm run test-schematics
npm run tslint
```

#### Link project
```
cd ../src/platform/experimental
npm link
```

#### Create Angular base project
```
cd /tmp
rm -rf testxyz
ng new testxyz
```

#### Run Covalent schematics
```
cd testxyz
npm link @covalent/experimental
ng g @covalent/experimental:ng-add
```

#### Check generated files
```
git status
npm install
ng serve
```

### Covalent core `ng add` schematic
*NOTE: This command does not work yet and will not work until after Covalent schematics is published to npm.  Most likely once it is out of the Covalent experimental area.  See above on how to build locally instead.*
``` 
ng add @covalent/core 
```
