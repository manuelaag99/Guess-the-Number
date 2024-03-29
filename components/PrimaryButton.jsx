import { Pressable, Text } from "react-native"

export default function PrimaryButton ({ children }) {
    return (
        <Pressable android_ripple={{ color: "#f82" }} style={{ backgroundColor: "#eb1", width: "35%", justifyContent: "center", paddingVertical: 10, borderRadius: 9, elevation: 10 }}>
            <Text style={{ width: "100%", textAlign: "center", color: "#fff", fontWeight: "bold" }}>
                {children}
            </Text>
        </Pressable>
    )
}