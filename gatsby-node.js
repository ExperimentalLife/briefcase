const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  const srcRoot = path.resolve(__dirname, "src")

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      alias: {
        "@styles": path.resolve(srcRoot, "styles/"),
      },
    },
  })
}
