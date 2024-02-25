module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "ThreeUnits": "48px",
        "FiveUnits": "80px",
        "OneAndHalfUnits": "24px",
        "FourUnits": "64px",
        "HalfUnit": "8px",
        "SixUnits": "96px",
        "Unit": "16px",
        "TwoUnits": "32px"
      },
      "borderRadius": {
        "Radius2": "2px",
        "Round": "50%",
        "Radius8": "8px",
        "Radius4": "4px"
      },
      "scale": {
        "Small": "48px",
        "XLarge": "192px",
        "MaxWidth": "1400px",
        "Large": "144px",
        "XXLarge": "288px",
        "Medium": "96px",
        "XSmall": "16px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}