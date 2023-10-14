import { Pressable, Text, TextInput, View } from "react-native";

export default function MyTech(){
    return (
        <View>
            <View>
                <Text>Minhas Tecnologias</Text>
            </View>

            <View>
                <TextInput></TextInput>
                <Pressable></Pressable>
            </View>

            <View>
                <View>
                    <Text>Criadas</Text>
                    <Text>Concluídas</Text>
                </View>

                <View>
                    <Text>Você ainda não tem tecnologias cadastradas Crie tarefas e organize seus itens a fazer</Text>
                </View>
            </View>
        </View>
    )
}