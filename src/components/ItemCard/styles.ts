import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container:{
		width: '100%',
		paddingHorizontal: 12,
		backgroundColor: "#454545",
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	name:{
		flex: 1,
		fontSize: 16,
		color: "#fff",
		marginLeft: 16,
	},
	nameFinished:{
		textDecorationLine:"line-through"
	},
	button:{
		width:56,
		height: 56,
		borderRadius: 10,
		backgroundColor: '#e23c44',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonText:{
		color: '#fdfcfe',
		fontSize: 24,
		fontWeight: 'bold',
	}
})