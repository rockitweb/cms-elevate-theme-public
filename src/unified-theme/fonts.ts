import areaRegular from "../../../assets/fonts/area/area_normal_regular-webfont.woff2";

const fontFace = new FontFace("area", `url(${areaRegular})`, {
  weight: "400",
  style: "normal",
  display: "swap",
});
fontFace.load().then((loadedFont) => {
  document.fonts.add(loadedFont);
});
