const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export default (reciters) => {
  const recitersWithLetter = reciters.map(item => ({ ...item, letter: item.name.charAt(0) }));

  return letters.map(letter => ({
    letter,
    reciters: recitersWithLetter.filter(item => item.letter === letter)
  }));
};
