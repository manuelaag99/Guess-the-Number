import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import CardContainer from "../components/CardContainer";

export default function InitialGameScreen ({ setPickedNumber }) {
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
            setPickedNumber(chosenNumber);
        }
    }

    function clearNumberInput () {
        setEnteredNumber("")
    }
    return (
        <View style={{ flex: 1,  justifyContent: "center", alignItems: "center", padding: 20 }}>
            <CardContainer>
                <TextInput onChangeText={numberInputHandler} value={enteredNumber} maxLength={2} keyboardType="number-pad" autoCorrect={false} inputMode="numeric" style={styles.textInputStyles} />
                <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%", marginTop: 10 }}>
                    <PrimaryButton additionalStyles={{ width: "40%" }} pressButtonAction={clearNumberInput}>
                        Reset
                    </PrimaryButton>
                    <PrimaryButton additionalStyles={{ width: "40%" }} pressButtonAction={confirmEnteredValue}>
                        Confirm
                    </PrimaryButton>
                </View>
            </CardContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyles: {
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