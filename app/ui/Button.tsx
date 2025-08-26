import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import colors from "../constants/colors";
import Text from "./Text";

interface ButtonProps extends PressableProps {
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { style, children, ...rest } = props;

	return (
		<Pressable
			style={({ pressed }) => [
				{
					...styles.button,
					backgroundColor: pressed ? colors.lightGrey : colors.white,
					flexDirection: "row",
					style,
				},
			]}
			{...rest}
		>
			<Text variant="body">{children}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	button: {
		height: 32,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 12,
		flexGrow: 1,
	},
});

export default Button;
