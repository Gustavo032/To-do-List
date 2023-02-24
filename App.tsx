import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Header } from './src/components/Header/';
import { useState } from "react";
import { InputAddItem } from './src/components/InputAddItem';

export default function App() {
	return (
	<View style={styles.container}>
		<Header/>

		<InputAddItem/>
		<View style={styles.contentContainer}>
			<View style={styles.divider}>
				<View style={styles.dividerText}>
					<View style={{flexDirection: 'row', }}>
						<Text style={{color:"#4EA8DE"}}>Criadas</Text>
						<Text> Icon</Text>
					</View>

					<View style={{flexDirection: 'row', }}>
						<Text style={{color:"#8284FA"}}>Concluídas</Text>
					</View>
				</View>
			</View>
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
	divider: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	dividerText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingBottom: 20,
		borderBottomColor: "#333333",
		borderBottomWidth: 1,
		alignSelf: 'flex-start'
	},
	lastDividerText:{
		alignSelf: 'flex-end'
	}
});
