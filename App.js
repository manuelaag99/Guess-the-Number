import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import InitialGameScreen from './screens/InitialGameScreen';

export default function App() {
	return (
		<View style={styles.rootStyles}>
			<InitialGameScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	rootStyles: {
		flex: 1,
		backgroundColor: '#eb1',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
