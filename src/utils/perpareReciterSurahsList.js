import zeroFill from 'zero-fill';

/**
 * Prepare list of chapters for sepcific reciter
 *
 * @param {Object} reciter
 * @param {Array}  chapters
 * @return {Array} array of formatted chapters for a reciter
 */
export default (reciter, chapters) => {

  var reciter_chapters = [];
  for(var i=0; i<chapters.length; i++) {
     var chapter = {
       id: chapters[i].id,
       path: "https://download.quranicaudio.com/quran/" + reciter.relative_path + zeroFill(3, chapters[i].id) + ".mp3"
     };
     reciter_chapters[i] = chapter;
  }
  
  return reciter_chapters;
}
