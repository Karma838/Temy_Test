/*
  Object Assign, Spread and Rest Operator
  Docs:
    https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/

  /*
    String Literal:
  */

  // var a = 'Карп',
      // b = "Селедка";
  // var string = a + ' и ' + b + ' стидили на трубе';
  // var newStringLiteral = `${a} и ${b} сидели на ${10+15} трубe`;

// console.log( newStringLiteral );

      // var d = ['Лебедь','Рак','Щука'];
      // var c = `
      // <div>
      //   <ul>
      //     ${
      //       d.map( (item) => `<li>${item}</li>` ).join('')
      //     }
      //   </ul>
      // </div>
      // `;
      // console.log(c);

      // const message = `
      // <div class="test">
      //   <h1 class="title">${a}</h1>
      //   <p>
      //     ${b}
      //   </p>
      // </div>
      // `;

      // let x = document.createElement('div');
      //     x.innerHTML = message;
      // // console.log(   x.querySelector('.title') );
      // document.body.appendChild(x);


  /*
    Object.assign
    syntax: Object.assign(target, ...sources)
  */
  // не коментить DataObj
  let DataObj = {
    data1: 'data1',
    data2: 'data2'
  };
  let DataObj2 = {
    data3: 'data3',
    data4: 'data4'
  };

  // - - - - - - - -

  // let firstAssign = Object.assign(DataObj, DataObj2);
  // console.log('firstAssign', firstAssign);
  // console.log('DataObj', DataObj);
  // Изменяем значение исходного обьекта и проверяем значения обеих
  // DataObj.data5 = 'data5';
  // console.log('DataObj', DataObj);
  // console.log('firstAssign', firstAssign);

  // - - - - - - - -

  // IMMUTABLE ASSIGN
  // let secondAssign = Object.assign({}, DataObj, DataObj2 );
  // // console.log( 'secondAssign', secondAssign );
  // DataObj.data6 = 'data6';
  // console.log('DataObj - secondAssign', DataObj);
  // console.log('secondAssign', secondAssign);

  // - - - - - - - -
  // let FunctionalObj = {
  //   x: () => {
  //     console.log('some important stuff');
  //   },
  //   y: {
  //     a: 'a',
  //     b: 'b',
  //     c: 'c'
  //   }
  // };
  //
  // FunctionalObj.x();
  // let thirdAssign = Object.assign({}, FunctionalObj, DataObj);
  // console.log( thirdAssign );
  // thirdAssign.x();

  // - - - - - - - -
  // convert to obj
  // var v1 = 'abcfadfsdfsds';
  // var v2 = true;
  // var v3 = 10;
  // var v4 = { value : true };
  // var v5 = ['1', '2']
  //
  // var obj = Object.assign(
  //   {},
  //   // v1,   // разберет посимвольно индекс-буква
  //   null, // -> ignore
  //   v2,   // -> ignore
  //   undefined,  // -> ignore
  //   v3,   // -> ignore
  //   v4,    // внесет в обьект,
  //   v5
  // );
  // console.log(obj);

  // - - - - - - - -

  // var obj = {
  //   foo: 1,
  //   get bar() {
  //     return 2;
  //   }
  // };

  // obj.value = '';
  // При попытке скопировать значение с геттером, получим только его value
  // var copy = Object.assign({}, obj);
  // console.log(copy);

  // let newData = {
  //   data3: 'new 1',
  //   data2: 'new 2'
  // };
  // //
  // let targetObj = Object.assign({}, DataObj, newData);
  // console.log( targetObj );

  /*
    REST and Spread Operator
    ...state, ...props
  */

  // in Function ->
  function RestTest(a, b, c,  ...props){
    console.log('a:', a, 'b', b, 'c', c,  'props', props);
    props.map( item => console.log( 'map rest props', item ) )
  }
  var args = [0, 1, 2, 4, 5];
  // RestTest.apply(null, args);
  // RestTest(6,7,8,9,0,'f')

  // In array:
  // var iterableObj = ['i','t','e'];
  // var iterableObj2 = ['d','d','a'];
  // var restArray = [ '4', 'five', 6, ...iterableObj, ...iterableObj2];
  // console.log( 'rest in array:', restArray);

  // concat arrays: old way;
  // var arr1 = [0, 1, 2];
  // var arr2 = [3, 4, 5];
  // var arr3 = [6, 7, 8];
  // Append all items from arr2 onto arr1
  // arr1 = arr1.concat(arr2);
  // arr1 = arr1.concat(arr3);
  // new way:
  // arr1 = [ ...arr1, ...arr2, ...arr3 ];
  // console.log( arr1 );

// In obj
// var obj = { value: 1};
// let objClone = { ...obj, ...DataObj };
// console.log( 'objClone', objClone );

var testObj = {
  data: {
    name: '123',
    value: '333',
    tet1: '123',
    tet2: '222',
    tet3: '333'
  },
  image: 'url',
  test: true
}

//
// testObj = {
//   ...testObj,
//   data: {
//     ...testObj.data,
//     value: 123123123123
//   }
// }

// testObj = {
//   ...testObj,
//   data: {
//     ...testObj.data,
//     tet3: null
//   }
// }

// console.log( testObj );

// - - - - - - - - -

let desonctruct = {
  prop1: 'demo',
  prop2: 'test',
  prop4: {
    pop: 123
  },
  prop3: function(){
    return 213;
  }
}

// let { prop1, prop2, prop3, prop4 } = desonctruct;
// let { pop } = prop4;
// console.log( prop1, prop2, prop3(), pop );
//
// let { t, k, ...z } = {
//     t: ['x'],
//     k: ['k'],
//     a: 3,
//     b: 4
//   };
// console.log(t); // ['x']
// console.log(k); // ['k']
// console.log(z); // { a: 3, b: 4 }

  let data = {
    loaded: true,
    loading: false,
    data: {},
    error: ['Log error']
  }
  //
  let newData = {
    ...data,
    data: {
      test: '123'
    },
    loaded: true
  }
  //
  console.log( newData );
