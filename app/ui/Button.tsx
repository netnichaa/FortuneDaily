import React from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import colors from "../constant/colors";
import Text from "./Text";

interface ButtonProps extends PressableProps {
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { style, children, ...rest } = props;

	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => ({
					...styles.button,
					backgroundColor: pressed ? colors.lightGrey : colors.white,
					style,
					flexDirection: "row",
				})}
				{...rest}
			>
				<Text variant="header">{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	button: {
		height: 36,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 16,
		width: "auto",
	},
});

export default Button;
