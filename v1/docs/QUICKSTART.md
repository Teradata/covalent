# Quickstart Repo

Start using the Covalent Quickstart

Create a new repo based on the covalent-quickstart

Clone the [covalent-quickstart](https://github.com/Teradata/covalent-quickstart) into a new project folder (e.g. my-product)

## Clone the repo
 
```bash
git clone https://github.com/Teradata/covalent-quickstart.git my-product
cd my-product
```
 
Remove the git directory to start clean
 
```bash
rm -rf .git
```

## Create a new Git repository for your product

You could start writing code now and throw it all away when you're done. If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a local git repo and make the first commit:

```bash
git init
git add .
git commit -m "Initial commit"
```

Create a remote repository for this project on the service of your choice.

```bash
git remote add origin
git push -u origin master
```

## Start Developing!

Prerequisites

- Node 6.11.1+
- NPM 3+
- Angular CLI
- Protractor (for testing)
- TSLint (for code style)

If you don't have the Angular CLI, install:
  
```bash
npm i -g @angular/cli@latest
```

Install Typescript:

```bash
npm install -g typescript
```

To install Protractor & TSLint for testing:

```bash
npm install -g protractor
npm install -g tslint
```

Then update the webdriver manager:

```bash
webdriver-manager update
```

Install Node packages:

```bash
npm i
```

Run the Angular-CLI local server:

```bash
ng serve
```
