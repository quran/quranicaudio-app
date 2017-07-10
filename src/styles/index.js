import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  searchInput: {
    height: 20,
    width: width - 150,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    flex: 1,

  },
  header: {
    marginTop: 0,
    marginBottom: 0,
    width,
  },
  headerClose: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  headerText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 0,
    width: width - 30,
    height: 300
  },
  songTitle: {
    color: 'white',
    fontFamily: 'Helvetica Neue',
    marginBottom: 10,
    marginTop: -20,
    fontSize: 19
  },
  albumTitle: {
    color: '#BBB',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    marginBottom: 10,
  },
  controls: {
    flexDirection: 'row',
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
  shuffle: {
    marginTop: 26,
  },
  volume: {
    marginTop: 26,
  },
  sliderContainer: {
    width: width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    paddingTop: 2,
    fontSize: 14,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    paddingTop: 2,
    fontSize: 14,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 10,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 15,
    height: 15,
    backgroundColor: '#fff',
    borderColor: '#30a935',
    borderRadius: 15 / 2,
    shadowRadius: 2,
    shadowOpacity: 0.35,
    top: 15
  },
  songContainer: {
    width,
    height: 60,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f0f0'
  },
  songView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  songTitleImage: {
    height: 50,
    width: 50
  },
  songTitleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'space-around'
  },
  songArtistText: {
    fontSize: 16,
    color: '#333'
  },
  songTitleText: {
    fontSize: 12,
    color: '#c8c3c3'
  },
  noPaddingHorizontal: {
    paddingHorizontal: 0
  },
  searchInputView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  searchInputContainer: {
    width,
    height: 60
  }
});

export default styles;
