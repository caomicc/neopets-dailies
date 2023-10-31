import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face{
        font-family: "Burbank Small Medium";
        src: url("https://db.onlinewebfonts.com/t/771545ad3c588eace8fa2bb99d2c4e59.eot");
        src: url("https://db.onlinewebfonts.com/t/771545ad3c588eace8fa2bb99d2c4e59.eot?#iefix")format("embedded-opentype"),
            url("https://db.onlinewebfonts.com/t/771545ad3c588eace8fa2bb99d2c4e59.woff")format("woff"),
            url("https://db.onlinewebfonts.com/t/771545ad3c588eace8fa2bb99d2c4e59.woff2")format("woff2"),
            url("https://db.onlinewebfonts.com/t/771545ad3c588eace8fa2bb99d2c4e59.ttf")format("truetype"),
            url("https://db.onlinewebfonts.com/t/771545ad3c588eace8fa2bb99d2c4e59.svg#Burbank Small Medium")format("svg");
        font-weight:normal;
        font-style:normal;
        font-display:swap;
      }
    `}
  />
)

export default Fonts
