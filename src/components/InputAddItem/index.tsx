import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from 'react'

export function InputAddItem(){
	const [ inputItem, setInputItem ] = useState('')
	
	function handleItemAdd(){

	}

	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				placeholder="Adicione uma nova tarefa"
				placeholderTextColor="#484848"
				keyboardType="default"		
				onChangeText={text => setInputItem(text)}	 
				value={inputItem} 
			/>	

			<TouchableOpacity style={styles.button} onPress={handleItemAdd}>
				<Image source={require('./plus.png')}/>
			</TouchableOpacity>	
		</View>
		
	)
}