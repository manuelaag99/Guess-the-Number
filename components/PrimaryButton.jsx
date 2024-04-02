import { Pressable, StyleSheet, Text, View } from "react-native"
import Colors from "../constants/colors"

export default function PrimaryButton ({ additionalStyles, children, pressButtonAction }) {
    return (
        <Pressable onPress={pressButtonAction} android_ripple={{ color: "#f82" }} style={({ pressed }) => pressed ? [styles.buttonStyle, styles.pressedButtonStyle, additionalStyles] : [styles.buttonStyle, additionalStyles]}>
            <View style={styles.buttonViewStyle}>
                <Text style={{ fontFamily: "bold-font", width: "100%", textAlign: "center", color: "#fff" }}>
                    {children}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.secondary400,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 9,
        elevation: 10,
        marginTop: 10
    },
    buttonViewStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
    },
    pressedButtonStyle: {
        opacity: 30
    }
})