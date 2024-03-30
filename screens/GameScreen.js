import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function GameScreen ({ guessedNumber }) {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
            <View style={styles.containerStyles}>
                <Text style={[styles.generalTextStyles, { fontSize: 40 }]}>
                    {guessedNumber}
                </Text>
                <Text style={styles.generalTextStyles}>
                    Is the number you entered higher or lower?
                </Text>
                <View style={styles.buttonsContainerStyles}>
                    <PrimaryButton>Greater</PrimaryButton>
                    <PrimaryButton>Lower</PrimaryButton>
                </View>
                <View style={{ width: "100%" }}>
                    <Text>
                        rounds
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        backgroundColor: "#a6a",
        borderRadius: 9,
        elevation: 5,
        paddingHorizontal: 8,
        paddingVertical: 28,
        width: "100%"
    },
    generalTextStyles: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20
    },
    buttonsContainerStyles: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})