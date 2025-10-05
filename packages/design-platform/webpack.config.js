const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    devServer: {
        port: 3001,
        open: true,
        hot: false,
        liveReload: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            // TypeScript and JavaScript
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: "ts-loader",
                exclude: [/node_modules/, /\.test\.(ts|tsx)$/],
            },
            // CSS Modules
            {
                test: /\.module\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            modules: true,
                        },
                    },
                ],
            },
            // Global CSS
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "design_platform",
            filename: "remoteEntry.js",
            exposes: {
                "./Header": "./src/bootstrap.tsx",
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                    eager: false
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                    eager: false
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://localhost:3001/",
        clean: true,
    },
    devtool: "source-map",
};
