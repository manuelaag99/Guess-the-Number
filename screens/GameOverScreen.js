import { StyleSheet, Text, View } from "react-native";
import CardContainer from "../components/CardContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

export default function GameOverScreen ({ returnToHomeScreen }) {
    return (
        <View style={styles.screenStyles}>
            <Title title="Your opponent has guessed the number!" />
            <PrimaryButton additionalStyles={{ paddingHorizontal: 20 }} pressButtonAction={returnToHomeScreen}>
                Return to home screen
            </PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screenStyles: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    generalTextStyles: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 14
    }
})