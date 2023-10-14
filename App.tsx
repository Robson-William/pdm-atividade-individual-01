import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './App.theme';

import MyTech from "./src/screens/MyTech/MyTech";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyTech />
    </View>
  );
}