import { ColorValue } from "react-native";

type ColorScheme =
	| "black"
	| "white"
	| "grey"
	| "lightGrey"
	| "darkGrey"
	| "brand"
	| "lightBrand";

export type Colors = Record<ColorScheme, ColorValue>;

const colors: Colors = {
	black: "#222222ff",
	white: "#f0f0f0ff",
	grey: "#747474ff",
	lightGrey: "#dfdfdfff",
	darkGrey: "#363636ff",
	brand: "#9E8372ff",
	lightBrand: "#d2bcafff",
};

export default colors;
