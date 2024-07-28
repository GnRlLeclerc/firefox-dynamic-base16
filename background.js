// Background script that can access the native messaging API to communicate with the native application.

/**
 * @typedef {Object} Colors
 * @property {string} base00
 * @property {string} base01
 * @property {string} base02
 * @property {string} base03
 * @property {string} base04
 * @property {string} base05
 * @property {string} base06
 * @property {string} base07
 * @property {string} base08
 * @property {string} base09
 * @property {string} base0A
 * @property {string} base0B
 * @property {string} base0C
 * @property {string} base0D
 * @property {string} base0E
 * @property {string} base0F
 */

const port = browser.runtime.connectNative("firefox_native_base16");

/**
 * Update the Firefox theme colors.
 * @param {Colors} response
 */
const onMessage = (response) => {
  console.log("Updating theme with colors", response);

  // Color aliases for readability
  const background = response.base00;
  const background_secondary = response.base01;
  const background_selected = response.base02;
  const background_highlight = response.base03;
  const border = response.base02;
  const border_secondary = response.base03;
  const text = response.base05;
  const accent_color = response.base0D;

  // See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme
  browser.theme.update({
    colors: {
      bookmark_text: text,
      button_background_active: background_highlight,
      button_background_hover: background_selected,
      icons: text,
      icons_attention: accent_color,
      frame: background,
      frame_inactive: background_secondary,
      ntp_background: background,
      ntp_card_background: background,
      ntp_text: text,
      popup: background,
      popup_border: border,
      popup_highlight: background_highlight,
      popup_highlight_text: text,
      popup_text: text,
      sidebar: background,
      sidebar_border: border,
      sidebar_highlight: background_highlight,
      sidebar_highlight_text: text,
      sidebar_text: text,
      tab_background_separator: border,
      tab_background_text: text,
      tab_line: background_highlight,
      tab_loading: accent_color,
      tab_selected: background_secondary,
      tab_text: text,
      toolbar: background_secondary,
      toolbar_bottom_separator: border,
      toolbar_field: background_selected,
      toolbar_field_border: border,
      toolbar_field_border_focus: border_secondary,
      toolbar_field_focus: background_selected,
      toolbar_field_highlight: accent_color,
      toolbar_field_highlight_text: background_selected,
      toolbar_field_separator: border,
      toolbar_field_text: text,
      toolbar_field_text_focus: text,
      toolbar_text: text,
      toolbar_top_separator: border,
      toolbar_vertical_separator: border,
    },
  });
};

port.onMessage.addListener(onMessage);
