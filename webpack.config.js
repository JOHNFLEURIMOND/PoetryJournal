const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  "entry": "index.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [{
          family: "Source Sans Pro"
        },
        {
          family: "Nunito",
          variants: ["400", "700italic"]
        }
      ]
      /* ...options */
    })
  ]
}