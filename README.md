# QuranicAudio App [![SLACK](http://i.imgur.com/Lk5HsBo.png)](https://quranslack.herokuapp.com)

Our aim is to launch before Ramadan 2017 (Friday, 26 May), therefore an MVP (Minimal Viable Product) approach would suit us quite well. [QuranicAudio.com](https://quranicAudio.com) should always be the reference [implementation](https://github.com/quran/audio.quran.com).

# MVP feature list

 1. Display a list of reciters
    - Should be in sections (see api) 
 2. Display a list of chapters (surahs) for a given Qari
    - Show how long is the chapter
    - Cross promote Quran.com app for reading
    - Shuffle Play
 3. Play a selected chapter for a given reciter
    - Count down as the surah is playing
    - Progress bar
    - Random, Continues, Next, Previous, Play/Pause
 4. Cross Promote Quran.com application for reading

# API

Work in progress documentation

### MP3

A URL has to be constructed and should look as such:

```bash
curl https://download.quranicaudio.com/quran/abdullaah_alee_jaabir_studio/093.mp3
```

  - base url : https://download.quranicaudio.com/quran/
  - relative path : abdullaah_alee_jaabir_studio
  - zero padded chapter/surah number: 093.mp3
  
the Relative path can be found in each reciter response object. A [reference](https://github.com/quran/audio.quran.com/blob/master/src/reducers/audioplayer.js#L40) implemation can be found on our web application: 
```js 
`${AUDIO_URL}/${action.qari.relativePath}${zeroPad(action.surah.id, 3)}.mp3`
```

### Reciter (Qari)

```bash
  curl https://quranicaudio.com/api/qaris/15
```
example result:

```js
 
 {
   "id":55,
   "name":"Al-Hussayni Al-'Azazy (with Children)",
   "arabic_name":"الحسيني العزازي مع اطفال",
   "relative_path":"alhusaynee_al3azazee_with_children/",
   "file_formats":"mp3",
   "section_id":1,
   "home":true,
   "description":null,
   "torrent_filename":"[Quran] Al-Hussayni Al-'Azazy (with Children) [192Kbps].torrent",
   "torrent_info_hash":"2339aa5f47a1d88e5033595b194099c29155c5e2",
   "torrent_seeders":0,
   "torrent_leechers":1
}

```

### List of Reciters (Qaris)

```bash
  curl https://quranicaudio.com/api/qaris
```
example result:

```js
 [
   {
      "id":55,
      "name":"Al-Hussayni Al-'Azazy (with Children)",
      "arabic_name":"الحسيني العزازي مع اطفال",
      "relative_path":"alhusaynee_al3azazee_with_children/",
      "file_formats":"mp3",
      "section_id":1,
      "home":true,
      "description":null,
      "torrent_filename":"[Quran] Al-Hussayni Al-'Azazy (with Children) [192Kbps].torrent",
      "torrent_info_hash":"2339aa5f47a1d88e5033595b194099c29155c5e2",
      "torrent_seeders":0,
      "torrent_leechers":1
   },
   {
      "id":88,
      "name":"Mostafa Ismaeel",
      "arabic_name":"مصطفى إسماعيل",
      "relative_path":"mostafa_ismaeel/",
      "file_formats":"mp3",
      "section_id":1,
      "home":true,
      "description":null,
      "torrent_filename":"[Quran] Mostafa Ismaeel [128Kbps].torrent",
      "torrent_info_hash":"98b7e43b76fbbafd8d017d86557dc009fb266a4c",
      "torrent_seeders":null,
      "torrent_leechers":null
   },
   {
      "id":123,
      "name":"Madinah Taraweeh 1435",
      "arabic_name":null,
      "relative_path":"madinah_1435/",
      "file_formats":"mp3",
      "section_id":2,
      "home":true,
      "description":"This is the Live Recitation from Masjid al-Nabawi, 1435 H./2014 A.D.  Recited by 6 Imams: <a href=\\\"http://quranicaudio.com/quran/8\\\">Ali Abdur-Rahman al-Huthaify</a>, <a href=\\\"http://quranicaudio.com/quran/11\\\">AbdulMuhsin al-Qasim</a>, <a href=\\\"http://quranicaudio.com/quran/43\\\">Salah al-Budair</a>, Abdullah al-Bu'ayjan, Ahmad Hameed, and Husayn aal ash-Shaykh. Special thanks to <a href=\\\"http://www.mazameer.com\\\">Mazameer</a> for this recitation.",
      "torrent_filename":null,
      "torrent_info_hash":null,
      "torrent_seeders":null,
      "torrent_leechers":null
   },
   {
      "id":16,
      "name":"Mahmoud Khaleel Al-Husary",
      "arabic_name":"محمود خليل الحصري",
      "relative_path":"mahmood_khaleel_al-husaree/",
      "file_formats":"mp3",
      "section_id":1,
      "home":false,
      "description":null,
      "torrent_filename":"[Quran] Mahmoud Khalil Al-Husary [128Kbps].torrent",
      "torrent_info_hash":"36e86a71bf8b17a130dfab53bf58622489c1d4f7",
      "torrent_seeders":3,
      "torrent_leechers":1
   }
 ]

```

### Sections 

Each will belong to a segment, such as `Recitations from Haramain Taraweeh` or `Non-Hafs Recitations`

```bash
  curl https://quranicaudio.com/api/sections
```
example result:

```js
 
 [
  {
    "id": 1,
    "name": "Recitations"
  },
  {
    "id": 2,
    "name": "Recitations from Haramain Taraweeh"
  },
  {
    "id": 3,
    "name": "Non-Hafs Recitations"
  },
  {
    "id": 4,
    "name": "Recitations with Translations"
  }
]

```

### Chapter (surah)

Should be used to display the Chapter name and reference for each audio file. 

```bash
  curl https://quranicaudio.com/api/surahs/3
```
example result:

```js
  {
    "id": 3,
    "page": [
      50,
      76
    ],
    "bismillah_pre": true,
    "ayat": 200,
    "name": {
      "complex": "Āli `Imrān",
      "simple": "Ali 'Imran",
      "english": "Family of Imran",
      "arabic": "آل عمران"
    },
    "revelation": {
      "place": "madinah",
      "order": 89
    }
  }
```

### Chapters (surahs)

List of all chapters. We should probably use the new Quran.com Api.

```bash
  curl https://quranicaudio.com/api/surahs
```
example result:

```js
  [{
    "id": 1,
    "page": [
      1,
      1
    ],
    "bismillah_pre": false,
    "ayat": 7,
    "name": {
      "complex": "Al-Fātiĥah",
      "simple": "Al-Fatihah",
      "english": "The Opener",
      "arabic": "الفاتحة"
    },
    "revelation": {
      "place": "makkah",
      "order": 5
    }
  },
  {
    "id": 2,
    "page": [
      2,
      49
    ],
    "bismillah_pre": true,
    "ayat": 286,
    "name": {
      "complex": "Al-Baqarah",
      "simple": "Al-Baqarah",
      "english": "The Cow",
      "arabic": "البقرة"
    },
    "revelation": {
      "place": "madinah",
      "order": 87
    }
  },
  {
    "id": 3,
    "page": [
      50,
      76
    ],
    "bismillah_pre": true,
    "ayat": 200,
    "name": {
      "complex": "Āli `Imrān",
      "simple": "Ali 'Imran",
      "english": "Family of Imran",
      "arabic": "آل عمران"
    },
    "revelation": {
      "place": "madinah",
      "order": 89
    }
  }
  ]
```

### Audio File

List of all audio files and their meta data.

```bash
  curl https://quranicaudio.com/api/audio_files/55
```
example result:

```js
   {
      "qari_id":1,
      "surah_id":43,
      "main_id":85,
      "recitation_id":5,
      "filenum":null,
      "file_name":"043.mp3",
      "extension":"mp3",
      "stream_count":381,
      "download_count":529,
      "format":{
         "size":15659136,
         "bit_rate":128083,
         "duration":978.058625,
         "nb_streams":2,
         "start_time":0,
         "format_name":"mp3",
         "nb_programs":0,
         "probe_score":51,
         "format_long_name":"MP2/3 (MPEG audio layer 2/3)"
      },
      "metadata":{
         "album":"Quran",
         "genre":"Quran",
         "title":"Surat Az-Zukhruf",
         "track":"43/114",
         "artist":"AbdulAzeez al-Ahmad"
      },
      "qari":{
         "id":1,
         "name":"Abdullah Awad al-Juhani",
         "arabic_name":"عبدالله عواد الجهني",
         "relative_path":"abdullaah_3awwaad_al-juhaynee/",
         "file_formats":"mp3",
         "section_id":1,
         "home":true,
         "description":null,
         "torrent_filename":"[Quran] Abdullah Awad al-Juhani [127Kbps - 128Kbps].torrent",
         "torrent_info_hash":"b3f798af9d7c913a7ffa9c278a0299d5d4ef6780",
         "torrent_seeders":2,
         "torrent_leechers":2
      }
   },
   
]
```

### Audio Files

List of all audio files and their meta data.

```bash
  curl https://quranicaudio.com/api/audio_files
```
example result:

```js
  [
   {
      "qari_id":1,
      "surah_id":43,
      "main_id":85,
      "recitation_id":5,
      "filenum":null,
      "file_name":"043.mp3",
      "extension":"mp3",
      "stream_count":381,
      "download_count":529,
      "format":{
         "size":15659136,
         "bit_rate":128083,
         "duration":978.058625,
         "nb_streams":2,
         "start_time":0,
         "format_name":"mp3",
         "nb_programs":0,
         "probe_score":51,
         "format_long_name":"MP2/3 (MPEG audio layer 2/3)"
      },
      "metadata":{
         "album":"Quran",
         "genre":"Quran",
         "title":"Surat Az-Zukhruf",
         "track":"43/114",
         "artist":"AbdulAzeez al-Ahmad"
      },
      "qari":{
         "id":1,
         "name":"Abdullah Awad al-Juhani",
         "arabic_name":"عبدالله عواد الجهني",
         "relative_path":"abdullaah_3awwaad_al-juhaynee/",
         "file_formats":"mp3",
         "section_id":1,
         "home":true,
         "description":null,
         "torrent_filename":"[Quran] Abdullah Awad al-Juhani [127Kbps - 128Kbps].torrent",
         "torrent_info_hash":"b3f798af9d7c913a7ffa9c278a0299d5d4ef6780",
         "torrent_seeders":2,
         "torrent_leechers":2
      }
   },
   {
      "qari_id":1,
      "surah_id":35,
      "main_id":69,
      "recitation_id":5,
      "filenum":null,
      "file_name":"035.mp3",
      "extension":"mp3",
      "stream_count":413,
      "download_count":590,
      "format":{
         "size":13254784,
         "bit_rate":128100,
         "duration":827.776189,
         "nb_streams":2,
         "start_time":0,
         "format_name":"mp3",
         "nb_programs":0,
         "probe_score":51,
         "format_long_name":"MP2/3 (MPEG audio layer 2/3)"
      },
      "metadata":{
         "album":"Quran",
         "genre":"Quran",
         "title":"Surat Fatir",
         "track":"35/114",
         "artist":"AbdulAzeez al-Ahmad"
      },
      "qari":{
         "id":1,
         "name":"Abdullah Awad al-Juhani",
         "arabic_name":"عبدالله عواد الجهني",
         "relative_path":"abdullaah_3awwaad_al-juhaynee/",
         "file_formats":"mp3",
         "section_id":1,
         "home":true,
         "description":null,
         "torrent_filename":"[Quran] Abdullah Awad al-Juhani [127Kbps - 128Kbps].torrent",
         "torrent_info_hash":"b3f798af9d7c913a7ffa9c278a0299d5d4ef6780",
         "torrent_seeders":2,
         "torrent_leechers":2
      }
   }
]
```

# Addition recitation by the same reciter:

Soon!




## How to contribute
We trust that you will not copy this idea/project, this is at the end for the sake of Allah and we all have good intentions while working with this project. But we must stress that copying the code/project is unacceptable.

Read the [contributing] section before creating an issue.

### Tech Stack

The Quran team is invested in the React eco-system and we want to keep the stack simple, and close to our other sister projects. 

### Core
- React/React Native
- Redux (maybe Redux-saga)
- React-navigation
- Font Awesome

# UI

Many thanks to [Ahmad Galal](http://ahmedgalal.com/) for the amazing UI he has contributed. 

![home 2](https://cloud.githubusercontent.com/assets/2606228/24082904/17b1c05c-0cc5-11e7-8805-ebb0b65cc4d4.png)
![play](https://cloud.githubusercontent.com/assets/2606228/24082905/17c7a30e-0cc5-11e7-898a-836b84b9eede.png)
![reciters list](https://cloud.githubusercontent.com/assets/2606228/24082906/17d4be22-0cc5-11e7-990b-744af3442bf3.png)

# Useful links:

https://github.com/quran/audio.quran.com
https://github.com/quran/quran.com-frontend
https://quranicaudio.com/api


#Native-base:

Eject themes:
```bash
  node node_modules/native-base/ejectTheme.js
```

#Sentry:

For Sentry to work you need to have the sentry.properties file locally in both the android and ios directories, to get these files generated make sure you are logged in on sentry in your default browser with an account that have access to Sentry account for Quranicaudio and then run these commands:
```bash
$ react-native unlink react-native-sentry
$ react-native link react-native-sentry
```