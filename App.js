import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import InitialGameScreen from './screens/InitialGameScreen';
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
	return (
		<LinearGradient colors={["#a6a", "#000", "#fb0"]} style={styles.rootStyles}>
			<ImageBackground imageStyle={{ opacity: 0.4 }} style={styles.rootStyles} source={require("./assets/images/background.png")} resizeMode="cover">
				<InitialGameScreen />
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootStyles: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
