import { View, TextInput, Pressable, Image } from 'react-native';
import { useState } from 'react';
import styles from './styles';

type Props = {
    handleAdd: (tech: string) => void
}

export default function Input({handleAdd}:Props){
    const [tech, setTech] = useState('');

    return (
        <>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} onChangeText={tech => setTech(tech)} value={tech} placeholder='Adicione uma nova tecnologia'></TextInput>
                <Pressable 
                    onPress={() => {
                        handleAdd(tech)
                        setTech('')
                    }}
                    style={styles.inputButton}>
                        <Image style={{width: 16, height: 16}}source={require('../../../assets/plus.png')}/>
                </Pressable>
            </View>
        </>
    )
}