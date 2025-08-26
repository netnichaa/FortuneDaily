import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import Card from "../ui/Card";

const CardSelectScreen = () => {
	type Data = { id: string };

	const data: Data[] = Array.from({ length: 30 }, (_, index) => {
		return {
			id: `${index}`,
		};
	});

	return (
		<View style={styles.container}>
			{/** background image */}
			<Image
				source={require("@/assets/images/background.png")}
				style={styles.backgroundImage}
			/>
			{/** contents */}
			{/* <View style={styles.content}> */}
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<Card
						source={require("@/assets/images/prophecies/daily.png")}
						style={styles.card}
						id={item.id}
					/>
				)}
				keyExtractor={(item) => item.id}
				numColumns={6}
				contentContainerStyle={styles.content}
			/>
			{/* </View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-start",
	},
	backgroundImage: {
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	content: {
		height: "80%",
		width: "100%",
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignContent: "space-between",
		backgroundColor: colors.black,
		gap: 4,
	},
	card: {
		height: undefined,
		width: "15%",
		aspectRatio: 9 / 16,
	},
});

export default CardSelectScreen;
