import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from 'react'

export function InputAddItem(props:any){
	const [ inputItemValue, setInputItemValue ] = useState('')
	
	function handleItemAdd(){
		if(props.toDoItems.includes(inputItemValue)){
			return Alert.alert(`" ${inputItemValue} " já existe, cadastre uma variação desta tarefa`)
		}
		props.setToDoItems((prevState:any)=>[...prevState, inputItemValue])
		setInputItemValue('')
	}

	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				placeholder="Adicione uma nova tarefa"
				placeholderTextColor="#484848"
				keyboardType="default"		
				onChangeText={text => setInputItemValue(text)}	 
				value={inputItemValue} 
			/>	

			<TouchableOpacity style={styles.button} onPress={()=>{handleItemAdd()}}>
				<Image source={require('./plus.png')}/>
			</TouchableOpacity>	
		</View>
		
	)
}