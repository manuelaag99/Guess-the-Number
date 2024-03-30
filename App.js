import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import InitialGameScreen from './screens/InitialGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState(false);

	function pickedNumberHandler (enteredNumber) {
		setUserNumber(enteredNumber);
	}

	return (
		<LinearGradient colors={["#a6a", "#000", "#fb0"]} style={styles.rootStyles}>
			<ImageBackground imageStyle={{ opacity: 0.4 }} resizeMode="cover" source={require("./assets/images/background.png")} style={styles.imageBackgroundStyles}>
				{!userNumber && <InitialGameScreen setPickedNumber={pickedNumberHandler} />}
				{userNumber && <GameScreen clearPickedNumber={() => setUserNumber()} guessedNumber={userNumber} />}
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
