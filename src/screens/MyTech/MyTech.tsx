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

                <View>
                    <Text>Você ainda não tem tecnologias cadastradas</Text>
                    <Text>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            </View>
        </>
    )
}