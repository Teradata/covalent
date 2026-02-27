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

export const WithLeafItems = ({ icon }) => {
  return `
        <cv-tree-list>
            <cv-tree-list-item icon="${icon}" isOpen="true">
                <div slot="label">Folders</div>
                <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="1" isOpen="true">
                    <div slot="label">Documents</div>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2" isLeafItem="true">
                        <div slot="label">Resume.pdf</div>
                    </cv-tree-list-item>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2" isLeafItem="true">
                        <div slot="label">Cover Letter.docx</div>
                    </cv-tree-list-item>
                </cv-tree-list-item>
                <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="1" isOpen="true">
                    <div slot="label">Images</div>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2" isLeafItem="true">
                        <div slot="label">photo1.jpg</div>
                    </cv-tree-list-item>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2" isLeafItem="true">
                        <div slot="label">photo2.png</div>
                    </cv-tree-list-item>
                    <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="2" isLeafItem="true">
                        <div slot="label">photo3.gif</div>
                    </cv-tree-list-item>
                </cv-tree-list-item>
                <cv-tree-list-item icon="${icon}" slot="nest" indentLevel="1" isLeafItem="true">
                    <div slot="label">README.md</div>
                </cv-tree-list-item>
            </cv-tree-list-item>
            <cv-tree-list-item icon="${icon}" isLeafItem="true">
                <div slot="label">Empty File.txt</div>
            </cv-tree-list-item>
        </cv-tree-list>
    `;
};
