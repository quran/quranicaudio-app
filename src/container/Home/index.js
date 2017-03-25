import { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

// components
import AudioPlayer from '../../components/AudioPlayer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { Container, Content, ListItem, Text, Spinner } from 'native-base';
import { baseHeaderStyle } from 'styles/variables';
import formatQarisByLetter from '../../utils/sortNames';

export class Home extends Component {
  static navigationOptions = {
    title: 'QuranicAudio',
    header: ({ state, setParams }, defaultHeader) => ({
      ...defaultHeader,
      ...baseHeaderStyle
    })
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.getReciters();
  }

  render() {
    const { actions, main, navigation, reciters } = this.props;
    const { navigate } = navigation;

    if (reciters.reciters.length < 1) return <View style={{ flex: 1 }}><Spinner color="#13a5ae" /></View>;

    const sortedQaris = formatQarisByLetter(reciters.reciters);
    return (
      <Container>
        <Content>
          {
            sortedQaris.map(item => [
              <ListItem itemDivider>
                <Text>{item.letter}</Text>
              </ListItem>,
              item.qaris.map(qari => <ListItem onPress={() => navigate('Chapters', { name: qari.name, data: qari })}>
                <Text>{qari.name}</Text>
              </ListItem>)])
        }
        </Content>

      </Container>
    );

    // return (
    //   <View style={{ flex: 1 }}>
    //     <Content>
    // {
    //   reciters.reciters.map(item => (
    //     <ListItem
    //       key={item.id}
    //       title={item.name}
    //       leftIcon={{ name: item.icon }}
    //       onPress={() => navigate('Chapters', { name: item.name, data: item })}
    //     />
    //   ))
    // }
    //     </Content>
    //     <AudioPlayer style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }} />
    //   </View>
    // );
  }
}


Home.propTypes = {
  actions: PropTypes.object.isRequired,
  main: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    reciters: state.reciters,
    main: state.main
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  listStyle: {
    flex: 1,
    width: '100%'
  }
});
// sortedQaris.qaris.map(item => {<ListItem itemDivider>
              // <Text>{item.letter}</Text></ListItem>})
        // {
        //   sortedQaris.map(item => (
        //     <Content>
        //       <ListItem itemDivider>
        //         <Text>A</Text>
        //       </ListItem>
        //       <ListItem
        //         key={item.id} onPress={() => navigate('Chapters', { name: item.name, data: item })}
        //       ><Text>{item.letter}</Text></ListItem>
        //     </Content>
        //   ))
        // }
