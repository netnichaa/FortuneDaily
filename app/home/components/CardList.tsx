import { ProphecyType } from "@/app/types/ArcanaDataList";
import React from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import Card from "../../ui/Card";

interface CardListProps extends Omit<PressableProps, "onPress"> {
	onPress: (prophecyType: ProphecyType) => void;
}

const CardList: React.FC<CardListProps> = (props) => {
	const { onPress, ...rest } = props;

	return (
		<Pressable style={styles.container} {...rest}>
			<View style={styles.row}>
				<Card
					source={require("@/assets/images/prophecies/daily.png")}
					style={styles.card}
					onPress={() => onPress("daily")}
				/>
				<Card
					source={require("@/assets/images/prophecies/love.png")}
					style={styles.card}
					onPress={() => onPress("love")}
				/>
				<Card
					source={require("@/assets/images/prophecies/work.png")}
					style={styles.card}
					onPress={() => onPress("work")}
				/>
			</View>
			<View style={styles.row}>
				<Card
					source={require("@/assets/images/prophecies/obstacle.png")}
					style={styles.card}
					onPress={() => onPress("obstacle")}
				/>
				<Card
					source={require("@/assets/images/prophecies/relationship.png")}
					style={styles.card}
					onPress={() => onPress("relationship")}
				/>
			</View>
		</Pressable>
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
