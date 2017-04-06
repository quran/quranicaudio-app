import { Content, ListItem, Text } from 'native-base';

export default ({ chapters, actions }) => {
  const ListOfChapters = () => [
    chapters.map(chapter =>
      <ListItem key={chapter.id} onPress={() => console.warn(`TRIGGER PLAYER of${chapter.name.simple}`)}>
        <Text>{chapter.name.simple}</Text>
      </ListItem>)
  ];

  return (<Content>{ListOfChapters()}</Content>);
};
