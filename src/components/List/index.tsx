import { FlatList } from "react-native";
import { styles } from "./styles";

export function List(){
	return(
		<FlatList 
			data={participants}
			keyExtractor={item => item}	
			renderItem={({item})=>(
				<Participant 
					key={item}
					name={item} 
					onRemove={()=>{handleParticipantRemove(item)}}
				/>
			)}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={()=>(
				<Text style={styles.listEmptyText}>
					Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
				</Text>
			)}
		/>
	);
}