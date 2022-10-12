import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';


function randomWord(){
    let playerWord = faker.random.word();
    let undercoverWord = faker.random.word();

    return {
        'playerWord': playerWord,
        'undercoverWord': undercoverWord
      };
}

randomWord()    

