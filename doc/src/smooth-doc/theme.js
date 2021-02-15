import { theme as baseTheme } from "smooth-doc/src/theme";
import NightOwlTheme from "prism-react-renderer/themes/nightOwl";
import "./styles.css";
import "./fonts/atkinson.css";

export const theme = {
  ...baseTheme,
  "prism-theme": NightOwlTheme,
  fonts: {
    ...baseTheme.fonts,
    base:
      '"Atkinson Hyperlegible Regular", "Atkinson Hyperlegible Bold", -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  colors: {
    ...baseTheme.colors,
    "editor-background": "rgb(1, 22, 39)",
    modes: {
      ...baseTheme.colors.modes,
      dark: {
        ...baseTheme.colors.modes.dark,
        "editor-background": "rgb(1, 22, 39)",
      },
    },
  },
};
