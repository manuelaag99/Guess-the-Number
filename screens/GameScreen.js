import { Pressable, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function GameScreen ({ clearPickedNumber, enteredNumber }) {
    const [numberOfRounds, setNumberOfRounds] = useState(1);
    function addRound () {
        setNumberOfRounds((prevValue) => prevValue + 1);
    }

    const [guessedNumber, setGuessedNumber] = useState(Math.floor((Math.random() * 100) + 1));

    console.log(guessedNumber)
    return (
        <View style={styles.screenStyles}>
            <View style={styles.containerStyles}>
                <Text style={styles.enteredNumberStyles}>
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
                    <Pressable>
                        <Text onPress={clearPickedNumber} style={styles.goBackStyles}>
                            Go back.
                        </Text>
                    </Pressable>
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
        paddingVertical: 18,
        width: "100%"
    },
    enteredNumberStyles: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center",
    },
    generalTextStyles: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 14
    },
    goBackStyles: {
        color: "#fb0",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    buttonsContainerStyles: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5
    }
})