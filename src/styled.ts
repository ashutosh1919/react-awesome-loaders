import styledComponents, {
  css,
  keyframes,
  type DefaultTheme,
} from "styled-components";

// Loaders pass many custom props into styled elements; relax typing here
// so we don't need to annotate every styled block in the library.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styled = styledComponents as any;

export { css, keyframes, styled, styledComponents };
export type { DefaultTheme };
export default styled;
