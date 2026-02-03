import './typography';

export default {
  title: 'Components/Text',
  tags: ['autodocs'],
};

export const Basic = () => {
  return `
    <cv-typography scale="headline1">Headline 1</cv-typography>
    <cv-typography scale="headline2">Headline 2</cv-typography>
    <cv-typography scale="headline3">Headline 3</cv-typography>
    <cv-typography scale="headline4">Headline 4</cv-typography>
    <cv-typography scale="headline5">Headline 5</cv-typography>
    <cv-typography scale="headline6">Headline 6</cv-typography>
    <cv-typography scale="subtitle2">Subtitle 1</cv-typography>
    <cv-typography scale="subtitle2">Subtitle 2</cv-typography>
    <cv-typography scale="button">Button</cv-typography>
    <cv-typography scale="caption">Caption</cv-typography>
    <cv-typography scale="overline">Overline</cv-typography>
    <cv-typography scale="body1">Body 1</cv-typography>
    <cv-typography scale="body2">Body 2</cv-typography>
  `;
};
