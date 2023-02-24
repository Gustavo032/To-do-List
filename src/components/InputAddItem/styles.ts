import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	form:{
		width: "100%",
		flexDirection: 'row',
		marginTop: -36,
		marginBottom: 42,
		paddingHorizontal: 24
	},

	button:{
		width:56,
		height: 56,
		borderRadius: 10,
		backgroundColor: '#1E6F9F',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonText:{
		color: '#fdfcfe',
		fontSize: 24,
		fontWeight: 'bold',
	},
	
	input:{
		flex: 1,
		marginRight: 12,
		height: 56,	
		backgroundColor: "#262626",
		borderRadius: 10,
		color: '#fdfcfe',
		padding: 16,
		fontSize: 16,
	},

})