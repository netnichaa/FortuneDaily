import Button from "@/app/ui/Button";
import Card from "@/app/ui/Card";
import Overlay, { OverlayProps } from "@/app/ui/Overlay";
import ProphecyTitle from "@/app/ui/ProphecyTitle";
import { GestureResponderEvent, Image, StyleSheet, View } from "react-native";

interface CardOverlayProps {
	onNext: (event: GestureResponderEvent) => void;
	onCancel: (event: GestureResponderEvent) => void;
	visible: boolean;
	onPress?: OverlayProps["onPress"];
}

const CardOverlay: React.FC<CardOverlayProps> = (props) => {
	const { visible, onPress, onCancel, onNext } = props;

	return visible ? (
		<Overlay onPress={onPress}>
			<View
				style={{
					height: "100%",
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
					gap: 16,
				}}
			>
				<ProphecyTitle>ดวงรายวัน</ProphecyTitle>
				<Card
					source={require("@/assets/images/prophecies/daily.png")}
					style={styles.card}
				/>
				<View style={styles.buttonContainer}>
					<Button onPress={onCancel}>ยกเลิก</Button>
					<Button onPress={onNext}>
						ใช้{" "}
						<Image
							source={require("@/assets/images/coin.png")}
							style={styles.coin}
						/>
						10 เพื่อทำนาย
					</Button>
				</View>
			</View>
		</Overlay>
	) : (
		<></>
	);
};

const styles = StyleSheet.create({
	card: {
		width: "60%",
		height: undefined,
		aspectRatio: 9 / 16,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "60%",
		gap: 12,
	},
	coin: {
		width: 12,
		height: 12,
	},
});

export default CardOverlay;
