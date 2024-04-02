import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";
import Colors from "../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import CardContainer from "../components/CardContainer";


function generateRandomNumber (max, min, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
}

let minimumBoundary = 1;
let maximumBoundary = 100;
export default function GameScreen ({ clearPickedNumber, enteredNumber, gameIsOver }) {
    const initialGuess = generateRandomNumber(maximumBoundary, minimumBoundary, enteredNumber);
    const [numberOfRounds, setNumberOfRounds] = useState(1);
    const [guesses, setGuesses] = useState([initialGuess])
    const [guessedNumber, setGuessedNumber] = useState(initialGuess);
    const [hasTheNumberBeenGuessed, setHasTheNumberBeenGuessed] = useState(false);
    
    function nextGuessHandler (direction) {
        if ((direction === "higher" && (enteredNumber < guessedNumber)) || ((direction === "lower") && (enteredNumber > guessedNumber))) {
            Alert.alert("Liar", "Dont lie")
            return;
        }
        if (direction === "higher") {
            minimumBoundary = guessedNumber + 1;
        } else {
            maximumBoundary = guessedNumber;
        }
        const newRandomNumber = generateRandomNumber(maximumBoundary, minimumBoundary, guessedNumber)
        setGuessedNumber(newRandomNumber);
        setGuesses(prevGuesses => [newRandomNumber, ...prevGuesses]);
        setNumberOfRounds((prevValue) => prevValue + 1);
    }

    useEffect(() => {
        if (enteredNumber === guessedNumber) {
            Alert.alert("Guessed!", "The number has been guessed");
            setHasTheNumberBeenGuessed(true);
            setGuessedNumber();
            gameIsOver();
        }
    }, [enteredNumber, guessedNumber])

    return (
        <View style={styles.screenStyles}>
            <CardContainer>
                <Text style={styles.enteredNumberStyles}>
                    {guessedNumber}
                </Text>
                <Text style={styles.generalTextStyles}>
                    Is the number you entered higher or lower?
                </Text>
                <View style={styles.buttonsContainerStyles}>
                    <PrimaryButton additionalStyles={{ paddingHorizontal: 25 }} pressButtonAction={nextGuessHandler.bind(this, "higher")}>
                        <Ionicons name="add" size={26} />
                    </PrimaryButton>
                    <PrimaryButton additionalStyles={{ paddingHorizontal: 25 }} pressButtonAction={nextGuessHandler.bind(this, "lower")}>
                        <Ionicons name="remove" size={26} />
                    </PrimaryButton>
                </View>

                <View style={{ marginVertical: 10, width: "100%" }}>
                    {(numberOfRounds === 1) && <Text style={[styles.generalTextStyles, { marginVertical: 14 }]}>
                        {numberOfRounds} guess:
                    </Text>}
                    {(numberOfRounds > 1) && <Text style={[styles.generalTextStyles, { marginVertical: 14 }]}>
                        {numberOfRounds} guesses:
                    </Text>}
                    <FlatList data={guesses} keyExtractor={guess => guess} renderItem={({item}) => (<Text style={[styles.generalTextStyles, { marginVertical: 2 }]} >
                        {item}
                    </Text>)}/>
                </View>

                <View style={{ width: "100%" }}>
                    <Pressable>
                        <Text onPress={clearPickedNumber} style={styles.goBackStyles}>
                            Go back.
                        </Text>
                    </Pressable>
                </View>
                
            </CardContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    screenStyles: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    enteredNumberStyles: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center",
    },
    generalTextStyles: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    },
    goBackStyles: {
        color: Colors.secondary400,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    buttonsContainerStyles: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5
    }
})