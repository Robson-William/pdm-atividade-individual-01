import { View, Text} from 'react-native';
import styles from './styles';

type Props = {
    text:string
}

export default function Header({text}:Props){
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>{text}</Text>
            </View>
        </>
    )
}