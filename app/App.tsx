import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isFontsLoaded] = useFonts({
    GeneralSans400: require('./src/assets/fonts/GeneralSans-Regular.otf'),
    GeneralSans500: require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    GeneralSans600: require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'GeneralSans400' }}>HELLO World!</Text>
      <Text style={{ fontFamily: 'GeneralSans500' }}>HELLO World!</Text>
      <Text style={{ fontFamily: 'GeneralSans600' }}>HELLO World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
