import { FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import { useState} from 'react';

import { v4 as uuidv4 } from 'uuid';

import styles from "./styles";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Tech from "../../components/Tech/Tech";

const mockList = [
    {id: uuidv4(), content: 'Teste', isDone: false},
    {id: uuidv4(), content: 'Teste 02', isDone: true}
];

export default function MyTech(){
    const [list, setList] = useState(mockList);

    function addTech(tech:string){
        const newList = list.concat({id: uuidv4(), content: tech, isDone: false});

        setList(newList)
    }

    function removeTech(id: string){
        const newList = list.filter((tech) => tech.id !== id);

        setList(newList);
    }

    function checkDone(id: string){
        const newList = list.map((tech) => {
            if(tech.id === id){
                const newTech = {
                    ...tech,
                    isDone: !tech.isDone
                }

                return newTech;
            }

            return tech;
        })

        setList(newList)
    }

    return (
        <>
            <Header />
            <Input handleAdd={addTech}/>

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

                <FlatList
                    data={list}
                    renderItem={({item}) => <Tech tech={item} handleRemove={removeTech} handleDone={checkDone} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}