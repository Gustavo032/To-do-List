import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Header } from './src/components/Header/';
import { useState } from "react";
import { InputAddItem } from './src/components/InputAddItem';
import { Divider } from './src/components/Divider';

export default function App() {
	return (
	<View style={styles.container}>
		<Header/>

		<InputAddItem/>
		<View style={styles.contentContainer}>
			<Divider/>
			
		</View>
	</View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1A1A1A',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	contentContainer:{
		flex: 1,
	},	
});
