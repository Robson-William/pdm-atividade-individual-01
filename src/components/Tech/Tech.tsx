import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Tech {
    id: string,
    content: string,
    isDone: boolean,
    handleRemove: (id: string) => void,
    handleDone: (id: string) => void
}

export default function Tech({tech, handleRemove, handleDone}:Tech){
    return (
        <>
            <View style={styles.tech}>
                <BouncyCheckbox fillColor='#5E60CE' isChecked={tech.isDone} onPress={() => handleDone(tech.id)} />
                <Text style={[styles.techContent, tech.isDone ? styles.checked : null]}>
                    {tech.content}
                </Text>
                <Pressable onPress={() => handleRemove(tech.id)}>
                    <Image style={{width: 12, height: 14}} source={require('../../../assets/trash.png')} />
                </Pressable>
            </View>
        </>
    )
}