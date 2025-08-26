import React from "react";
import {
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	View,
	ViewProps,
} from "react-native";
import colors from "../constants/colors";

export interface OverlayProps extends ViewProps {
	onPress?: (event: GestureResponderEvent) => void;
}

const Overlay: React.FC<OverlayProps> = (props) => {
	const { children, onPress, ...rest } = props;

	return (
		<View style={styles.container} {...rest}>
			<Pressable style={styles.overlay} onPress={onPress} />
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		position: "absolute",
	},
	overlay: {
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.black,
		opacity: 0.8,
		position: "absolute",
	},
});

export default Overlay;
