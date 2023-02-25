import { Text, View } from "react-native";
import { styles } from "./styles";

export function Divider(props:any){
	return(
		<View style={styles.divider}>
			<View style={styles.dividerText}>
				<View style={styles.dividerTextContent} >
					<Text style={{color:"#4EA8DE"}}>Criadas</Text>
					<Text style={styles.dividerTextContentIcon}>{props.createdItems}</Text>
				</View>

				<View style={styles.dividerTextContent} >
					<Text style={{color:"#8284FA"}}>Concluídas</Text>
					<Text style={styles.dividerTextContentIcon}>{props.finishedToDoItems}</Text>
				</View>
			</View>
		</View>
	);
}