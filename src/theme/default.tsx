const DefaultTheme: ThemeProperties = {
  LAYOUT_BOARD_BACKGROUND_COLOR: "#2f2f30",
  LAYOUT_HEADER_BACKGROUND_COLOR: "#131518",
  LAYOUT_BOARD_SIDEBAR_BACKGROUND_COLOR: "#1c1c1c",
  POPOVER_DEFAULT_BACKGROUND: "#1c1c1c",
  POST_HEADER_DATE_COLOR: "#767676",
  POST_HEADER_USERNAME_COLOR: "#2f2f30",
  POST_BACKGROUND_COLOR: "#ffffff",
  BORDER_RADIUS_REGULAR: "15px",
  BORDER_RADIUS_LARGE: "25px",
  DEFAULT_ACCENT_COLOR: "#ff5252",
  MODAL_BACKGROUND_COLOR: "rgba(0, 0, 0, 0.8)",
  // Unable to parse color from string
  DROPDOWN_BACKGROUND_COLOR_LIGHT: "#ffffff",
  DROPDOWN_BACKGROUND_COLOR_DARK: "#1c1c1c",
  DROPDOWN_HOVER_BACKGROUND_COLOR: "#d9d9d9",
  HEADER_HEIGHT_PX: 70,
  BOTTOM_BAR_HEIGHT_PX: 50,
  //INDENT_COLORS: ["#f96680", "#24d282", "#27caba", "#f9e066"],
  //INDENT_COLORS: ["#535353", "#808080", "#27caba", "#f9e066"],
  INDENT_COLORS: ["#65E8B7", "#FEF48F", "#A1C6FA", "#F9B7CB"],
  BUTTON_ACCENT_COLOR_LIGHT: "#1c1c1c",
  BUTTON_BACKGROUND_COLOR_LIGHT: "#ffffff",
  BUTTON_ACCENT_COLOR_DARK: "#ffffff",
  BUTTON_BACKGROUND_COLOR_DARK: "#1c1c1c",
  POST_WIDTH_PX: "550",
  SIDEBAR_WIDTH_PX: "350",
  MOBILE_WIDTH_TRIGGER_PX: "950",
  // SIDE MENU
  SIDE_MENU_MAX_WIDTH_PX: "400",
  PINNED_BAR_WIDTH_PX: "65",
  PINNED_BAR_BACKGROUND: "#131518",
  PINNED_BAR_TEXT_COLOR: "white",
  BOARD_MENU_ITEM_BACKGROUND: "#2e2e30",
  BOARD_MENU_BACKGROUND: "#1c1c1c",
  BOARD_FILTER_BACKGROUND: "#2e2e30",
  BOARD_FILTER_TEXT_COLOR: "#fff",
  // TAGS
  INDEX_TAG_COLOR: "#FF5A13",
  CATEGORY_FILTER_COLOR: "#138EFF",
  CONTENT_NOTICE_COLOR: "#FFC700",
  // MENU ITEMS
  MENU_ITEM_ICON_BACKGROUND_COLOR: "#2e2e30",
  MENU_ITEM_ICON_COLOR: "#bfbfbf",
  MENU_ITEM_ICON_HIGHLIGHT_COLOR: "#ffffff",
  // NOTIFICATIONS
  NOTIFICATIONS_OUTDATED_COLOR: "#ffffff",
  NOTIFICATIONS_NEW_COLOR: "#ff5252", // DefaultAccentColor
  // POST
  POST_TEXT_COLOR: "#000000",
  OP_BADGE_COLOR: "#1673e4",
  // COMMENTS
  COMMENT_BACKGROUND_COLOR: "#5e5e5f",
  COMMENT_BORDER_COLOR: "rgba(255, 255, 255, 0.3)",
  COMMENT_TEXT_COLOR: "#ffffff",
};

// @ts-expect-error we're not going to use this theme right now
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FunnyTheme: ThemeProperties = {
  LAYOUT_BOARD_BACKGROUND_COLOR: "red", // #2f2f30
  LAYOUT_HEADER_BACKGROUND_COLOR: "purple", // #131518
  LAYOUT_BOARD_SIDEBAR_BACKGROUND_COLOR: "green", // #1c1c1c
  POPOVER_DEFAULT_BACKGROUND: "AntiqueWhite", // #1c1c1c
  POST_HEADER_DATE_COLOR: "LightGoldenRodYellow", // #2f2f30
  POST_HEADER_USERNAME_COLOR: "SteelBlue", // #2f2f30
  POST_BACKGROUND_COLOR: "pink", // #ffffff
  BORDER_RADIUS_REGULAR: "75px", // 15px
  BORDER_RADIUS_LARGE: "180px", // 25px
  DEFAULT_ACCENT_COLOR: "DeepPink", // #ff5252
  MODAL_BACKGROUND_COLOR: "Orchid", // rgba(0, 0, 0, 0.8)
  // Unable to parse color from string
  DROPDOWN_BACKGROUND_COLOR_LIGHT: "#4169E1", // #ffffff
  DROPDOWN_BACKGROUND_COLOR_DARK: "Chartreuse", // #1c1c1c
  DROPDOWN_HOVER_BACKGROUND_COLOR: "Coral", // #d9d9d9
  HEADER_HEIGHT_PX: 140, // 70
  //INDENT_COLORS: ["#f96680", "#24d282", "#27caba", "#f9e066"],
  //INDENT_COLORS: ["#535353", "#808080", "#27caba", "#f9e066"],
  INDENT_COLORS: ["#65E8B7", "#FEF48F", "#A1C6FA", "#F9B7CB"],
  BUTTON_ACCENT_COLOR_LIGHT: "Violet", // #1c1c1c
  BUTTON_BACKGROUND_COLOR_LIGHT: "aquamarine", // #ffffff
  BUTTON_ACCENT_COLOR_DARK: "DodgerBlue", // #ffffff
  BUTTON_BACKGROUND_COLOR_DARK: "MediumSeaGreen", // #1c1c1c
  POST_WIDTH_PX: "860", // 550
  SIDEBAR_WIDTH_PX: "100", // 350
  MOBILE_WIDTH_TRIGGER_PX: "1200", // 950
  // SIDE MENU
  SIDE_MENU_MAX_WIDTH_PX: "1000", // 400
  PINNED_BAR_WIDTH_PX: "105", // 65
  PINNED_BAR_BACKGROUND: "LavenderBlush", // #131518
  PINNED_BAR_TEXT_COLOR: "purple", // white
  BOARD_MENU_ITEM_BACKGROUND: "GoldenRod", // #2e2e30
  BOARD_MENU_BACKGROUND: "Indigo", // #1c1c1c
  BOARD_FILTER_BACKGROUND: "GreenYellow", // #2e2e30
  BOARD_FILTER_TEXT_COLOR: "LightPink", // #fff
  // TAGS
  INDEX_TAG_COLOR: "LightGreen", // #FF5A13
  CATEGORY_FILTER_COLOR: "LightSalmon", // #138EFF
  CONTENT_NOTICE_COLOR: "LightSkyBlue", // #FFC700
  // MENU ITEMS
  MENU_ITEM_ICON_BACKGROUND_COLOR: "Tomato", //#2e2e30
  MENU_ITEM_ICON_COLOR: "Turquoise", // #bfbfbf
  MENU_ITEM_ICON_HIGHLIGHT_COLOR: "SpringGreen", // #ffffff
  // NOTIFICATIONS
  NOTIFICATIONS_OUTDATED_COLOR: "#ffffff", // #ffffff
  NOTIFICATIONS_NEW_COLOR: "DeepPink", // DefaultAccentColor
  // POST
  POST_TEXT_COLOR: "DeepPink", // #000000
  // COMMENTS
  COMMENT_BACKGROUND_COLOR: "SpringGreen", // #5e5e5f
  COMMENT_BORDER_COLOR: "RoyalBlue", // rgba(255, 255, 255, 0.3)
  COMMENT_TEXT_COLOR: "Navy", // #ffffff
};

export default DefaultTheme;

export interface ThemeProperties
  extends SideMenuProperties,
    PostProperties,
    TagsProperties,
    LayoutProperties,
    MenuItemsProperties,
    NotificationProperties,
    CommentProperties {
  POPOVER_DEFAULT_BACKGROUND: string;
  BORDER_RADIUS_REGULAR: string;
  BORDER_RADIUS_LARGE: string;
  DROPDOWN_BACKGROUND_COLOR_LIGHT: string;
  DROPDOWN_BACKGROUND_COLOR_DARK: string;
  DROPDOWN_HOVER_BACKGROUND_COLOR: string;
  BUTTON_ACCENT_COLOR_LIGHT: string;
  BUTTON_ACCENT_COLOR_DARK: string;
  BUTTON_BACKGROUND_COLOR_LIGHT: string;
  BUTTON_BACKGROUND_COLOR_DARK: string;
}

export interface MenuItemsProperties {
  MENU_ITEM_ICON_BACKGROUND_COLOR: string;
  MENU_ITEM_ICON_COLOR: string;
  MENU_ITEM_ICON_HIGHLIGHT_COLOR: string;
}

export interface LayoutProperties {
  LAYOUT_BOARD_BACKGROUND_COLOR: string;
  LAYOUT_HEADER_BACKGROUND_COLOR: string;
  LAYOUT_BOARD_SIDEBAR_BACKGROUND_COLOR: string;
  HEADER_HEIGHT_PX: number;
  BOTTOM_BAR_HEIGHT_PX: number;
  MODAL_BACKGROUND_COLOR: string;
  DEFAULT_ACCENT_COLOR: string;
}

export interface TagsProperties {
  INDEX_TAG_COLOR: string;
  CATEGORY_FILTER_COLOR: string;
  CONTENT_NOTICE_COLOR: string;
}

export interface CommentProperties {
  COMMENT_BACKGROUND_COLOR: string;
  COMMENT_BORDER_COLOR: string;
  COMMENT_TEXT_COLOR: string;
  INDENT_COLORS: string[];
}

export interface PostProperties {
  POST_HEADER_DATE_COLOR: string;
  POST_HEADER_USERNAME_COLOR: string;
  POST_BACKGROUND_COLOR: string;
  POST_TEXT_COLOR: string;
  POST_WIDTH_PX: string;
  INDENT_COLORS: string[];
  OP_BADGE_COLOR: string;
}

export interface SideMenuProperties {
  SIDEBAR_WIDTH_PX: string;
  MOBILE_WIDTH_TRIGGER_PX: string;
  SIDE_MENU_MAX_WIDTH_PX: string;
  PINNED_BAR_WIDTH_PX: string;
  PINNED_BAR_BACKGROUND: string;
  PINNED_BAR_TEXT_COLOR: string;
  BOARD_MENU_ITEM_BACKGROUND: string;
  BOARD_MENU_BACKGROUND: string;
  BOARD_FILTER_BACKGROUND: string;
  BOARD_FILTER_TEXT_COLOR: string;
}

export interface NotificationProperties {
  NOTIFICATIONS_OUTDATED_COLOR: string;
  NOTIFICATIONS_NEW_COLOR: string;
}
