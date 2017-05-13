import MusicControl from 'react-native-music-control';

/**
 * @author Alaa Attya <alaa.attya91@gmail.com>
 */
export default class MusicPlayer {

    /**
	 * @author Alaa Attya <alaa.attya91@gmail.com>
     */
	constructor() {
		this.instance = null;
	}

    /**
	 * Getting instance of Music player (uses singleton pattern)
	 *
	 * @author Alaa Attya <alaa.attya91@gmail.com>
     */
	static getInstance() {
		if(this.instance == null) {
			this.instance = MusicPlayer.initializeMusicPlayer();
		}

		return this.instance;
	}

    /**
	 * Initialize music player object
	 *
	 * @author Alaa Attya <alaa.attya91@gmail.com>
     */
	static initializeMusicPlayer() {
        MusicControl.enableControl('play', true);
        MusicControl.enableControl('pause', true);
        MusicControl.enableControl('nextTrack', true);
        MusicControl.enableControl('previousTrack', true);
        MusicControl.enableControl('seekForward', false);
        MusicControl.enableControl('seekBackward', false);
        MusicControl.enableBackgroundMode(true);

        return MusicControl;
	}

    /**
	 * Handle music play
	 *
     * @param 	callback
	 * @return 	void
	 *
	 * @author Alaa Attya <alaa.attya91@gmail.com>
     */
	static onPlay(callback) {
        this.getInstance().on('play', () => {
            callback();
        });
	}

    /**
	 * Handle player pause
	 *
     * @param 	callback
	 * @return 	void
	 *
	 * @author Alaa Attya <alaa.attya91@gmail.com>
     */
	static onPause(callback) {
        this.getInstance().on('pause', () => {
            callback();
        });
	}

    /**
	 * Handle player next track
	 *
     * @param 	callback
	 * @return 	void
	 *
	 * @author Alaa Attya <alaa.attya91@gmail.com>
     */
	static onForward(callback) {
        this.getInstance().on('nextTrack', () => {
            callback();
        });
	}

    /**
	 * Handle player previous track
	 *
     * @param 	callback
	 * @return 	void
	 *
	 * @author Alaa Attya <alaa.attya91@gmail.com>
     */
	static onBackward(callback) {
        this.getInstance().on('previousTrack', () => {
            callback();
        });
	}

    /**
	 * Set now playing
	 *
     * @param 	song
	 * @return 	void
	 *
	 * @author Alaa Attya <alaa.attya91@gmail.com>
     */
	static setNowPlaying(song) {
		this.getInstance().setNowPlaying({
            title: song.title,
            artwork: song.thumb,
            artist: song.artist,
            duration: song.songDuration
        });
	}
}