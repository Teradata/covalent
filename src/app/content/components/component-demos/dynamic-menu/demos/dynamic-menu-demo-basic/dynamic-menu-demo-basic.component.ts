import { Component } from '@angular/core';
import { IMenuItem } from '@covalent/core/dynamic-menu';

@Component({
  selector: 'dynamic-menu-demo-basic',
  styleUrls: ['./dynamic-menu-demo-basic.component.scss'],
  templateUrl: './dynamic-menu-demo-basic.component.html',
})
export class DynamicMenuDemoBasicComponent {
  items: IMenuItem[] = [
    {
      text: 'DevFestFL',
      icon: 'close',
      children: [
        {
          text: 'Speakers',
          icon: 'group',
          children: [
            {
              text: 'Michael Prentice',
              icon: 'person',
              href: 'michael-prentice',
              children: [
                {
                  text: 'Create Enterprise UIs',
                  icon: 'star_rate',
                  href: 'material-design',
                },
              ],
            },
            {
              text: 'Stephen Fluin',
              icon: 'person',
              href: 'stephen-fluin',
              children: [
                {
                  text: "What's up with the Web?",
                  icon: 'star_rate',
                  href: 'what-up-web',
                },
              ],
            },
            {
              text: 'Mike Brocchi',
              icon: 'person',
              href: 'mike-brocchi',
              children: [
                {
                  text: 'My ally, the CLI',
                  icon: 'star_rate',
                  href: 'my-ally-cli',
                },
                {
                  text: 'Become an Angular Tailor',
                  icon: 'star_rate',
                  href: 'become-angular-tailer',
                },
              ],
            },
          ],
        },
        {
          text: 'Sessions',
          icon: 'speaker_notes',
          children: [
            {
              text: 'Create Enterprise UIs',
              icon: 'star_rate',
              href: 'material-design',
            },
            {
              text: "What's up with the Web?",
              icon: 'star_rate',
              href: 'what-up-web',
            },
            {
              text: 'My ally, the CLI',
              icon: 'star_rate',
              href: 'my-ally-cli',
            },
            {
              text: 'Become an Angular Tailor',
              icon: 'star_rate',
              href: 'become-angular-tailer',
            },
          ],
        },
        {
          text: 'Feedback',
          icon: 'feedback',
          href: 'feedback',
        },
      ],
    },
    // {
    //   text: 'Disney',
    //   icon: 'close',
    //   children: [
    //     {
    //       text: 'Speakers',
    //       icon: 'group',
    //       children: [
    //         {
    //           text: 'Michael Prentice',
    //           icon: 'person',
    //           href: 'michael-prentice',
    //           children: [
    //             {
    //               text: 'Create Enterprise UIs',
    //               icon: 'star_rate',
    //               href: 'material-design'
    //             }
    //           ]
    //         },
    //         {
    //           text: 'Stephen Fluin',
    //           icon: 'person',
    //           href: 'stephen-fluin',
    //           children: [
    //             {
    //               text: 'What\'s up with the Web?',
    //               icon: 'star_rate',
    //               href: 'what-up-web'
    //             }
    //           ]
    //         },
    //         {
    //           text: 'Mike Brocchi',
    //           icon: 'person',
    //           href: 'mike-brocchi',
    //           children: [
    //             {
    //               text: 'My ally, the CLI',
    //               icon: 'star_rate',
    //               href: 'my-ally-cli'
    //             },
    //             {
    //               text: 'Become an Angular Tailor',
    //               icon: 'star_rate',
    //               href: 'become-angular-tailer'
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       text: 'Sessions',
    //       icon: 'speaker_notes',
    //       children: [
    //         {
    //           text: 'Create Enterprise UIs',
    //           icon: 'star_rate',
    //           href: 'material-design'
    //         },
    //         {
    //           text: 'What\'s up with the Web?',
    //           icon: 'star_rate',
    //           href: 'what-up-web'
    //         },
    //         {
    //           text: 'My ally, the CLI',
    //           icon: 'star_rate',
    //           href: 'my-ally-cli'
    //         },
    //         {
    //           text: 'Become an Angular Tailor',
    //           icon: 'star_rate',
    //           href: 'become-angular-tailer'
    //         }
    //       ]
    //     },
    //     {
    //       text: 'Feedback',
    //       icon: 'feedback',
    //       href: 'feedback'
    //     }
    //   ]
    // },
    // {
    //   text: 'Orlando',
    //   icon: 'close',
    //   children: [
    //     {
    //       text: 'Speakers',
    //       icon: 'group',
    //       children: [
    //         {
    //           text: 'Michael Prentice',
    //           icon: 'person',
    //           href: 'michael-prentice',
    //           children: [
    //             {
    //               text: 'Create Enterprise UIs',
    //               icon: 'star_rate',
    //               href: 'material-design'
    //             }
    //           ]
    //         },
    //         {
    //           text: 'Stephen Fluin',
    //           icon: 'person',
    //           href: 'stephen-fluin',
    //           children: [
    //             {
    //               text: 'What\'s up with the Web?',
    //               icon: 'star_rate',
    //               href: 'what-up-web'
    //             }
    //           ]
    //         },
    //         {
    //           text: 'Mike Brocchi',
    //           icon: 'person',
    //           href: 'mike-brocchi',
    //           children: [
    //             {
    //               text: 'My ally, the CLI',
    //               icon: 'star_rate',
    //               href: 'my-ally-cli'
    //             },
    //             {
    //               text: 'Become an Angular Tailor',
    //               icon: 'star_rate',
    //               href: 'become-angular-tailer'
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       text: 'Sessions',
    //       icon: 'speaker_notes',
    //       children: [
    //         {
    //           text: 'Create Enterprise UIs',
    //           icon: 'star_rate',
    //           href: 'material-design'
    //         },
    //         {
    //           text: 'What\'s up with the Web?',
    //           icon: 'star_rate',
    //           href: 'what-up-web'
    //         },
    //         {
    //           text: 'My ally, the CLI',
    //           icon: 'star_rate',
    //           href: 'my-ally-cli'
    //         },
    //         {
    //           text: 'Become an Angular Tailor',
    //           icon: 'star_rate',
    //           href: 'become-angular-tailer'
    //         }
    //       ]
    //     },
    //     {
    //       text: 'Feedback',
    //       icon: 'feedback',
    //       href: 'feedback'
    //     }
    //   ]
    // },
    // {
    //   text: 'Maleficent',
    //   disabled: true,
    //   icon: 'close',
    //   children: [
    //     {
    //       text: 'Speakers',
    //       icon: 'group',
    //       children: [
    //         {
    //           text: 'Michael Prentice',
    //           icon: 'person',
    //           href: 'michael-prentice',
    //           children: [
    //             {
    //               text: 'Create Enterprise UIs',
    //               icon: 'star_rate',
    //               href: 'material-design'
    //             }
    //           ]
    //         },
    //         {
    //           text: 'Stephen Fluin',
    //           icon: 'person',
    //           href: 'stephen-fluin',
    //           children: [
    //             {
    //               text: 'What\'s up with the Web?',
    //               icon: 'star_rate',
    //               href: 'what-up-web'
    //             }
    //           ]
    //         },
    //         {
    //           text: 'Mike Brocchi',
    //           icon: 'person',
    //           href: 'mike-brocchi',
    //           children: [
    //             {
    //               text: 'My ally, the CLI',
    //               icon: 'star_rate',
    //               href: 'my-ally-cli'
    //             },
    //             {
    //               text: 'Become an Angular Tailor',
    //               icon: 'star_rate',
    //               href: 'become-angular-tailer'
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       text: 'Sessions',
    //       icon: 'speaker_notes',
    //       children: [
    //         {
    //           text: 'Create Enterprise UIs',
    //           icon: 'star_rate',
    //           href: 'material-design'
    //         },
    //         {
    //           text: 'What\'s up with the Web?',
    //           icon: 'star_rate',
    //           href: 'what-up-web'
    //         },
    //         {
    //           text: 'My ally, the CLI',
    //           icon: 'star_rate',
    //           href: 'my-ally-cli'
    //         },
    //         {
    //           text: 'Become an Angular Tailor',
    //           icon: 'star_rate',
    //           href: 'become-angular-tailer'
    //         }
    //       ]
    //     },
    //     {
    //       text: 'Feedback',
    //       icon: 'feedback',
    //       href: 'feedback'
    //     }
    //   ]
    // }
  ];
}
