/*
  Arrays Methods
  Docs:
    Array.isArray: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    * Array.sort: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    Array.forEach: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    Array.map: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    * Array.indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    * Array.find: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    * Array.findIndex: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    Array.filter: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    * Array.reverse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    Array.reduce: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    Array.some: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    Array.every: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every

*/

  const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];
  const NOT_ARRAY = "";

  // Array.isArray();
  // -- Проверка является ли массивом: Array.isArray( Arr );
  // console.log( "Is ITEA_COURSES array?", Array.isArray(ITEA_COURSES) );
  // console.log( "Is NOT_ARRAY array?", Array.isArray(NOT_ARRAY) );

  // -- Array.forEach
    // const LogName = (item, key) => console.log( 'log:', key, item );
    // ITEA_COURSES.forEach( LogName );
    // console.log('- - - - -');
    // ITEA_COURSES.forEach( function( item, i){
    //   console.log('log2:', i, item );
    // });

  // -- Array.filter
  // Create new array;

  // const StringLength = item => item.length < 15;
  // // // if expresion === true return item
  // var filtredArray = ITEA_COURSES.filter(StringLength);
  // console.log('filtredArray:', filtredArray);
  // console.log('Array:', ITEA_COURSES);

  // -- Array.map
  // Create new array;

  // var ReverseName = (name, i) => {
  //   let div = document.createElement('div');
  //       div.innerText = name;
  //       document.body.appendChild(div);
  // };
  //
  // var MappedArray = ITEA_COURSES.map(ReverseName);
  // console.log(MappedArray);

  // -- every/some
  // const LessThen5 = item => item.length < 8;
  // let ArraySome = ITEA_COURSES.some(LessThen5);
  // console.log('ArraySome', ArraySome);
  //
  // let ArrayEvery = ITEA_COURSES.every( item => item.length < 15);
  // console.log('ArrayEvery', ArrayEvery);

  // -- reduce/reduceRight
  // const REDUCE_ARRAY = [1,2,3,4,5,6,7,8,9,10];
  // const REDUCE_ARRAY2 = [
  //   { id: 0, name: '01044'},
  //   { id: 1, name: 'Киев'},
  //   { id: 2, name: 'Украина'},
  //   { id: 3, name: 'ул. Смоленская 31'}
  // ];


  // var result = REDUCE_ARRAY.reduce( function( sum, current){
  //   console.log("Sum", sum, "Current:", current);
  //   return sum * current;
  // });
  // console.log('Result sum:',result);
  // var resultReverse = REDUCE_ARRAY2.reduceRight( function( sum, current){
  //     console.log("multiply + <:", sum, current.name);
  //     return sum +" "+ current.name;
  // }, '');

  // console.log('resultReverse', resultReverse);
