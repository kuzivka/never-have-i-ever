import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainPage } from './components/MainPage';

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
