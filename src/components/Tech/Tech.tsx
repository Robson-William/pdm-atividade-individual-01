import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';

export default function Tech(){
    return (
        <>
            <View style={styles.tech}>
                <Pressable style={styles.techButtonDone}></Pressable>
                <Text style={styles.techContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat dolor unde enim reiciendis. Harum magni sapiente accusantium asperiores placeat voluptatum, tenetur officia modi cupiditate quam laboriosam possimus ratione quibusdam.</Text>
                <Pressable>
                    <Image style={{width: 12, height: 14}} source={require('../../../assets/trash.png')} />
                </Pressable>
            </View>
        </>
    )
}