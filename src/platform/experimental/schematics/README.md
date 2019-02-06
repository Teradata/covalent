# Covalent schematics
Utilizes the Angular Schematics workflow tool to create Covalent applications

## Prerequisites

Prerequisites to run covalent schematics in your project:

```
Node : v8.15.0
Npm : 6.7.0
Typescript : 3.3.1
Tslint : 5.12.1
Angular CLI : 7.2.2
```

## Install Core schematics

## Build locally
To run covalent core schematic locally, run the following commands or run `./precommit.sh` from schematics folder that includes the following commands:

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

### Run covalent schematics
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
``` 
ng add @covalent/core 
```

Running the Covalent core `ng add` schematic will include the following:

- Ensure project dependencies are placed in package.json
- Install all core components
- Optionally install dynamic forms, http service, code highlight, markdown parser, flavored markdown parser
- Add covalent theme file to your src folder
- Include theme.scss in angular config