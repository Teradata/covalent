import 'reflect-metadata';
import 'zone.js';
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import {join} from 'path';

import { CombatTrainingServerModuleNgFactory } from './combat-training/combat-training.ngfactory';
import { readFileSync } from 'fs-extra';

enableProdMode();

const result: Promise<any> = renderModuleFactory(CombatTrainingServerModuleNgFactory, {
  document: readFileSync(join(__dirname, 'index.html'), 'utf-8'),
});

result.then((html: string) => process.stdout.write(html));
