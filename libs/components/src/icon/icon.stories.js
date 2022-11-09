import { withDesign } from 'storybook-addon-designs';
import './icon';
import iconList from '../../../icons/material-codepoints.json';

const MAT_ICON_LIST = Object.keys(iconList);

const COV_ICON_LIST = [
  'alias_arrow',
  'api',
  'api_ondark',
  'application',
  'bucket',
  'cluster_analysis',
  'column',
  'compute_cluster',
  'compute_cluster_group',
  'compute_profile_dark',
  'compute_profile_light',
  'connected_identity',
  'data_preparation',
  'data_source',
  'database',
  'database_changed',
  'database_edit',
  'database_foreign',
  'database_lab',
  'database_search',
  'database_synced',
  'disconnect',
  'dock_right',
  'engine',
  'file',
  'file_changed',
  'file_edit',
  'file_foreign',
  'file_lab',
  'file_search',
  'file_synced',
  'formula',
  'lab',
  'loader_dots',
  'machine_learning_ondark',
  'machine_learning',
  'model',
  'model_ondark',
  'model_configuration',
  'model_configuration_ondark',
  'no_results',
  'node_branch',
  'node_merge',
  'node_notification',
  'node_notification_ondark',
  'object_storage',
  'object_storage_ondark',
  'operations',
  'operators_divide',
  'operators_equals',
  'operators_greater_than',
  'operators_greater_than_or_equal',
  'operators_less_than',
  'operators_less_than_or_equal',
  'operators_multiply',
  'operators_not_equal',
  'operators_parentheses',
  'operators_parenthesis_left',
  'operators_parenthesis_right',
  'operators_subtract',
  'outbound_campaign_manager',
  'primary_cluster',
  'product_analyst',
  'product_console',
  'product_editor',
  'resize_northeast',
  'resize_northwest',
  'resize_southeast',
  'resize_southwest',
  'rules',
  'rules_ondark',
  'rules_insert',
  'rules_insert_ondark',
  'rules_select',
  'rules_select_ondark',
  'script',
  'script_ondark',
  'script_macro',
  'script_macro_ondark',
  'script_sql',
  'script_sql_ondark',
  'script_stored_procedure',
  'script_stored_procedure_ondark',
  'segmentation',
  'server',
  'server_changed',
  'server_edit',
  'server_foreign',
  'server_lab',
  'server_search',
  'server_synced',
  'sftp',
  'sftp_ondark',
  'table',
  'table_changed',
  'table_edit',
  'table_foreign',
  'table_lab',
  'table_search',
  'table_synced',
  'teradata',
  'teradata_nocircle',
  'text_analysis',
  'undock',
  'variable',
  'variable_ondark',
  'view_sankey',
  'wand',
  'workflow',
];

export default {
  title: 'Components/Icon',
  argTypes: {
    icon: {
      options: MAT_ICON_LIST,
      control: { type: 'select' },
      defaultValue: 'houseboat',
    },
    size: {
      options: ['64px', '48px', '24px', '16px'],
      control: { type: 'select' },
      defaultValue: '48px',
    },

    onClick: { action: 'onClick' },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453',
    },
  },
};

const Template = ({ icon, size }, ...args) => {
  const icoElem = document.createElement('td-icon');
  icoElem.innerText = icon;
  icoElem.style.fontSize = size;

  if (args[0].parameters.showCovIcons) {
    icoElem.className = 'covalent-icon';
  }

  return icoElem;
};

export const MaterialIcons = Template.bind({});

export const CovalentIcons = Template.bind({});
CovalentIcons.parameters = {
  showCovIcons: true,
};

CovalentIcons.argTypes = {
  icon: {
    options: COV_ICON_LIST,
    defaultValue: 'product_editor',
  },
};
