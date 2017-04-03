import { Content, ListItem, Text } from 'native-base';

import sortSurahsByName from '../utils/sortSurahsByName';

export default ({ surahs, actions }) => {
  const sortedSurahs = sortSurahsByName(surahs);
  const ListOfSurahs = () => (
    sortedSurahs.map(({ letter, surahs }) => [
      <ListItem itemDivider><Text>{letter}</Text></ListItem>,
      surahs.map(surah =>
        <ListItem onPress={() => actions.navigate('Surah', { name: surah.name.simple, data: surah })}>
          <Text>{surah.name.simple}</Text>
        </ListItem>)
    ]
));

  return (<Content>{ListOfSurahs()}</Content>);
};
