import React from "react";
import { Image, StyleSheet, View, ViewProps } from "react-native";
import Text from "./Text";

interface ProphecyTitleProps extends ViewProps {}

const ProphecyTitle: React.FC<ProphecyTitleProps> = (props) => {
	const { style, children, ...rest } = props;

	return (
		<View style={[styles.container, style]} {...rest}>
			<Image
				source={require("@/assets/images/text_box.png")}
				style={styles.textBox}
			/>
			<Text variant="title">{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 48,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	textBox: {
		position: "absolute",
		resizeMode: "contain",
		height: 42,
	},
});

export default ProphecyTitle;
