import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Cards = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/daily.jpg")}
				style={styles.card}
			/>
			<Image
				source={require("../../assets/images/love.jpg")}
				style={styles.card}
			/>
			<Image
				source={require("../../assets/images/work.jpg")}
				style={styles.card}
			/>
			<Image
				source={require("../../assets/images/obstacle.jpg")}
				style={styles.card}
			/>
			{/* <Image
				source={require("../../assets/images/relationship.jpg")}
				style={styles.card}
			/> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "40%", // 40% of screen - ads banner size
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignContent: "center",
		paddingHorizontal: 4,
	},
	card: {
		width: undefined,
		height: "50%", // 50% of card container
		aspectRatio: 9 / 16,
		margin: 6,
	},
});

export default Cards;
