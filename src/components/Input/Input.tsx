import { View, TextInput, Pressable, Image } from 'react-native';
import styles from './styles';

export default function Input(){
    return (
        <>
            <View style={styles.inputBox}>
                <TextInput style={styles.input}></TextInput>
                <Pressable style={styles.inputButton}><Image source={require('../../../assets/plus.png')}/></Pressable>
            </View>
        </>
    )
}