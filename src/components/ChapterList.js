import { Content, ListItem, Text } from 'native-base';
import perpareReciterSurahsList from '../utils/perpareReciterSurahsList';

export default (props) => {

  const ListOfChapters = () => [
    props.chapters.map(chapter =>
      <ListItem key={chapter.id} onPress={() => props.actions.navigate('AudioPlayer', { chapters: perpareReciterSurahsList(props.reciter, props.chapters) })}>
        <Text>{chapter.name.simple}</Text>
      </ListItem>)
  ];

  return (<Content>{ListOfChapters()}</Content>);
};
