module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        "@screens": "./src/screens",
                        "@components": "./src/components",
                        "@constants": "./src/constants",
                        "@utils": "./src/utils",
                    },
                },
            ],
            "react-native-reanimated/plugin",
        ],
    };
};
