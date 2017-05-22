/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component } from '@angular/core';

@Component({
  selector: 'td-toolbar',
  templateUrl: '././toolbar.component.html',
  styleUrls: ['././toolbar.component.scss'],
})
export class ToolbarComponent {
  updates: Object[] = [{
      description: 'Keyboard support for selection',
      icon: 'grid_on',
      route: 'components/data-table',
      title: 'Data Table feature',
    }, {
      description: 'Row click events',
      icon: 'grid_on',
      route: 'components/data-table',
      title: 'Data Table feature',
    }, {
      description: 'Hide columns & exclude from filtering',
      icon: 'grid_on',
      route: 'components/data-table',
      title: 'Data Table feature',
    }, {
      description: 'Async & boolean loading',
      icon: 'hourglass_empty',
      route: 'components/loading',
      title: 'Loading features',
    }, {
      description: 'Component for alerts/info/warning/error/success',
      icon: 'info_outline',
      route: 'components/message',
      title: 'New Messages component',
    }, {
      description: 'Numbered page links to jump ahead',
      icon: 'swap_horiz',
      route: 'components/paging',
      title: 'Pagination feature',
    }, {
      description: 'Disable adding of chips',
      icon: 'label',
      route: 'components/chips',
      title: 'Chips feature',
    }, {
      description: 'New formData property',
      icon: 'attach_file',
      route: 'components/file-upload',
      title: 'File service feature',
    }, {
      description: 'New contentReady event binding',
      icon: 'chrome_reader_mode',
      route: 'components/markdown',
      title: 'Markdown feature',
    }, {
      description: 'New contentReady event binding',
      icon: 'code',
      route: 'components/highlight',
      title: 'Highlight feature',
    }, {
      description: 'Make navigationRoute optional',
      icon: 'view_quilt',
      route: 'components/layouts',
      title: 'Layouts feature',
    },
  ];
}
