import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

export default function CardContainer ({ additionalStyles, children }) {
    return (
        <View style={[styles.containerStyles, additionalStyles]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        backgroundColor: Colors.primary400,
        marginVertical: 15,
        padding: 18,
        borderRadius: 9,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.25
    }
})