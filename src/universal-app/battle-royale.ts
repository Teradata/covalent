import 'reflect-metadata';
import 'zone.js/dist/zone-node.js';
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';

import { CombatTrainingServerModuleNgFactory } from './dist/aot/combat-training/combat-training.ngfactory';
import { readFileSync } from 'fs-extra';

enableProdMode();

const result: Promise<any> = renderModuleFactory(CombatTrainingServerModuleNgFactory, {
  document: readFileSync('src/universal-app/index.html', 'utf-8'),
});

result.then((html: string) => process.stdout.write(html));
