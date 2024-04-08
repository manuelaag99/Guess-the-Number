import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import CardContainer from "../components/CardContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

export default function GameOverScreen ({ numberOfGuesses, returnToHomeScreen, userNumber }) {
    return (
        <View style={styles.screenStyles}>
            <View style={styles.imageContainerStyles}>
                <Image style={styles.imageStyles} source={require("../assets/images/success.png")} />
            </View>
            <Title title="Your opponent has guessed the number!" />
            <CardContainer>
                <Text style={styles.generalTextStyles}>
                    After {numberOfGuesses} attempts, your opponent guessed that the number you entered was {userNumber}.
                </Text>
                <PrimaryButton additionalStyles={{ paddingHorizontal: 20 }} pressButtonAction={returnToHomeScreen}>
                    Return to home screen
                </PrimaryButton>
            </CardContainer>
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screenStyles: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    generalTextStyles: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10
    },
    imageContainerStyles: {
        overflow: "hidden",
        borderRadius: (deviceWidth > 380) ? 125 : 100,
        elevation: 6,
        marginVertical: 8,
        width: (deviceWidth > 380) ? 250 : 200,
        height: (deviceWidth > 380) ? 250 : 200
    },
    imageStyles: {
        width: "100%",
        height: "100%"
    }
})