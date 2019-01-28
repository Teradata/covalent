npm link
npm run test
cd /tmp
rm -rf testxyz
ng new testxyz
cd testxyz
npm link covalent-schematics
ng g covalent-schematics:ng-add
git status

