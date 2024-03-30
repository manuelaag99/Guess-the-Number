import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function GameScreen ({ guessedNumber }) {
    const [numberOfRounds, setNumberOfRounds] = useState(1);
    function addRound () {
        setNumberOfRounds((prevValue) => prevValue + 1);
    }

    return (
        <View style={styles.screenStyles}>
            <View style={styles.containerStyles}>
                <Text style={[styles.generalTextStyles, { fontSize: 40 }]}>
                    {guessedNumber}
                </Text>
                <Text style={styles.generalTextStyles}>
                    Is the number you entered higher or lower?
                </Text>
                <View style={styles.buttonsContainerStyles}>
                    <PrimaryButton pressButtonAction={addRound}>Greater</PrimaryButton>
                    <PrimaryButton>Lower</PrimaryButton>
                </View>
                <View style={{ width: "100%" }}>
                    <Text style={styles.generalTextStyles}>
                        {numberOfRounds} rounds
                    </Text>
                </View>
            </View>
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
    containerStyles: {
        backgroundColor: "#a6a",
        borderRadius: 9,
        elevation: 5,
        paddingHorizontal: 8,
        paddingVertical: 12,
        width: "100%"
    },
    generalTextStyles: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 14
    },
    buttonsContainerStyles: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5
    }
})