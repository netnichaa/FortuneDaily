import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../ui/Card";

const CardList = () => {
	return (
		<View style={styles.container}>
			<Card
				source={require("../../assets/images/prophecies/daily.jpg")}
				style={styles.card}
			/>
			<Card
				source={require("../../assets/images/prophecies/love.jpg")}
				style={styles.card}
			/>
			<Card
				source={require("../../assets/images/prophecies/work.jpg")}
				style={styles.card}
			/>
			<Card
				source={require("../../assets/images/prophecies/obstacle.jpg")}
				style={styles.card}
			/>
			{/* <Card
				source={require("../../assets/images/prophecies/relationship.jpg")}
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
		margin: 6,
	},
});

export default CardList;
