import { Platform, StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function Title ({ title }) {
    
    const { width, height } = useWindowDimensions();

    return (
        <View style={styles.containerStyles}>
            <Text style={[styles.textStyles, { fontSize: (width > 380) ? 24 : 32 }]}>
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
        marginHorizontal: 12,
        marginVertical: 20,
        borderColor: "#fff",
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        padding: 6
    },
    textStyles: {
        fontFamily: "bold-font",
        textAlign: "center",
        color: "#fff",
        textShadowColor: "#000",
        textShadowRadius: 10,
        textShadowOffset: { width: 1, height: 1 }
    }
})