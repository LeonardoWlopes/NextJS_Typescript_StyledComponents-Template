import "styled-components";
import Default from "../themes/default";

declare module "styled-components" {
  type ThemeType = typeof Default;

  export interface DefaultTheme extends ThemeType {}
}
