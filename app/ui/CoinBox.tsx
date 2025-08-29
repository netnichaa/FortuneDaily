import React from "react";
import { Image, StyleSheet, View, ViewProps } from "react-native";
import colors from "../constants/colors";
import Text from "./Text";

interface CoinBoxProps extends ViewProps {
	number?: number;
}

const CoinBox: React.FC<CoinBoxProps> = (props) => {
	const { number = 0, style, ...rest } = props;

	return (
		<View style={[styles.container, style]} {...rest}>
			<Text style={styles.plusText}>+</Text>
			<Image style={styles.coin} source={require("@/assets/images/coin.png")} />
			<Text style={styles.numberText}>{number}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// minWidth: 80,
		height: 24,
		backgroundColor: colors.darkGrey,
		position: "absolute",
		top: 16,
		right: 16,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		// paddingHorizontal: 12,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: colors.brand,
	},
	plusText: {
		color: colors.grey,
		marginLeft: 8,
	},
	numberText: {
		color: colors.white,
		marginRight: 12,
	},
	coin: {
		width: 12,
		height: 12,
		marginLeft: 4,
		marginRight: 8,
	},
});

export default CoinBox;
