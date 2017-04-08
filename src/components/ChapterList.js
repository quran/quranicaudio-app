import { Content, ListItem } from 'native-base';
import { Text, StyleSheet, View } from 'react-native';
import formatSeconds from '../utils/formatSeconds';

export default ({ chapters, actions, search, files }) => {
  const searchResults = chapters.filter(chapter => chapter.name.simple.includes(search));

  const ListOfChapters = () => [
    searchResults.map(chapter =>
      <ListItem
        key={chapter.id}
        onPress={() => console.warn('TRIGGER PLAYER of')}
      >
        <View style={styles.content}>
          <Text style={styles.text}>{chapter.name.simple}</Text>
        </View>
        <View style={styles.meta}>
          {files[chapter.id] && <Text style={styles.text}>{formatSeconds(files[chapter.id].format.duration)}</Text>}
        </View>

      </ListItem>)
  ];

  return (<Content>{ListOfChapters()}</Content>);
};


const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  meta: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.2
  }
});

