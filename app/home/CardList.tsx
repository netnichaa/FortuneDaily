import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../ui/Card";

const CardList = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
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
			</View>
			<View style={styles.row}>
				<Card
					source={require("../../assets/images/prophecies/obstacle.jpg")}
					style={styles.card}
				/>
				<Card
					source={require("../../assets/images/prophecies/relationship.jpg")}
					style={styles.card}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "40%", // 40% of screen - ads banner size
		flexDirection: "column",
		justifyContent: "flex-start",
		alignContent: "space-around",
		padding: 12,
	},
	row: {
		flexDirection: "row",
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 4,
	},
	card: {
		width: undefined,
		height: "100%",
		margin: 4,
	},
});

export default CardList;
