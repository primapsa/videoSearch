import { createTheme } from '@mantine/core';

const getCSSVariable = (variableName: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();

const font = getCSSVariable('--font-family-base');
export const theme = createTheme({
  fontFamily: font,

  headings: { fontFamily: font },

  components: {
    Group: {
      defaultProps: {
        align: 'start',
      },
      styles: {
        root: {
          alignItems: 'start',
        },
      },
    },
  },
});
