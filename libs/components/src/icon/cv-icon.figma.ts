import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/KvXVAmYdCVAS7hzkOa73Em/Covalent-Principles?node-id=7117-28686',
  {
    props: {
      icon: figma.instance('icon'),
    },
    example: (props) => html`<cv-icon>${props.icon}</cv-icon>`,
  },
);
