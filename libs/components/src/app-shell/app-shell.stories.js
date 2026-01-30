import tableRowSelectionContent from '../../stories/demos/table-row-selection.content.html?raw';
import '../data-table/data-table.stories.scss';
import './app-shell';
import '../action-ribbon/action-ribbon';
import '../icon/icon';
import '../icon-button-toggle/icon-button-toggle';
import '../select/select';
import '../list/list';
import '../list/list-item';
import '../list/nav-list-item';
import '../select/select';
import '../toolbar/toolbar';
import '../tab/tab-bar';
import '../tab/tab';
import '../button/button';
import '../textfield/textfield';
import '../typography/typography';
import '../divider/divider';

import { MDCDataTable, events } from '@material/data-table';

export default {
  title: 'Components/App Shell',
  args: {
    contained: true,
    fullWidth: false,
    helpResizable: true,
    remoteNavOpen: false,
    showSplatScreen: false,
    centerAppName: false,
  },
  argTypes: {
    navClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

let appShell;
let banner;
let dataTable;
let remoteOpeningToggle;

const updateActionRibbon = () => {
  if (!dataTable?.rowCheckboxList?.length || !banner) return;

  const selectedRowNum = dataTable.getSelectedRowIds()?.length;
  const totalRows = dataTable.rowCheckboxList.length;

  if (selectedRowNum) {
    banner.labelText = `(${selectedRowNum}/${totalRows}) items selected`;
    banner.show();
  } else {
    banner.close();
  }
};

const Template = ({
  appName = '[App name]',
  sectionTitle = '',
  forcedOpen = false,
  contained = true,
  fullWidth = false,
  helpResizable = true,
  remoteNavOpen = false,
  showSplatScreen = false,
  centerAppName = false,
}) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const dataTableEl = document.querySelector('.mdc-data-table');
      const helpItems = document.querySelectorAll('.help-item');
      const helpCloseItems = document.querySelectorAll('.help-close');
      appShell = document.querySelector('cv-app-shell');
      banner = document.querySelector('cv-action-ribbon');
      dataTable = new MDCDataTable(dataTableEl);
      remoteOpeningToggle = document.querySelector('.remote-opening-toggle');

      helpItems.forEach((helpItem) => {
        helpItem.addEventListener('click', () => {
          appShell.helpOpen = !appShell.helpOpen;
        });
      });

      helpCloseItems.forEach((helpCloseItem) => {
        helpCloseItem.addEventListener('click', () => {
          appShell.helpOpen = false;
        });
      });

      setTimeout(updateActionRibbon, 150);

      remoteOpeningToggle.addEventListener('click', () => {
        appShell.remoteNavOpen = !appShell.remoteNavOpen;
      });
    },
    { once: true },
  );

  document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);

  const svgLogo = (slot) => `<svg
        slot="${slot}"
        width="103"
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--cv-theme-text-logo-on-background)"
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" />
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" />
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" />
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" />
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" />
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" />
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" />
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" />
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" />
      </svg>`;
  return `
    <style>

    cv-select {
        --cv-density-mode:-3;
    }
    cv-select cv-list-item {
        --cv-density-mode:0;
    }
        
    .hidden-large {
        display: none;
    }

    .user-menu {
      background: var(--mdc-theme-surface); 
      display: flex;
      justify-content:space-between;
      align-items: between;
      padding: 8px 0;
    }

    .splat-screen-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 85vh;
      text-align: center;
      padding: 0 16px;
    }

    .mobile-header-action-items {
      display: flex;
      align-items: center;
    }

    @media only screen and (max-width: 768px) {
      .user-menu-action-items {
        display: none;
      }
    }


    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell
    ${appName ? `appName="${appName}"` : ''}
    ${sectionTitle ? `sectionName="${sectionTitle}"` : ''}
    ${forcedOpen ? `forcedOpen open` : ''}
    ${contained ? `contained` : ''}
    ${fullWidth ? `fullWidth` : ''}
    ${helpResizable ? `helpResizable` : ''}
    ${remoteNavOpen ? `remoteNavOpen=${remoteNavOpen}` : ''}
    ${showSplatScreen ? `showSplatScreen` : ''}
    ${centerAppName ? `centerAppName` : ''}

    >

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      ${svgLogo('logo')}
      ${svgLogo('mobile-header-logo')}

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>

        <cv-divider size="inset"></cv-divider>

        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>


      <div class="user-menu" slot="user-menu" >
        <cv-select icon="database" text slot="title" >
          <cv-typography scale="subtitle2" style="margin:0px 16px 10px;">All environments</cv-typography>
          <cv-divider flush></cv-divider>
          <cv-list-item twoline selected graphic="icon" value="1">
            Base user
            <span slot="secondary">1 CPU, 2GB RAM</span>
            <cv-icon slot="graphic">check</cv-icon>
          </cv-list-item>
          <cv-list-item twoline graphic="icon" value="1">
            Advanced user
            <span slot="secondary">2 CPU, 4GB RAM</span>
          </cv-list-item>
          <cv-list-item twoline graphic="icon" value="1">
            Pro user
            <span slot="secondary">4 CPU, 8GB RAM</span>
          </cv-list-item>
        </cv-select>

        <span class="user-menu-action-items">
          <cv-icon-button slot="actionItems" icon="forum"></cv-icon-button>
          <cv-divider slot="actionItems" direction="vertical" size="icon"></cv-divider>

          <cv-icon-button slot="actionItems" icon="notifications"></cv-icon-button>
          <cv-icon-button-toggle slot="actionItems" onIcon="help" offIcon="help" class="help-item"></cv-icon-button-toggle>
          <cv-icon-button slot="actionItems" icon="person" style="margin-right: -12px"></cv-icon-button>
        </span>
      </div>

      <!-- Mobile header action items -->
      <span slot="mobile-header-action-items" class="mobile-header-action-items">
        <cv-icon-button icon="forum"></cv-icon-button>
        <cv-divider direction="vertical" size="icon"></cv-divider>

        <cv-icon-button icon="notifications"></cv-icon-button>
        <cv-icon-button-toggle onIcon="help" offIcon="help" class="help-item"></cv-icon-button-toggle>
        <cv-icon-button icon="person" style="margin-right: -12px"></cv-icon-button>
      </span>

      <!-- Splat screen content which appears on smaller screens when showSplatScreen is true -->
      <div slot="splat-screen" class="splat-screen-content">
        <cv-typography scale="body1">Switch to a larger screen to use this app.</cv-typography>
      </div>

      <div slot="help" class="help-panel mdc-typography">
        <cv-toolbar sticky>
          <span slot="title" style="padding-left: 12px;">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="undock"
            covalent-icons
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
            style="margin-right: -4px;"
          ></cv-icon-button>
        </cv-toolbar>
        <div class="help-content" style="padding: 16px 24px 24px">
          <cv-typography scale="headline5">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-button slot="actionItems"
          class="remote-opening-toggle"
          label="Toggle sidenav"
          ${remoteNavOpen ? `icon="fullscreen"` : `icon="fullscreen_exit"`}"
        >
        </cv-button>
        <cv-icon-button slot="actionItems" icon="menu_open">
        </cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create new"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      ${tableRowSelectionContent}
    </cv-app-shell>
    `;
};

export const Basic = Template.bind({});

export const sectionTitle = Template.bind({});
sectionTitle.args = {
  sectionTitle: 'Environments',
};

export const forcedOpen = Template.bind({});
forcedOpen.args = {
  forcedOpen: true,
};

export const fullWidth = Template.bind({});
fullWidth.args = {
  fullWidth: true,
};

export const helpResizable = Template.bind({});
helpResizable.args = {
  helpResizable: true,
};

export const remoteMenuToggle = Template.bind({});
remoteMenuToggle.args = {
  remoteNavOpen: true,
};

export const splatScreen = Template.bind({});
splatScreen.args = {
  appName: '',
  showSplatScreen: true,
};
