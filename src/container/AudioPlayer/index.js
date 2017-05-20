import React, {Component} from 'react';
import {Image, Text, View, Dimensions, Platform} from 'react-native';
import * as Actions from '../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Video from 'react-native-video';
import Styles from '../../styles';
import * as Utils from '../../utils/audio'; //eslint-disable-line
import {
    ForwardButton,
    BackwardButton,
    PlayButton,
    ShuffleButton,
    VolumeButton,
    DownloadButton, //eslint-disable-line
    SongSlider
} from '../../components/PlayerButtons';
import MusicPlayer from '../../utils/MusicPlayer';
import * as Progress from 'react-native-progress'; //eslint-disable-line
const {width} = Dimensions.get('window');
import {autobind} from 'core-decorators';
import Loader from '../../components/common/Loader';

@autobind
class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        const songs = this.props.navigation.state.params.chapters.chapters;



        this.state = {
            playing: true,
            muted: false,
            shuffle: false,
            sliding: false,
            currentTime: 0,
            songIndex: this.props.navigation.state.params.chapters.selected_chapter -
            1,
            songs
        };
    }

    songImage = '';

    componentDidMount() {

        MusicPlayer.onPlay(() => {
            this.setState({playing: true});
        });

        MusicPlayer.onPause(() => {
            this.setState({playing: false});
        });

        MusicPlayer.onForward(this.goForward);

        MusicPlayer.onBackward(this.goBackward);

        // Set songs for the global state
        this.props.actions.setSongsList(this.state.songs);
        this.props.actions.setSelectedSongIndex(this.state.songIndex);
    }

    // eslint-disable-next-line
    onLoad(params) {
        this.setState({songDuration: params.duration});
        this.setPlayingSong();
    }

    setPlayingSong() {
        const song = this.props.songs[this.props.songIndex];

        MusicPlayer.setNowPlaying({
            title: song.title,
            artwork: song.thumb,
            artist: song.artist,
            duration: song.songDuration
        });
    }

    setTime(params) {
        if (!this.state.sliding) {
            this.setState({currentTime: params.currentTime});
            this.props.actions.setCurrentTime(params.currentTime);
        }
    }

    randomSongIndex() {
        const maxIndex = this.props.songs.length - 1;
        return Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0; //eslint-disable-line
    }

    toggleShuffle() {
        this.setState({shuffle: !this.state.shuffle});
    }

    toggleVolume() {
        this.setState({muted: !this.state.muted});
    }

    togglePlay() {
        this.setState({playing: !this.state.playing});
    }

    onSlidingStart() {
        this.setState({sliding: true});
    }

    onSlidingChange(value) {
        const newPosition = value * this.state.songDuration;
        this.setState({currentTime: newPosition});
        this.props.actions.setCurrentTime(newPosition);
    }

    onSlidingComplete() {
        this.refs.audio.seek(this.props.currentTime); //eslint-disable-line
        this.setState({sliding: false});
    }

    goForward() {
        if (
            this.state.shuffle ||
            this.props.songIndex + 1 !== this.props.songs.length
        ) {
            this.setState({
                songIndex: this.props.shuffle
                    ? this.randomSongIndex()
                    : this.props.songIndex + 1,
                currentTime: 0,
                playing: true
            });
            this.refs.audio.seek(0); //eslint-disable-line

            this.props.actions.setSelectedSongIndex(this.props.songIndex + 1);
        }
    }

    goBackward() {
        if (this.props.currentTime < 3 && this.props.songIndex !== 0) {
            this.setState({
                songIndex: this.props.songIndex - 1,
                currentTime: 0
            });
            this.props.actions.setCurrentTime(0);
            this.props.actions.setSelectedSongIndex(this.props.songIndex - 1);

        } else {
            this.refs.audio.seek(0); //eslint-disable-line
            this.setState({
                currentTime: 0
            });
            this.props.actions.setCurrentTime(0);
        }
    }

    onEnd() {
        this.setState({playing: false});
        this.setState({playing: true});
    }

    renderVideoPlayer() {
        if (this.props.songs[this.props.songIndex]) {
            return (
                <Video
                    source={{uri: this.props.songs[this.props.songIndex].path}}
                    volume={this.state.muted ? 0 : 1.0}
                    muted={false}
                    ref="audio"
                    paused={!this.state.playing}
                    playInBackground={true}
                    onLoad={this.onLoad}
                    onProgress={this.setTime}
                    onEnd={this.onEnd}
                    resizeMode="cover"
                    repeat={false}
                />
            );
        }
        return null;
    }

    renderProgressBar() {
        if (this.props.searchedSongs) {
            const song = this.props.songs[this.props.songIndex];
            return (
                <Progress.Bar
                    progress={this.props.progreses[song.id]}
                    width={width}
                    color="#fff"
                    borderColor="transparent"
                />
            );
        }
        return null;
    }

    render() {

        if(this.props.songs < 1) {
            return <Loader/>;
        }

        let songPercentage;
        if (this.state.songDuration !== undefined) {
            songPercentage = this.state.currentTime / this.state.songDuration;
        } else {
            songPercentage = 0;
        }
        return (
            <View style={Styles.container}>
                {this.renderVideoPlayer()}

                {this.renderProgressBar()}
                <Image
                    style={Styles.songImage}
                    source={{
                        uri: (Platform.OS === 'android' ? 'file://' : '') +
                        this.props.songs[this.props.songIndex].thumb
                    }}
                />

                {this.renderProgressBar()}
                <Text style={Styles.songTitle}>
                    {this.props.songs[this.props.songIndex].title}
                </Text>
                <SongSlider
                    onSlidingStart={this.onSlidingStart}
                    onSlidingComplete={this.onSlidingComplete}
                    onValueChange={this.onSlidingChange}
                    value={songPercentage}
                    songDuration={this.state.songDuration}
                    currentTime={this.props.currentTime}
                />
                <View style={Styles.controls}>
                    <ShuffleButton
                        shuffle={this.state.shuffle}
                        toggleShuffle={this.toggleShuffle}
                        disabled={this.props.search}
                    />
                    <BackwardButton goBackward={this.goBackward}/>
                    <PlayButton
                        togglePlay={this.togglePlay}
                        playing={this.state.playing}
                    />
                    <ForwardButton
                        songs={this.props.songs}
                        shuffle={this.state.shuffle}
                        songIndex={this.props.songIndex}
                        goForward={this.goForward}
                        disabled={this.props.search}
                    />
                    <VolumeButton
                        muted={this.state.muted}
                        toggleVolume={this.toggleVolume}
                    />
                </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

function mapStateToProps(store) {
    return {
        songs: store.songs.songs,
        songIndex: store.songs.songIndex,
        searchResults: store.searchResults,
        progreses: store.progreses,
        currentTime: store.songs.currentTime
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
