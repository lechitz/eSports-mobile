import { View , Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCards } from '../../components/GameCards';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title="Encontro o seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList 
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCards
            data = {item}
            />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

      

    </View>
  );
}