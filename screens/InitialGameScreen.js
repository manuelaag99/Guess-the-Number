import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function InitialGameScreen () {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", marginHorizontal: 50, backgroundColor: "#a6a", marginVertical: 15, padding: 20, borderRadius: 9, elevation: 5, shadowColor: "#000", shadowOffset: { width: 2, height: 2 }, shadowRadius: 5, shadowOpacity: 0.25 }}>
            <TextInput maxLength={2} keyboardType="number-pad" autoCorrect={false} inputMode="numeric" style={styles.textInput} />
            <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%", marginTop: 10 }}>
                <PrimaryButton>
                    Reset
                </PrimaryButton>
                <PrimaryButton>
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