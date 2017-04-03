import { Content, ListItem, Text } from 'native-base';

import sortChaptersByNames from '../utils/sortChaptersByNames';

export default ({ chapters, actions }) => {
  const sortedChapters = sortChaptersByNames(chapters);
  const ListOfChapters = () => (
    sortedChapters.map(({ letter, chapters }) => [
      <ListItem itemDivider><Text>{letter}</Text></ListItem>,
      chapters.map(chapter =>
        <ListItem onPress={() => actions.navigate('Chapter', { name: chapter.name, data: chapter })}>
          <Text>{chapter.name}</Text>
        </ListItem>)
    ]
));

  return (<Content>{ListOfChapters()}</Content>);
};
