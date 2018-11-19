/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.

    Например:
      encryptCesar('Word', 3);
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1('Sdwq', 3);
      decryptCesar1(...)
      ...
      decryptCesar5(...)
*/

function Encryptor(word,step){
    var wordInChar =  [],
        newArr = [],
        newLitera = [],
        newWord ;
    for(i = 0;i < word.length;i++) {
        wordInChar[i] = word.charCodeAt(i);
       // console.log(wordInChar[i]);
    }
   // console.log(wordInChar);
    wordInChar.forEach(function(item,i){
        newArr[i] = item - step;
        newLitera[i] = String.fromCharCode(newArr[i]);
    })
    newWord = newLitera.join("");
    console.log(newWord);
}


function Decryptor(step,word){
    var wordInChar =  [],
        newArr = [],
        newLitera = [],
        newWord ;
    for(i = 0;i < word.length;i++) {
        wordInChar[i] = word.charCodeAt(i);
       // console.log(wordInChar[i]);
    }
   // console.log(wordInChar);
    wordInChar.forEach(function(item,i){
        newArr[i] = item + step;
        newLitera[i] = String.fromCharCode(newArr[i]);
    })
    newWord = newLitera.join("");
    console.log(newWord);
}
var bindEnc = Encryptor.bind(null,"word");
var bindEnc2 = Encryptor.bind(null,"orange");
var bindEnc3 = Encryptor.bind(null,"RECENTLY");
var bindDe = Decryptor.bind(null,3);
var bindDe2 = Decryptor.bind(null,4);
var bindDe3 = Decryptor.bind(null,2);

window.addEventListener("load",()=>{
    bindEnc(3);bindDe("tloa");bindEnc2(4);bindDe2("kn]jca");
});