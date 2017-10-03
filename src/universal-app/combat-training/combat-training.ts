import { Component, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';

// import your components here for combat-training and see if they can survive the battle
import { CovalentMessageModule, CovalentPagingModule, IPageChangeEvent } from '@covalent/core';
import { MdSliderModule } from '@angular/material';

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
export class CombatTrainingComponent {
  pagingChange(event: IPageChangeEvent): void {
    // stub
  }
}

/**
 * Client side module
 */
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'combat-training' }),
    CovalentMessageModule,
    CovalentPagingModule,
    MdSliderModule,
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
