import { View, StyleSheet} from 'react-native';

import Pegar from './Info';
import Brasil from './Olimpiada1';
import China from './Olimpiada2';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Brasil nome="Brasil" ouro="0" prata="3" bronze="5"/>
      <China nome="China" ouro="2" prata="2" bronze="6"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }


});
