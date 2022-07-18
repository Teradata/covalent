import { withDesign } from 'storybook-addon-designs'
// import topAppBarComponent from "../../../../stories/demos/top-app-bar.component";
import * as tableRowSelectionContent from "../../../../components/stories/demos/table-row-selection.content.html";

import './app-detail';

export default {
    title: 'Patterns/App Detail',
    argTypes: {
    },
    decorators: [withDesign],
    parameters: {
        layout: 'fullscreen',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453',
        },
    }
};

const Template = () => {
    return `
        <td-app-detail>
            <div slot="mini-list">
                <div class="td-toolbar">
                    <span class="mdc-typography--headline6">[Page name]</span>
                    <div class="spacer"></div>
                    <td-icon-button slot="actionItems" icon="filter_list"></td-icon-button>
                    <td-icon-button slot="actionItems" icon="add"></td-icon-button>
                </div>
                <div divider></div>
                <td-list activatable>
                    <td-list-item graphic="avatar" twoline >
                        <td-icon class="covalent-icon" slot="graphic">server</td-icon>
                        <span>[Object name]</span>
                        <span slot="secondary">Secondary info</span>
                    </td-list-item>
                    <li divider role="separator"></li>
                    <td-list-item graphic="avatar" twoline>
                        <td-icon class="covalent-icon" slot="graphic">server</td-icon>
                        <span>[Object name]</span>
                        <span slot="secondary">Secondary info</span>
                    </td-list-item>
                    <li divider role="separator"></li>
                    <td-list-item graphic="avatar" twoline activated>
                        <td-icon class="covalent-icon" slot="graphic">server</td-icon>
                        <span>[Object name]</span>
                        <span slot="secondary">Secondary info</span>
                    </td-list-item>
                    <li divider role="separator"></li>
                    <td-list-item graphic="avatar" twoline>
                        <td-icon class="covalent-icon" slot="graphic">server</td-icon>
                        <span>[Object name]</span>
                        <span slot="secondary">Secondary info</span>
                    </td-list-item>
                    <li divider role="separator"></li>
                </td-list>
            </div>

            <div class="td-toolbar">
                <span class="mdc-typography--headline6">[Section name]</span>
                <div class="spacer"></div>
                <td-icon-button slot="actionItems" icon="menu_open"></td-icon-button>
                <td-icon-button slot="actionItems" class="hidden-large"icon="add"></td-icon-button>
                <td-button slot="actionItems" class="hidden-small create-new-button" label="Create New" raised></td-button>
            </div>

            <td-tab-bar >
                <td-tab label="Overview" ></td-tab>
                <td-tab label="Usage" ></td-tab>
                <td-tab label="Objects" ></td-tab>
                <td-tab label="Queries" ></td-tab>
                <td-tab label="Network" ></td-tab>
                <td-tab label="Settings" ></td-tab>
            </td-tab-bar>

            <div divider role="separator"></div>

            <td-action-ribbon labelText="this is my label" state="active" >
            <td-button slot="action-items" class="mdc-banner__secondary-action" outlined>Bulk action</td-button>
            </td-action-ribbon>

            ${tableRowSelectionContent}
        </td-app-detail>`;
}

export const Basic = Template.bind({});