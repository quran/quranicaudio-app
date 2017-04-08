import { Content, ListItem } from 'native-base';
import { StyleSheet, Text } from 'react-native';

import formatRecitersByLetter from '../utils/sortNames';

export default (props) => {
  const ListOfReciters = () => (
    formatRecitersByLetter(props.reciters).map(({ letter, reciters }) => [
      <ListItem itemDivider><Text>{letter}</Text></ListItem>,
      reciters.map(reciter =>
        <ListItem onPress={() => props.actions.navigate('Chapters', { name: reciter.name, data: reciter })}>
          <Text style={styles.text}>{reciter.name}</Text>
        </ListItem>)
    ]
    ));

  return (<Content>{ListOfReciters()}</Content>);
};


const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    letterSpacing: 0.2
  }
});
