import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from 'react';
import { Checkbox } from "../Checkbox";

interface ItemCardProps {
	name: string;
	finishedToDoItems: string[];
	onFinish: ()=>void;
	onRemove: ()=>void;
}

export function ItemCard({name, onRemove, finishedToDoItems, onFinish}:ItemCardProps) {
	const isInclude = finishedToDoItems.includes(name)

	return(
		<View style={styles.container}>
			
			<Checkbox onFinish={onFinish} />
			
			<Text style={[styles.name, isInclude && styles.nameFinished]} >
				{name}
			</Text>

			<TouchableOpacity style={{height:64, justifyContent: 'center' }} onPress={onRemove}>
				<Image source={require('../../../public/Layer2.png')} style={{ maxWidth: 32, maxHeight: 32}}/>
			</TouchableOpacity>	
		</View>
	)
}