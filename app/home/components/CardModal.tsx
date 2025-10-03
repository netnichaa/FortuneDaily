import colors from "@/app/constants/colors";
import Button from "@/app/ui/Button";
import Card from "@/app/ui/Card";
import Overlay from "@/app/ui/Overlay";
import ProphecyTitle from "@/app/ui/ProphecyTitle";
import Text from "@/app/ui/Text";
import {
	GestureResponderEvent,
	Image,
	Modal,
	ModalProps,
	StyleSheet,
	View,
} from "react-native";

interface CardModalProps extends ModalProps {
	onRead: (event: GestureResponderEvent) => void;
	isRead?: boolean;
}

const CardModal: React.FC<CardModalProps> = (props) => {
	const { onRead, isRead, onRequestClose, ...rest } = props;

	const ProphecyModal = () => {
		return (
			<Overlay onPress={onRequestClose}>
				<View style={styles.container}>
					<ProphecyTitle>ดวงรายวัน</ProphecyTitle>
					<Card
						source={require("@/assets/images/arcana/00_TheFool.png")}
						style={styles.card}
					/>
					<View style={styles.buttonContainer}>
						<Button onPress={onRequestClose}>ยกเลิก</Button>
						<Button onPress={onRead}>
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
		);
	};

	const ReadModal = () => {
		return (
			<Overlay onPress={onRequestClose}>
				<View style={styles.container}>
					<ProphecyTitle>ดวงรายวัน</ProphecyTitle>
					<Card
						source={require("@/assets/images/arcana/00_TheFool.png")}
						style={styles.readCard}
					/>
					<View style={styles.readCardContainer}>
						<Text variant="header">{"randomCard?.arcanaName"}</Text>
						<Text>
							{"   "}
							{"randomCard?.daily.prophecy.TH"}
						</Text>
					</View>
					<View style={styles.buttonContainer}>
						<Button onPress={onRequestClose}>กลับ</Button>
					</View>
				</View>
			</Overlay>
		);
	};

	return (
		<Modal
			animationType="fade"
			transparent={true}
			onRequestClose={onRequestClose}
			{...rest}
		>
			{isRead ? <ReadModal /> : <ProphecyModal />}
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
		paddingVertical: 48,
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
	// styles for read modal component
	readCard: {
		width: "30%",
		height: undefined,
		aspectRatio: 9 / 16,
	},
	readCardContainer: {
		width: "60%",
		flex: 1,
		backgroundColor: colors.lightBrand,
		padding: 12,
		flexShrink: 1,
		borderRadius: 4,
	},
});

export default CardModal;
