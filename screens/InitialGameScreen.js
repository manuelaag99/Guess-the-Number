import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function InitialGameScreen () {
    const [enteredNumber, setEnteredNumber] = useState("");

    function numberInputHandler (enteredText) {
        setEnteredNumber(enteredText)
    }

    function confirmEnteredValue () {
        const chosenNumber = parseInt(enteredNumber);
        if ((isNaN(chosenNumber)) || (chosenNumber <= 0) || (chosenNumber >= 99 )) {
            Alert.alert("Error", "You entered an invalid value.", [
                { text: "Close", style: "default", onPress: clearNumberInput}
            ])
            return;
        } else {
            console.log("valid number!")
        }
    }

    function clearNumberInput () {
        setEnteredNumber("")
    }
    return (
        <View style={{ alignItems: "center", justifyContent: "center", marginHorizontal: 50, backgroundColor: "#a6a", marginVertical: 15, padding: 20, borderRadius: 9, elevation: 5, shadowColor: "#000", shadowOffset: { width: 2, height: 2 }, shadowRadius: 5, shadowOpacity: 0.25 }}>
            <TextInput onChangeText={numberInputHandler} value={enteredNumber} maxLength={2} keyboardType="number-pad" autoCorrect={false} inputMode="numeric" style={styles.textInput} />
            <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%", marginTop: 10 }}>
                <PrimaryButton pressButtonAction={clearNumberInput}>
                    Reset
                </PrimaryButton>
                <PrimaryButton pressButtonAction={confirmEnteredValue}>
                    Confirm
                </PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 60,
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        paddingVertical: 4,
        fontSize: 36,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 6,
        textAlign: "center"
    }
})