const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export default (surahs) => {
  const surahsWithLetter = surahs.map(item => ({ ...item, letter: item.name.simple.charAt(0) }));

  return letters.map(letter => ({
    letter,
    surahs: surahsWithLetter.filter(item => item.letter === letter)
  }));
};
