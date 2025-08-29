import Button from "@/app/ui/Button";
import Card from "@/app/ui/Card";
import Overlay from "@/app/ui/Overlay";
import ProphecyTitle from "@/app/ui/ProphecyTitle";
import {
	GestureResponderEvent,
	Image,
	Modal,
	ModalProps,
	StyleSheet,
	View,
} from "react-native";

interface CardModalProps extends ModalProps {
	onNext: (event: GestureResponderEvent) => void;
}

const CardModal: React.FC<CardModalProps> = (props) => {
	const { onNext, onRequestClose, ...rest } = props;

	return (
		<Modal
			animationType="fade"
			transparent={true}
			onRequestClose={onRequestClose}
			{...rest}
		>
			<Overlay onPress={onRequestClose}>
				<View style={styles.container}>
					<ProphecyTitle>ดวงรายวัน</ProphecyTitle>
					<Card
						source={require("@/assets/images/prophecies/daily.png")}
						style={styles.card}
					/>
					<View style={styles.buttonContainer}>
						<Button onPress={onRequestClose}>ยกเลิก</Button>
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
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
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

export default CardModal;
