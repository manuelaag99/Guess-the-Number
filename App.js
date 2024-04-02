import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InitialGameScreen from './screens/InitialGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState();

	function pickedNumberHandler (enteredNumber) {
		setUserNumber(enteredNumber);
	}

	const [isGameOver, setIsGameOver] = useState(false);
	function resetGame () {
		setUserNumber();
		setIsGameOver(false);
	}

	return (
		<LinearGradient colors={[Colors.primary400, Colors.secondary400]} style={styles.rootStyles}>
			<ImageBackground imageStyle={{ opacity: 0.4 }} resizeMode="cover" source={require("./assets/images/background.png")} style={styles.imageBackgroundStyles}>
				<SafeAreaView style={styles.rootStyles}>
					{!userNumber && !isGameOver && <InitialGameScreen setPickedNumber={pickedNumberHandler} />}
					{userNumber && !isGameOver && <GameScreen clearPickedNumber={() => setUserNumber()} enteredNumber={userNumber} gameIsOver={() => setIsGameOver(true)} />}
					{userNumber && isGameOver && <GameOverScreen returnToHomeScreen={resetGame} />}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootStyles: {
		flex: 1
	},
	imageBackgroundStyles: {
		flex: 1
	}
});
