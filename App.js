import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import InitialGameScreen from './screens/InitialGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';

export default function App() {
	const [fontsLoaded] = useFonts({
		"bold-font": require("./assets/fonts/bold-font-2023.ttf")
	})

	const [userNumber, setUserNumber] = useState();
	function pickedNumberHandler (enteredNumber) {
		setUserNumber(enteredNumber);
	}

	const [isGameOver, setIsGameOver] = useState(false);
	const [guesses, setGuesses] = useState();
	function gameOver (numberOfGuesses) {
		setIsGameOver(true);
		setGuesses(numberOfGuesses);
	}
	function resetGame () {
		setUserNumber();
		setIsGameOver(false);
	}
    
    const { width, height } = useWindowDimensions();

	if (fontsLoaded) {
		return (
			<>
				<StatusBar style="light" backgroundColor='black' />
				<LinearGradient colors={[Colors.primary400, Colors.secondary400]} style={styles.rootStyles}>
					<ImageBackground imageStyle={{ opacity: 0.4 }} resizeMode="cover" source={require("./assets/images/background.png")} style={styles.imageBackgroundStyles}>
						<SafeAreaView style={[styles.rootStyles, { marginTop: (width > 450) ? 40 : 20 }]}>
							{!userNumber && !isGameOver && <InitialGameScreen setPickedNumber={pickedNumberHandler} />}
							{userNumber && !isGameOver && <GameScreen clearPickedNumber={() => setUserNumber()} enteredNumber={userNumber} gameIsOver={gameOver} />}
							{userNumber && isGameOver && <GameOverScreen numberOfGuesses={guesses} returnToHomeScreen={resetGame} userNumber={userNumber} />}
						</SafeAreaView>
					</ImageBackground>
				</LinearGradient>
			</>
		);
	}
}

const styles = StyleSheet.create({
	rootStyles: {
		flex: 1
	},
	imageBackgroundStyles: {
		flex: 1
	}
});
