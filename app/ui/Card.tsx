import React from "react";
import { Image, ImageProps, StyleSheet } from "react-native";

const Card: React.FC<ImageProps> = (props) => {
	const { style, ...rest } = props;
	return <Image style={[styles.card, style]} {...rest} />;
};

const styles = StyleSheet.create({
	card: {
		aspectRatio: 9 / 16,
	},
});

export default Card;
