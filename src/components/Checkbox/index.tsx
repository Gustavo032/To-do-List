import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export function Checkbox(props:any) {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
		style={[styles.checkboxBase, checked && styles.checkboxChecked]}
		onPress={() => {setChecked(!checked); props.onFinish()}}
	>
      {
		checked && 
		<Ionicons name="checkmark" size={15} color="white" />
	  }
    
	</TouchableOpacity>
  );
}