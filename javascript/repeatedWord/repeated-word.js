'use strict';

function repeatedWord(str){
  const words = str.split(/[\s,]+/);

  let arr = [];

  for(let i = 0; i < words.length;i++){

    let word = words[i].toLowerCase();
    const ifExists = arr.includes(word);

    if(ifExists){
      return word;
    }else{
      arr.push(word);
    }
  }
  return 'There is No repeated words';
}

module.exports= repeatedWord;