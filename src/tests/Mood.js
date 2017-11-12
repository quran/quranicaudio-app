// import { Content, ListItem, Text } from "native-base";
import { Dimensions, FlatList } from 'react-native';

import styled from 'styled-components/native';
const { height, width } = Dimensions.get('window');

const WIDTH = (width - 2) / 2;
const View = styled.View`
  background: #eceff1;
  flex: 1;
  border: .5px solid #777777;

`;
const Item = styled.TouchableOpacity`
  height: ${WIDTH}px;
  width: ${WIDTH}px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 0.5px solid #777777;
`;

const Text = styled.Text`
  font-size: 24px;
	letter-spacing: -0.2px;
	color: #171616;
`;

const ChapterNumber = styled.Text`
  color: #777;
  background: pink;
`;

export default (props) => {
  const ListOfChapters = () =>
    (<FlatList
      keyExtractor={item => item.id}
      data={props.chapters}
      horizontal={false}
      initialNumToRender={2}
      numColumns={2}
      renderItem={({ item, index }) =>
        (<Item
          key={item.id}
          onPress={() =>
            props.actions.selectChapter({
              reciter: props.reciter,
              chapter: item.id
            })}
        >
          <Text>
            {item.name.simple}
          </Text>
          <ChapterNumber>
           #{item.id}
          </ChapterNumber>
        </Item>)}
    />);

  return (
    <View>
      {ListOfChapters()}
    </View>
  );
};
