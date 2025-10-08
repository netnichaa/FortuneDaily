import { useVideoPlayer, VideoView } from "expo-video";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ProphecyType } from "../types/ArcanaDataList";
import AdsBanner from "../ui/AdsBanner";
import CoinBox from "../ui/CoinBox";
import CardList from "./components/CardList";
import CardModal from "./components/CardModal";

const HomeScreen: React.FC = () => {
	const [modalVisibility, setModalVisibility] = useState<boolean>(false);
	const [prophecyType, setProphecyType] = useState<ProphecyType>("daily");

	const player = useVideoPlayer(
		require("@/assets/videos/background.mov"),
		(player) => {
			player.loop = true; // Loop the video
			player.play(); // Auto-play since start
		}
	);

	return (
		<View style={styles.container}>
			{/* Fullscreen looping background video */}
			<VideoView
				style={styles.backgroundVideo}
				player={player}
				nativeControls={false}
			/>
			<CoinBox number={10} />
			{/* Content on top of the video background */}
			<CardModal
				isRead={true}
				prophecyType={prophecyType}
				visible={modalVisibility}
				onRequestClose={() => {
					setModalVisibility(false);
				}}
				onRead={() => {
					setModalVisibility(false);
				}}
			/>
			<CardList
				onPress={(prophecyType) => {
					setModalVisibility(true);
					setProphecyType(prophecyType);
				}}
			/>
			<AdsBanner />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	backgroundVideo: {
		position: "absolute",
		width: "100%",
		height: undefined,
		aspectRatio: 540 / 1280, // actual video ratio
		top: 0,
		left: 0,
		zIndex: 0,
	},
});

export default HomeScreen;
