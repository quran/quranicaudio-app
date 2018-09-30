
export default (reciters = [], section) => {
  const recitersWithLetter = reciters.map(item => ({
    ...item,
    letter: item.name.toUpperCase().charAt(0)
  }));

  return letters.map((letter) => {
    const recitersFiltered = recitersWithLetter
      .filter(item => item.letter === letter)
      .filter(item => item.section_id === Number(section));

    return {
      letter,
      reciters: recitersFiltered,
      hasReciters: recitersFiltered.length > 0
    };
  });
};

const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
