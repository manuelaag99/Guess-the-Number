import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CardContainer from "../components/CardContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

export default function GameOverScreen ({ numberOfGuesses, returnToHomeScreen, userNumber }) {
    const { width, height } = useWindowDimensions();

    return (
        <ScrollView contentContainerStyle={styles.screenStyles} style={{ flex: 1 }}>
            <View style={[styles.screenStyles, { paddingHorizontal: (width > 500) ? 145 : 20 }]}>
                <View style={[styles.imageContainerStyles, { width: (width > 500) ? 80 : 170 }, { height: (width > 500) ? 80 : 170 }, { borderRadius: (width > 500) ? 40 : 85 } ]}>
                    <Image style={styles.imageStyles} source={require("../assets/images/success.png")} />
                </View>
                <Title  title="Your opponent has guessed the number!" />
                
                {(width > 500) && <Text style={styles.generalTextStyles}>
                    After {numberOfGuesses} attempts, your opponent guessed that the number you entered was {userNumber}.
                </Text>}
                {(width > 500) && <PrimaryButton additionalStyles={{ paddingHorizontal: 20 }} pressButtonAction={returnToHomeScreen}>
                    Return to home screen
                </PrimaryButton>}
                
                {(width < 500) && <CardContainer>
                    <Text style={styles.generalTextStyles}>
                        After {numberOfGuesses} attempts, your opponent guessed that the number you entered was {userNumber}.
                    </Text>
                    <PrimaryButton additionalStyles={{ paddingHorizontal: 20 }} pressButtonAction={returnToHomeScreen}>
                        Return to home screen
                    </PrimaryButton>
                </CardContainer>}
            </View>
        </ScrollView>
    )
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screenStyles: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
        elevation: 6,
        marginVertical: 8
    },
    imageStyles: {
        width: "100%",
        height: "100%"
    }
})