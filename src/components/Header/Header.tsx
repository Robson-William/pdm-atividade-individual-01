import { View, Text} from 'react-native';
import styles from './styles';

export default function Header(){
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Minhas Tecnologias</Text>
            </View>
        </>
    )
}