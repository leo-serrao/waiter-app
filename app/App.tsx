import { useFonts } from 'expo-font';
import { Main } from './src/Main';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [FontsLoaded] = useFonts({
    GeneralSans400: require('./src/assets/fonts/GeneralSans-Regular.otf'),
    GeneralSans600: require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    GeneralSans700: require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!FontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='auto' />
      <Main />
    </>
  );
}
