import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Tech from "../../components/Tech/Tech";

export default function MyTech(){
    return (
        <>
            <Header />
            <Input />

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

                <Tech />
            </View>
        </>
    )
}