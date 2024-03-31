import { Pressable, StyleSheet, Text } from "react-native"
import Colors from "../constants/colors"

export default function PrimaryButton ({ children, pressButtonAction }) {
    return (
        <Pressable onPress={pressButtonAction} android_ripple={{ color: "#f82" }} style={({ pressed }) => pressed ? [styles.buttonStyle, styles.pressedButtonStyle] : styles.buttonStyle}>
            <Text style={{ width: "100%", textAlign: "center", color: "#fff", fontWeight: "bold" }}>
                {children}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.secondary400,
        width: "40%",
        justifyContent: "center",
        paddingVertical: 10,
        borderRadius: 9,
        elevation: 10
    },
    pressedButtonStyle: {
        opacity: 30
    }    
})