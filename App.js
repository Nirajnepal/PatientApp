import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './app/screens/MainScreen';

export default function App() {
    return <MainScreen/>
}

const styles = StyleSheet.create({
  contagitiner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
