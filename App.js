import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InitialGameScreen from './screens/InitialGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
	const [userNumber, setUserNumber] = useState(false);

	function pickedNumberHandler (enteredNumber) {
		setUserNumber(enteredNumber);
	}

	return (
		<LinearGradient colors={[Colors.primary400, "#000", Colors.secondary400]} style={styles.rootStyles}>
			<ImageBackground imageStyle={{ opacity: 0.4 }} resizeMode="cover" source={require("./assets/images/background.png")} style={styles.imageBackgroundStyles}>
				<SafeAreaView style={styles.rootStyles}>
					{!userNumber && <InitialGameScreen setPickedNumber={pickedNumberHandler} />}
					{userNumber && <GameScreen clearPickedNumber={() => setUserNumber()} enteredNumber={userNumber} />}
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
