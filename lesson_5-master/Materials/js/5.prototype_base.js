/*
  Prototypes
*/

 function talk(){
   console.log('Play sound:', this.sound);
 }

 var animal = {
   talk,
   du: 'hiiiii',
   color: 'blue'
  // тоже самое что и talk: talk
 };

 console.log( animal );

 var cat = {
   sound: 'meow'
 };
 Object.setPrototypeOf( cat, animal );
 console.log( cat );

 console.log( cat.du );
 cat.talk();
// console.log( cat ); // Посмотрим что у нас находиться в обьектк cat
//
// var dog = {
//   sound: 'woof'
// };
//
// Object.setPrototypeOf( dog, cat );
// console.log(dog, dog.color);

// dog.talk();