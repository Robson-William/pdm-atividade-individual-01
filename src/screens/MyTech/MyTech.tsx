import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function MyTech(){
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Minhas Tecnologias</Text>
            </View>

            <View style={styles.inputBox}>
                <TextInput style={styles.input}></TextInput>
                <Pressable style={styles.inputButton}></Pressable>
            </View>

            <View style={styles.listBody}>
                <View style={styles.subHeader}>
                    <Text>Criadas</Text>
                    <Text>Concluídas</Text>
                </View>

                <View>
                    <Text>Você ainda não tem tecnologias cadastradas Crie tarefas e organize seus itens a fazer</Text>
                </View>
            </View>
        </>
    )
}