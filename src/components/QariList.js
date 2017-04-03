import { Content, ListItem, Text } from 'native-base';

import formatQarisByLetter from '../utils/sortNames';

export default ({ reciters, actions }) => {
  const sortedQaris = formatQarisByLetter(reciters);
  const ListOfQaris = () => (
    sortedQaris.map(({ letter, qaris }) => [
      <ListItem itemDivider><Text>{letter}</Text></ListItem>,
      qaris.map(qari =>
        <ListItem onPress={() => actions.navigate('Surahs', { name: qari.name, data: qari })}>
          <Text>{qari.name}</Text>
        </ListItem>)
    ]
));

  return (<Content>{ListOfQaris()}</Content>);
};
