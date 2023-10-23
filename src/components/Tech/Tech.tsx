import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';

interface Tech {
    id: string,
    content: string,
    isDone: boolean,
    handleRemove: Function,
    handleDone: Function
}

export default function Tech({tech, handleRemove, handleDone}:Tech){
    return (
        <>
            <View style={styles.tech}>
                <Pressable style={styles.techButtonDone} onPress={() => handleDone(tech.id)}></Pressable>
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