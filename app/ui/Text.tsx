import React from "react";
import {
	Text as ReactText,
	TextProps as ReactTextProps,
	StyleSheet,
} from "react-native";
import colors from "../constants/colors";

type TextVariant = "title" | "header" | "body" | "footer";

interface TextProps extends ReactTextProps {
	variant?: TextVariant;
}

const Text: React.FC<TextProps> = (props) => {
	const { variant = "body", style, ...rest } = props;

	return <ReactText style={[styles[variant], style]} {...rest} />;
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "condensedBold",
		color: colors.white,
	},
	header: {
		fontSize: 16,
		fontWeight: "semibold",
		color: colors.black,
	},
	body: {
		fontSize: 14,
		fontWeight: "normal",
		color: colors.black,
	},
	footer: {
		fontSize: 12,
		fontWeight: "normal",
		color: colors.darkGrey,
	},
});

export default Text;
