import { Component, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
// import { MdButtonModule } from '@angular/material';
import { CovalentPagingModule } from '@covalent/core';

@Component({
  selector: 'combat-training',
  templateUrl: './combat-training.html',
  styleUrls: ['./combat-training.css'],
})
export class CombatTrainingComponent { }

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'combat-training' }),
    // MdButtonModule,
    CovalentPagingModule,
  ],
  bootstrap: [CombatTrainingComponent],
  declarations: [CombatTrainingComponent],
})
export class CombatTrainingClientModule { }

@NgModule({
  imports: [CombatTrainingClientModule, ServerModule],
  bootstrap: [CombatTrainingComponent],
})
export class CombatTrainingServerModule { }
