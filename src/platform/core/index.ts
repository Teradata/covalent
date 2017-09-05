import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/**
 * COMMON
 */

import { CovalentCommonModule } from './common/common.module';
export * from './common/common.module';

/**
 * CHIPS
 */

import { CovalentChipsModule } from './chips/chips.module';
export * from './chips/chips.module';

/**
 * DATA TABLE
 */

import { CovalentDataTableModule } from './data-table/data-table.module';
export * from './data-table/data-table.module';

/**
 * DIALOGS
 */

import { CovalentDialogsModule } from './dialogs/dialogs.module';
export * from './dialogs/dialogs.module';

/**
 * EXPANSION PANEL
 */

import { CovalentExpansionPanelModule } from './expansion-panel/expansion-panel.module';
export * from './expansion-panel/expansion-panel.module';

/**
 * FILE
 */

import { CovalentFileModule } from './file/file.module';
export * from './file/file.module';

/**
 * JSON FORMATTER
 */

import { CovalentJsonFormatterModule } from './json-formatter/json-formatter.module';
export * from './json-formatter/json-formatter.module';

/**
 * LAYOUT
 */

import { CovalentLayoutModule } from './layout/layout.module';
export * from './layout/layout.module';

/**
 * LOADING
 */

import { CovalentLoadingModule } from './loading/loading.module';
export * from './loading/loading.module';

/**
 * MEDIA
 */

import { CovalentMediaModule } from './media/media.module';
export * from './media/media.module';

/**
 * MENU
 */

import { CovalentMenuModule } from './menu/menu.module';
export * from './menu/menu.module';

/**
 * MESSAGE
 */

import { CovalentMessageModule } from './message/message.module';
export * from './message/message.module';

/**
 * NOTIFICATIONS
 */

import { CovalentNotificationsModule } from './notifications/notifications.module';
export * from './notifications/notifications.module';

/**
 * PAGING
 */

import { CovalentPagingModule } from './paging/paging.module';
export * from './paging/paging.module';

/**
 * SEARCH
 */

import { CovalentSearchModule } from './search/search.module';
export * from './search/search.module';

/**
 * STEPS
 */

import { CovalentStepsModule } from './steps/steps.module';
export * from './steps/steps.module';

/**
 * VIRTUAL SCROLL
 */

import { CovalentVirtualScrollModule } from './virtual-scroll/virtual-scroll.module';
export * from './virtual-scroll/virtual-scroll.module';
