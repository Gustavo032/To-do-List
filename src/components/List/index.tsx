import { FlatList, Image, Text, View } from "react-native";
import { ItemCard } from "../../components/ItemCard";
import { styles } from "./styles";

export function List(props:any){
	
	return(

			<FlatList 
				style={styles.list}
				data={props.toDoItems}
				keyExtractor={item => item}	
				renderItem={({item})=>(
					<ItemCard
						key={item}
						name={item} 
						onRemove={()=>{props.handleItemCardRemoved(item)}}
						onFinish={()=>{props.handleTaskFinish(item)}}
						finishedToDoItems={props.finishedToDoItems}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={()=>(
					<View style={ styles.listEmpty }>
						<Image style={ styles.listEmptyIcon } source={require('../../../public/Clipboard.png')}/>

						<View style={ styles.listEmptyTexts }>
							<Text style={ styles.listEmptyTextBold }>
								Você ainda não tem tarefas cadastradas
							</Text>
							<Text style={ styles.listEmptyText }>
								Crie tarefas e organize seus itens a fazer
							</Text>
						</View>
					</View>
				)}
			/>

	);
}