import _ from 'lodash';
import c from 'chroma-js';

const fontFamily = (...args) => _.flattenDeep([...args])
  .map(a => `"${a}"`)
  .uniq()
  .join(',');

const SERIF_FONTS = fontFamily('Hartwell,Helvetica Neue,Helvetica,Arial,Comic Sans,sans-serif'.split(','));
export const HEADLINE_FONT = 'HartwellAlt-Black';
export const BODY_FONT = 'Hartwell';
export const HEADLINE_FONT_FAMILY = fontFamily(HEADLINE_FONT, SERIF_FONTS);
export const BODY_FONT_FAMILY = fontFamily(BODY_FONT, SERIF_FONTS);
export const CODE_FONT_FAMILY = fontFamily('Monaco,Courier Neue, Courier,monospace'.split(','));
export const MAX_CONTENT_WIDTH = '1400px';
export const DEFAULT_BLOCK_PADDING = '1rem';
export const HAIRLINE_COLOR = 'rgb(240,240,240)';
export const BLUE_DARK = '#052553';
export const BLUE_MED = '#0b5287';
export const BLUE = '#2582C8';
export const BLUE_LIGHT = '#7abce6';
export const BLUE_VERY_LIGHT = '#d3efff';
export const GREEN_DARK = '#385721';
export const GREEN = '#81cf48';
export const GRAY_DARK = '#2A3035';
export const GRAY = '#8A8C8F';
export const GRAY_LIGHT = '#ebeef2';
export const GRAY_JIRA = '#F4F5F7';
export const ACCENT_ORANGE = '#fc502d';
export const RED_ERROR = '#9b0129';

export const BLACK = '#000000';
export const WHITE = '#FFFFFF';

export const TABLE_ROW_SELECTED_TEXT = c(ACCENT_ORANGE).darken().css();
