import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	list:{
		marginTop: 20,
	},
	
	listEmpty:{
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
		justifyContent: 'space-between',
		paddingVertical: 48,
		borderTopColor: "#333333",
		borderTopWidth: 1,	
	},

	listEmptyIcon:{
		width: 56,
		height: 56
	},
	
	listEmptyTexts:{
		flex: 1,
		marginTop: 16,
	},
	
	listEmptyText:{
		color: '#808080',
		alignSelf: 'center',
		fontSize: 14,
		lineHeight: 19.6
	},
	
	listEmptyTextBold:{
		color: '#808080',
		alignSelf: 'center',
		fontWeight: "bold",
		fontSize: 14,
		lineHeight: 19.6
	}
}) 