import { Content, ListItem, Text } from 'native-base';
import perpareReciterSurahsList from '../utils/perpareReciterSurahsList';

export default (props) => {
  const ListOfChapters = () => [
    props.chapters.map(chapter =>
      <ListItem
        key={chapter.id}
        onPress={() =>
          props.actions.selectChapter({
            reciter: props.reciter,
            chapter: chapter.id
          })}
      >
        <Text>
          {chapter.name.simple}
        </Text>
      </ListItem>
    )
  ];

  return (
    <Content>
      {ListOfChapters()}
    </Content>
  );
};
