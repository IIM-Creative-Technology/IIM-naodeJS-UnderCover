
/**
 * @name getUndercoverWord
 * @description  this function generate a random word from the random-words package
 * @returns {string} a random word
 *
 */

export const getUndercoverWord = async () => {
  const randomWords = require('random-words');
  const randomWord = randomWords();

  return randomWord;
}

/**
 * @name getCivilsWord
 * @description  this function generate a random word from the random-words package
 * @returns {string} a random word
 *
 */

export const getCivilsWord = async () => {

  const undercoverWord = await getUndercoverWord();

  const datamuse = require('datamuse');
  const civilsWord = datamuse.request('words?rel_trg=' + undercoverWord)
    .then((json: any) => {
      return json;
    })

  return civilsWord;
}
getUndercoverWord()

module.exports = getUndercoverWord, getCivilsWord;


