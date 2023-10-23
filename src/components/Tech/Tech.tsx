import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';

export default function Tech({tech}){
    return (
        <>
            <View style={styles.tech}>
                <Pressable style={styles.techButtonDone}></Pressable>
                <Text style={styles.techContent}>
                    {tech.content}
                </Text>
                <Pressable>
                    <Image style={{width: 12, height: 14}} source={require('../../../assets/trash.png')} />
                </Pressable>
            </View>
        </>
    )
}