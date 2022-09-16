import { StatusBar } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar 
      
        barStyle="light-content" //Deixa a status bar visível relativo ao fundo
        backgroundColor="transparent"

        translucent //Deixa a status bar sem uma cor de fundo
      
      />
      {fontsLoaded ? <Home /> : <Loading />}


    </Background>
  );
}