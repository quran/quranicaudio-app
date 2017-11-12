const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export default (chapters) => {
  const chaptersWithLetter = chapters.map(item => ({ ...item, letter: item.name.charAt(0) }));

  return letters.map(letter => ({
    letter,
    chapters: chaptersWithLetter.filter(item => item.letter === letter)
  }));
};
