module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "extensions": [".ios.js", ".android.js", ".js", ".json"],
        "alias": {
          "Components": "./app/components",
          "Screens": "./app/screens",
          "Style": "./app/assets//style",
        }
      }
    ]
  ]
};
