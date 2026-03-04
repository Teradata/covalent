import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/KvXVAmYdCVAS7hzkOa73Em/Covalent-Principles?node-id=7073-36396&t=t9k3KloiUbP6SU0z-4',
  {
    props: {
      label: figma.string('label'),
      outlined: figma.enum('outlined', { true: true, false: false }),
      raised: figma.enum('raised', { true: true, false: false }),
      disabled: figma.enum('disabled', { true: true, false: false }),
      showIcon: figma.enum('showIcon', { true: true, false: false }),
      trailingIcon: figma.enum('trailingIcon', { true: true, false: false }),
      cvIcon: figma.nestedProps('cv-icon', {
        icon: figma.instance('icon'),
      }),
      color: figma.enum('color', {
        none: undefined,
        negative: 'negative',
        caution: 'caution',
        positive: 'positive',
        emphasis: 'emphasis',
        secondary: 'secondary',
      }),
    },
    example: (props) =>
      html`<cv-button
        label="${props.label}"
        raised=${props.raised}
        outlined=${props.outlined}
        disabled=${props.disabled}
        icon=${props.cvIcon.icon}
        trailingicon=${props.trailingIcon}
        color=${props.color}
      ></cv-button>`,
  },
);
