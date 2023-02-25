import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Header } from '../../components/Header';
import { useState } from "react";
import { InputAddItem } from '../../components/InputAddItem';
import { Divider } from '../../components/Divider';
import { List } from '../../components/List';

export default function Home() {
	const [ toDoItems, setToDoItems ] = useState<string[]>([])
	const [ finishedToDoItems, setFinishedToDoItems ] = useState<string[]>([])

	function handleItemCardRemoved(itemName: string){
		Alert.alert("Remover", `Remover a Tarefa ${itemName} ?`, [
			{
				text: "Sim",
				onPress: ()=> setToDoItems((prevState)=>{return prevState.filter(item => item !== itemName)})
			},
			{
				text: "Não",
				style: 'cancel'
			}
		])
	}

	function handleTaskFinish(itemName: any){
		if(finishedToDoItems.includes(itemName)){
			setFinishedToDoItems((prevState)=>{return prevState.filter(item => item !== itemName)})
		} else {
			setFinishedToDoItems((prevState)=>{return [...prevState, itemName]})
		}
	}
	
	return (
		<View style={styles.container}>
			<Header/>

			<InputAddItem toDoItems={toDoItems} setToDoItems={setToDoItems}/>

			<View style={styles.contentContainer}>
					<Divider finishedToDoItems={finishedToDoItems.length} createdItems={toDoItems.length}/>
					<List toDoItems={toDoItems} finishedToDoItems={finishedToDoItems} handleTaskFinish={handleTaskFinish} handleItemCardRemoved={handleItemCardRemoved}/>
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
		justifyContent: 'flex-start',
		paddingHorizontal: 24
		
	},	
});
