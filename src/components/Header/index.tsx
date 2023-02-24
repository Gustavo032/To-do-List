import { Image, View } from "react-native";
import { styles } from "./styles";

export function Header(){
	return(
		<View style={styles.header}>
			<Image style={styles.headerLogo} source={require('../../../public/Logo.png')}/>
		</View>
	);
}