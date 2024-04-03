import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function ListItem ({ guess, numberOfRound }) {
    return (
        <View style={styles.containerStyles}>
            <Text style={styles.textStyles}>
                #{numberOfRound} - Opponent's guess: {guess}. 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        width: "100%",
        padding: 12,
        marginVertical: 2,
        backgroundColor: Colors.primary500,
        borderRadius: 5
    },
    textStyles: {
        color: "#fff",
        fontSize: 14
    }
})