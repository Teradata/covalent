npm link
npm run test
cd /tmp
ng new testxyz
cd testxyz
npm link covalent-schematics
ng g covalent-schematics:ng-add
git status
cd ..
rm -rf testxyz
