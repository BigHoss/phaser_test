module.exports = {
    entry: "./src/app.ts",
    devtool: "sourve-map",
    output: {
        filename: "./bundle.js"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    }
}