import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	divider: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	dividerText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignSelf: 'flex-start'
	},
	dividerTextContent: {
		flexDirection: 'row', 
		alignItems:'center', 
		height: 19
	},
	dividerTextContentIcon: {
		backgroundColor: "#333333", 
		borderRadius: 10, 
		marginLeft: 8, 
		color: "#fff", 
		paddingVertical: 2, 
		paddingHorizontal: 8
	}
})