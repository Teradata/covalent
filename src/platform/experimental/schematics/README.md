# Covalent schematics
Utilizes the Angular Schematics workflow tool to create Covalent applications

## Prerequisites

Prerequisites to run Covalent schematics in your project:

```
Node : v8.15.0
Npm : 6.7.0
Typescript : 3.3.1
Tslint : 5.12.1
Angular CLI : 7.2.2
```

## Install Covalent core schematics

## Build locally
To run Covalent core schematic locally, run the following commands:


(alternatively run `./precommit.sh` from schematics folder that includes the same commands)

### Run test and linter
```
npm run test
tslint --format codeFrame -c ./tslint.json "./src/**/*.ts"
```

### Link project
```
npm link
```

### Create Angular base project
```
cd /tmp
rm -rf testxyz
ng new testxyz
```

### Run Covalent schematics
```
cd testxyz
npm link covalent-schematics
ng g covalent-schematics:ng-add
```

### Check generated files
```
git status
npm install
ng serve
```

## Covalent core `ng add` schematic
*NOTE:* This command does not work yet and will not work until after Covalent schematics is published to npm.  Most likely once it is out of the Covalent experimental area.  See above on how to build locally instead.
``` 
ng add @covalent/core 
```

Running the Covalent core `ng add` schematic will include the following:

- Ensure project dependencies are placed in package.json
- Install all core components
- Optionally install dynamic forms, http service, code highlight, markdown parser, flavored markdown parser
- Add Covalent theme file to your src folder
- Include theme.scss in angular config