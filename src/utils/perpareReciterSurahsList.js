import zeroFill from 'zero-fill';

/**
 * Prepare list of chapters for sepcific reciter
 *
 * @param {Object} reciter
 * @param {Array}  chapters
 * @return {Array} array of formatted chapters for a reciter
 */
export default (reciter, chapters, chapterId) => {
  const reciterChapters = chapters.map((item, index) => {
    const chapter = {
      id: chapters[index].id,
      path: `https://download.quranicaudio.com/quran/${reciter.relative_path}${zeroFill(3, chapters[index].id)}.mp3`,
      title: chapters[index].name.simple,
      artist: reciter.name,
      songDuration: '17001',
      thumb: 'http://www.assabile.com/media/person/200x256/mishary-rashid-alafasy.png'
    };
    return chapter;
  });

  return {
    chapters: reciterChapters,
    selected_chapter: chapterId
  };
};
