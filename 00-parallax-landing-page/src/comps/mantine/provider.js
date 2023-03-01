import { MantineProvider } from '@mantine/core';

import { css } from 'utils/css';

// ==============================================

export default function Provider({ children }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        loader: 'bars',
        focusRing: 'never', //'auto' | 'always' | 'never'
        breakpoints: {
          // xs: 400, //breakpoints.xs,
          sm: css.get('tablet'), // 700
          // md: 900, //breakpoints.md,
          lg: css.get('desktop'), // 1,000
          // xl: 1800, //breakpoints.xl,
          // xxl: 2200,
        },
        fontSizes: {
          // xs: fonts.xs,
          sm: css.get('fs-sm'),
          // md: fonts.md,
          // md_2: `calc(${fonts.md} + 3px)`,
          // lg: fonts.lg,
          // xl: fonts.xl,
        },
        fontFamily: css.get('font-family'),
        headings: {
          // fontFamily: CSSProperties['fontFamily'],
          fontWeight: 400,
          // sizes: {
          //   h1: {
          //     fontSize: 'clamp(3rem, 1rem + 10vw, 5rem)',
          //     // lineheight: 'clamp(10px, 1rem, 30px)',
          //     lineHeight: '1.1em',
          //   },
          //   h2: { fontSize: 54 /*, lineheight: x */ },
          //   h3: { fontSize: 50 /*, lineheight: x */ },
          //   h4: { fontSize: 46 /*, lineheight: x */ },
          //   h5: { fontSize: 40 /*, lineheight: x */ },
          //   h6: { fontSize: 34 /*, lineheight: x */ },
          // },
        },
        // primaryColor: 'blue',
        colors: {
          // green: ['', '', '', '', '', '', '#4eae4a', '', '', ''],
          // orange: ['', '', '', '', '', '', '#ff8b00', '', '', ''],
        },
      }}
      styles={{
        Button: (theme) => ({
          root: {
            borderRadius: '100vmax', // pill
            paddingRight: '25px',
            paddingLeft: '25px',
            height: '48px',
            transition: 'all 0.2s ease',
          },
          default: {
            background: css.get('white'),
            color: css.get('blue'),
            '&:hover': {
              background: css.get('white-hover'),
            },
          },
          filled: {
            background: css.get('blue'),
            color: css.get('white'),
            '&:hover': {
              background: css.get('blue-hover'),
            },
          },
        }),
        Text: { root: { color: 'black' } },
      }}
    >
      {children}
    </MantineProvider>
  );
}
