import './tree-list';
import './tree-list-item';
export default {
  title: 'Components/Tree List',
  args: {
    icon: 'description',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const TreeList = ({ icon }) => {
  return `
        <cv-tree-list>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}" isOpen="true">
                <div slot="label">PDCRAdmin</div>
                <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="1">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
                <cv-tree-list-item icon="${icon}" slot="nest" isOpen="true" indentLevel="1">
                    <div slot="label">PDCRAdmin</div>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2">
                        <div slot="label">PDCRAdmin</div>
                    </cv-tree-list-item>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2">
                        <div slot="label">PDCRAdmin</div>
                        <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="3">
                            <div slot="label">PDCRAdmin</div>
                            <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="4">
                                <div slot="label">PDCRAdmin</div>
                            </cv-tree-list-item>
                        </cv-tree-list-item>
                    </cv-tree-list-item>
                </cv-tree-list-item>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
        </cv-tree-list>
    `;
};

export const TwoLineItems = ({ icon }) => {
  return `
        <cv-tree-list>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}" isOpen="true">
                <div slot="label">PDCRAdmin</div>
                <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="1">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
                <cv-tree-list-item icon="${icon}" slot="nest" isOpen="true" indentLevel="1">
                    <div slot="label">PDCRAdmin</div>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2">
                        <div slot="label">PDCRAdmin</div>
                        <div slot="extraContent">VARCHAR(8)</div>
                    </cv-tree-list-item>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2">
                        <div slot="label">PDCRAdmin</div>
                        <div slot="extraContent">VARCHAR(8)</div>
                    </cv-tree-list-item>
                </cv-tree-list-item>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
        </cv-tree-list>
    `;
};

export const EmptyState = ({ icon }) => {
  return `
        <cv-tree-list>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}" isOpen="true">
                <div slot="label">PDCRAdmin</div>
                <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="1">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
                <cv-tree-list-item icon="${icon}" slot="nest" isOpen="true" indentLevel="1">
                    <div slot="label">PDCRAdmin</div>
                    <cv-tree-list-item icon="${icon}" slot="nest" isOpen="true" indentLevel="2">
                        <div slot="label">PDCRAdmin</div>
                    </cv-tree-list-item>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2">
                        <div slot="label">PDCRAdmin</div>
                    </cv-tree-list-item>
                </cv-tree-list-item>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </cv-tree-list-item>
        </cv-tree-list>
    `;
};
// Putting the tree list into a container that has a set width.
export const OverflowTest = ({ icon }) => {
  return `
        <div style="width: 300px; border-left: solid white 1px; border-right: solid white 1px">
            <cv-tree-list>
                <cv-tree-list-item icon="${icon}">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
                <cv-tree-list-item icon="${icon}">
                    <div slot="label">PDCRAdmin</div>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="1">
                        <div slot="label">PDCRAdmin</div>
                    </cv-tree-list-item>
                    <cv-tree-list-item icon="${icon}" slot="nest" isOpen="true" indentLevel="1">
                        <div slot="label">PDCRAdmin</div>
                        <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2">
                            <div slot="label">PDCRAdmin</div>
                        </cv-tree-list-item>
                        <cv-tree-list-item icon="${icon}" slot="nest" isOpen="true" indentLevel="2">
                            <div slot="label">PDCRAdmin</div>
                            <cv-tree-list-item icon="${icon}" slot="nest" isOpen="true" indentLevel="3">
                                <div slot="label">PDCRAdmin</div>
                                <cv-tree-list-item icon="${icon}" slot="nest" isOpen="true" indentLevel="4">
                                    <div slot="label">AReallyLongLabelAReallyLongLabelAReallyLongLabelAReallyLongLabelAReallyLongLabelAReallyLongLabelAReallyLongLabel</div>
                                </cv-tree-list-item>
                            </cv-tree-list-item>
                        </cv-tree-list-item>
                    </cv-tree-list-item>
                </cv-tree-list-item>
                <cv-tree-list-item icon="${icon}">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
                <cv-tree-list-item icon="${icon}">
                    <div slot="label">PDCRAdmin</div>
                </cv-tree-list-item>
            </cv-tree-list>
        </div>
    `;
};
