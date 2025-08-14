import { VideoView, useVideoPlayer } from "expo-video";
import React from "react";
import { StyleSheet, View } from "react-native";
import AdsBanner from "../ui/AdsBanner";
import Cards from "./Cards";

const HomeScreen = () => {
	const player = useVideoPlayer(
		require("../../assets/videos/background.mov"),
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
			{/* Content on top of the video background */}
			<Cards />
			<AdsBanner />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// ...StyleSheet.absoluteFillObject,
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
	},
});

export default HomeScreen;
