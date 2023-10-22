import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function MyTech(){
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Minhas Tecnologias</Text>
            </View>

            <View style={styles.inputBox}>
                <TextInput style={styles.input}></TextInput>
                <Pressable style={styles.inputButton}><Image source={require('../../../assets/plus.png')}/></Pressable>
            </View>

            <View style={styles.listBody}>
                <View style={styles.subHeader}>
                    <View style={styles.subHeaderSpan}>
                        <Text style={styles.subHeaderText}>Criadas</Text>
                        <View style={styles.counter}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View style={styles.subHeaderSpan}>
                        <Text style={[styles.subHeaderText, {color: '#8284FA'}]}>Concluídas</Text>
                        <View style={styles.counter}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.warningMessage}>
                    <Text style={[styles.warningMessageText, {fontWeight: '700'}]}>Você ainda não tem tecnologias cadastradas</Text>
                    <Text style={styles.warningMessageText}>Crie tarefas e organize seus itens a fazer</Text>
                </View>

                <View style={styles.tech}>
                    <Pressable style={styles.techButtonDone}></Pressable>
                    <Text style={styles.techContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat dolor unde enim reiciendis. Harum magni sapiente accusantium asperiores placeat voluptatum, tenetur officia modi cupiditate quam laboriosam possimus ratione quibusdam.</Text>
                    <Pressable style={styles.techButtonDone}></Pressable>
                </View>
            </View>
        </>
    )
}