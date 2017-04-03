import { Content, ListItem, Text } from 'native-base';
import formatRecitersByLetter from '../utils/sortNames';

export default (props) => {
  const ListOfReciters = () => (
    formatRecitersByLetter(props.reciters).map(({ letter, reciters }) => [
      <ListItem itemDivider><Text>{letter}</Text></ListItem>,
      reciters.map(reciter =>
        <ListItem onPress={() => props.actions.navigate('Chapters', { name: reciter.name, data: reciter })}>
          <Text>{reciter.name}</Text>
        </ListItem>)
    ]
    ));

  return (<Content>{ListOfReciters()}</Content>);
};
