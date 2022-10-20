export default {
  testEnvironment: "jsdom",
  transform: {
    "\\.(js|ts|tsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|html)$":
      "<rootDir>/tests/utils/fileTransformer.js",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^react($|/.+)": "<rootDir>/node_modules/react$1",
    "^types(.*)$": "<rootDir>/src/types$1",
    "^stories(.*)$": "<rootDir>/stories$1",
    "^board(.*)$": "<rootDir>/src/board$1",
    "^blocks(.*)$": "<rootDir>/src/blocks$1",
    "^common(.*)$": "<rootDir>/src/common$1",
    "^feeds(.*)$": "<rootDir>/src/feeds$1",
    "^post(.*)$": "<rootDir>/src/post$1",
    "^sidemenu(.*)$": "<rootDir>/src/sidemenu$1",
    "^theme(.*)$": "<rootDir>/src/theme$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
    "^buttons(.*)$": "<rootDir>/src/buttons$1",
    "^extra(.*)$": "<rootDir>/src/extra$1",
    "^images(.*)$": "<rootDir>/src/images$1",
    "^layout(.*)$": "<rootDir>/src/layout$1",
    "^sidebar(.*)$": "<rootDir>/src/sidebar$1",
    "^tags(.*)$": "<rootDir>/src/tags$1",
    "^thread(.*)$": "<rootDir>/src/thread$1",
    "^user(.*)$": "<rootDir>/src/user$1",
  },
  transformIgnorePatterns: [
    "/!node_modules\\/fitty/",
    "/!node_modules\\/@bobaboard/boba-editor",
  ],
  // For CI
  testPathIgnorePatterns: ["boba-editor/"],
  setupFilesAfterEnv: ["./tests/utils/jestSetup.ts"],
};
