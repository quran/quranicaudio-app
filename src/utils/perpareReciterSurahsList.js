import zeroFill from 'zero-fill';

/**
 * Prepare list of chapters for sepcific reciter
 *
 * @param {Object} reciter
 * @param {Array}  chapters
 * @return {Array} array of formatted chapters for a reciter
 */
export default (reciter, chapters, chapterId) => {
  const reciterChapters = chapters.map((item, index) => ({
    id: item.id,
    path: `https://download.quranicaudio.com/quran/${reciter.relative_path}${zeroFill.call(this, 3, item.id)}.mp3`,
    title: item.name.simple,
    artist: reciter.name,
  }));

  return {
    chapters: reciterChapters,
    selectedChapter: chapterId,
    reciter: reciter.name
  };
};
