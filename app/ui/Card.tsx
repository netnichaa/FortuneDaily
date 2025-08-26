import React from "react";
import {
	Image,
	ImageProps,
	Pressable,
	PressableProps,
	StyleSheet,
} from "react-native";

export interface CardProps extends ImageProps {
	onPress?: PressableProps["onPress"];
}

const Card: React.FC<CardProps> = (props) => {
	const { style, onPress, ...rest } = props;
	return (
		<Pressable onPress={onPress}>
			<Image style={[styles.card, style]} {...rest} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		aspectRatio: 9 / 16,
	},
});

export default Card;
