import { Component, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { CovalentMessageModule } from '@covalent/core';

/**
 * This component is used to test whether or if the supplied Covalent components can be
 * rendered server side. If not then a diagnostic error will let us know what needs to be
 * fixed inorder to make them server side compatible.
 *
 * Use `npm run combat-training` to run the server side rendering diagnostic script.
 */
@Component({
  selector: 'combat-training',
  templateUrl: './combat-training.html',
  styleUrls: ['./combat-training.css'],
})
export class CombatTrainingComponent { }

/**
 * Client side module
 */
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'combat-training' }),
    CovalentMessageModule,
    // Add additional Covalent components here and within the template
  ],
  bootstrap: [CombatTrainingComponent],
  declarations: [CombatTrainingComponent],
})
export class CombatTrainingClientModule { }

/**
 * Server side module
 */
@NgModule({
  imports: [CombatTrainingClientModule, ServerModule],
  bootstrap: [CombatTrainingComponent],
})
export class CombatTrainingServerModule { }
