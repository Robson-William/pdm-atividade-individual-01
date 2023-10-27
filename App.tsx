import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold } from "@expo-google-fonts/inter";

import styles from './App.theme';

import MyTech from "./src/screens/MyTech/MyTech";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
})

  
  if(!fontsLoaded){
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyTech />
    </View>
  );
}