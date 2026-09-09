import './tree-list';
import './tree-list-item';

export default {
  title: 'Components/Tree List',
  args: {
    icon: 'description',
    isOpen: true,
    indentLevel: 1,
    indentMultiple: 16,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const buildTreeListItemAttrs = ({
  icon,
  isOpen,
  indentLevel,
  indentMultiple,
} = {}) =>
  [
    icon ? `icon="${icon}"` : '',
    isOpen ? 'isOpen="true"' : '',
    typeof indentLevel === 'number' ? `indentLevel="${indentLevel}"` : '',
    typeof indentMultiple === 'number'
      ? `indentMultiple="${indentMultiple}"`
      : '',
  ]
    .filter(Boolean)
    .join(' ');

const buildNestedItemAttrs = (
  { icon, isOpen, indentLevel, indentMultiple },
  levelOffset = 0,
  options = {},
) =>
  buildTreeListItemAttrs({
    icon,
    isOpen: options.isOpen ?? isOpen,
    indentLevel:
      typeof indentLevel === 'number' ? indentLevel + levelOffset : undefined,
    indentMultiple,
  });

const wrapTreeList = (content) => `
    <cv-tree-list>
        ${content}
    </cv-tree-list>
`;

const wrapInContainer = (content, style) => `
    <div style="${style}">
        ${content}
    </div>
`;

const renderTreeList = (args) =>
  wrapTreeList(`
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({
          icon: args.icon,
          isOpen: args.isOpen,
        })}>
            <div slot="label">PDCRAdmin</div>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0, { isOpen: false })} slot="nest">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0)} slot="nest">
                <div slot="label">PDCRAdmin</div>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest">
                    <div slot="label">PDCRAdmin</div>
                    <cv-tree-list-item ${buildNestedItemAttrs(args, 2, { isOpen: false })} slot="nest">
                        <div slot="label">PDCRAdmin</div>
                        <cv-tree-list-item ${buildNestedItemAttrs(args, 3, { isOpen: false })} slot="nest">
                            <div slot="label">PDCRAdmin</div>
                        </cv-tree-list-item>
                    </cv-tree-list-item>
                </cv-tree-list-item>
            </cv-tree-list-item>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
    `);

const renderTwoLineItems = (args) =>
  wrapTreeList(`
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({
          icon: args.icon,
          isOpen: args.isOpen,
        })}>
            <div slot="label">PDCRAdmin</div>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0, { isOpen: false })} slot="nest">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0)} slot="nest">
                <div slot="label">PDCRAdmin</div>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest">
                    <div slot="label">PDCRAdmin</div>
                    <div slot="extraContent">VARCHAR(8)</div>
                </cv-tree-list-item>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest">
                    <div slot="label">PDCRAdmin</div>
                    <div slot="extraContent">VARCHAR(8)</div>
                </cv-tree-list-item>
            </cv-tree-list-item>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
    `);

const renderEmptyState = (args) =>
  wrapTreeList(`
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({
          icon: args.icon,
          isOpen: args.isOpen,
        })}>
            <div slot="label">PDCRAdmin</div>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0, { isOpen: false })} slot="nest">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0)} slot="nest">
                <div slot="label">PDCRAdmin</div>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1)} slot="nest">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
            </cv-tree-list-item>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
            <div slot="label">PDCRAdmin</div>
        </cv-tree-list-item>
    `);

// Putting the tree list into a container that has a set width.
const renderOverflowTest = (args) =>
  wrapInContainer(
    wrapTreeList(`
            <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
                <div slot="label">PDCRAdmin</div>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 0, { isOpen: false })} slot="nest">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 0)} slot="nest">
                    <div slot="label">PDCRAdmin</div>
                    <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest">
                        <div slot="label">PDCRAdmin</div>
                    </cv-tree-list-item>
                    <cv-tree-list-item ${buildNestedItemAttrs(args, 1)} slot="nest">
                        <div slot="label">PDCRAdmin</div>
                        <cv-tree-list-item ${buildNestedItemAttrs(args, 2)} slot="nest">
                            <div slot="label">PDCRAdmin</div>
                            <cv-tree-list-item ${buildNestedItemAttrs(args, 3)} slot="nest">
                                <div slot="label">AReallyLongLabelAReallyLongLabelAReallyLongLabelAReallyLongLabelAReallyLongLabelAReallyLongLabelAReallyLongLabel</div>
                            </cv-tree-list-item>
                        </cv-tree-list-item>
                    </cv-tree-list-item>
                </cv-tree-list-item>
            </cv-tree-list-item>
            <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })}>
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
        `),
    'width: 300px; border-left: solid white 1px; border-right: solid white 1px',
  );

const renderWithLeafItems = (args) =>
  wrapTreeList(`
        <cv-tree-list-item ${buildTreeListItemAttrs({
          icon: args.icon,
          isOpen: args.isOpen,
        })}>
            <div slot="label">Folders</div>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0)} slot="nest">
                <div slot="label">Documents</div>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest" isLeafItem="true">
                    <div slot="label">Resume.pdf</div>
                </cv-tree-list-item>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest" isLeafItem="true">
                    <div slot="label">Cover Letter.docx</div>
                </cv-tree-list-item>
            </cv-tree-list-item>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0)} slot="nest">
                <div slot="label">Images</div>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest" isLeafItem="true">
                    <div slot="label">photo1.jpg</div>
                </cv-tree-list-item>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest" isLeafItem="true">
                    <div slot="label">photo2.png</div>
                </cv-tree-list-item>
                <cv-tree-list-item ${buildNestedItemAttrs(args, 1, { isOpen: false })} slot="nest" isLeafItem="true">
                    <div slot="label">photo3.gif</div>
                </cv-tree-list-item>
            </cv-tree-list-item>
            <cv-tree-list-item ${buildNestedItemAttrs(args, 0, { isOpen: false })} slot="nest" isLeafItem="true">
                <div slot="label">README.md</div>
            </cv-tree-list-item>
        </cv-tree-list-item>
        <cv-tree-list-item ${buildTreeListItemAttrs({ icon: args.icon })} isLeafItem="true">
            <div slot="label">Empty File.txt</div>
        </cv-tree-list-item>
    `);

export const TreeList = {
  render: renderTreeList,
};

export const TwoLineItems = {
  render: renderTwoLineItems,
};

export const EmptyState = {
  render: renderEmptyState,
};

export const OverflowTest = {
  render: renderOverflowTest,
};

export const WithLeafItems = {
  render: renderWithLeafItems,
};
