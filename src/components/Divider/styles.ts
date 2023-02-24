import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	divider: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	dividerText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingBottom: 20,
		borderBottomColor: "#333333",
		borderBottomWidth: 1,
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