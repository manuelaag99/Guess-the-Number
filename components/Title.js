import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function Title ({ title }) {
    
    const { width, height } = useWindowDimensions();

    return (
        <View style={styles.containerStyles}>
            <Text style={styles.textStyles}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 12,
        marginVertical: 20
    },
    textStyles: {
        fontFamily: "bold-font",
        textAlign: "center",
        fontSize: 32,
        color: "#fff",
        textShadowColor: "#000",
        textShadowRadius: 10,
        textShadowOffset: { width: 1, height: 1 }
    }
})