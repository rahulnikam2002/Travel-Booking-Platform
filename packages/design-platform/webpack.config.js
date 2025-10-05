const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const webpack = require("webpack");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    devServer: {
        port: 3001,
        open: true,
        hot: true,
        liveReload: false,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/',
        },
        watchFiles: {
            paths: ["src/**/*", "public/**/*"],
            options: {
                usePolling: false,
                ignored: /node_modules/,
            },
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: false,
            },
            webSocketURL: "ws://localhost:3001/ws",
        },
        devMiddleware: {
            writeToDisk: false,
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    cache: {
        type: 'filesystem',
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: ['**/node_modules', '**/dist'],
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
                            modules: true,
                        },
                    },
                ],
            },
            // Global CSS
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            // Images and SVG
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            // Other assets
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
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
            templateParameters: {
                PUBLIC_URL: "",
            },
            minify: false,
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://localhost:3001/",
        clean: true,
    },
    devtool: "source-map",
};
