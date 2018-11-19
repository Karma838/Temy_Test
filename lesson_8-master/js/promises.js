/*
  PROMISES
  Способ организации асинзронного кода.
*/

  // PROMISES
  // Promise status : Pending | Fulfilled | Rejected

  /*
    FIRST PROMISE
    Статус промиса может изменится только 1 раз
  */

  // let TestPromise = new Promise( function( resolveFunc, rejectFunc ){
  //  setTimeout( () => {
  //    // переведёт промис в состояние fulfilled с результатом "result"
  //    // resolveFunc([{title:'1'}, {title: '2'}]);
  //    // переведёт промис в состояние Rejected с результатом "ERROR 404"
  //    rejectFunc('ERROR 404');
  //  }, 1000);
  // });
  //
  // TestPromise.then(
  // // // // В then можем передать две функции - для обработки упешного состояния и для обработки ошибки
  //   function(res){
  //     console.log('Fulfilled: ', res );
  //     console.log( TestPromise );
  //     return [{name: 'one'}, {name: 'two'}];
  //   },
  //   function(error){
  //     console.log('error')
  //     console.log( TestPromise );
  //     throw new Error('Rejected: ' + error);
  //     return [{name: 'vasha'}, {name:'Nasha'}];
  //   }
  // )
  // .then( function(response){
  //   console.log( 'third chain:', response );
  //   let x = [];
  //     response.forEach( function( item ){
  //       item.maxAge = 90;
  //       x.push(item);
  //     });
  //     console.log('Third then:', x)
  //   return x;
  //   }
  // )
  // .then( res => {
  //   let iterableArray = res.map( item => item.color = 'red' );
  //   return res;
  // })
  // .then( function(response){
  //     console.log( 'second chain', response );
  //     let x = [];
  //     response.forEach( (item) => {
  //       item.age = "20";
  //       x.push( item );
  //     });
  //     console.log(x);
  //   return x;
  // })
  // .catch( res => {
  //   console.error('we have a problems', res);
  // });


  /* LOAD CAT PROMISE */
  //
  function loadImagePromise( url ){
    return new Promise( (resolve, reject) => {
      let imageElement = new Image();
          imageElement.onload = function(){
            resolve( imageElement );
          };
          imageElement.onerror = function(){
            let message = 'Error on image load at url ' + url;
            new Error(message);
            reject(
              RenderImage('images/cat5.jpg')
            );
          };

          imageElement.src = url;
    });
  }

  // loadImagePromise('images/cat1.jpg').then((img) => {
  //   console.log( img )
  //   RenderImage(img);
  //   return '123'
  // }).then(
  //   res => console.log('do smsng', res);
  // )

  // Promise.all([
  //   loadImagePromise('images/cat2.jpg'),
  //   loadImagePromise('images/cat1321.jpg'),
  //   loadImagePromise('images/cat3.jpg'),
  //   loadImagePromise('images/cat4.jpg'),
  //   loadImagePromise('images/cat5.jpg'),
  //   loadImagePromise('images/cat6.jpg'),
  //   loadImagePromise('images/cat7.jpg')
  // ])
  // .then( images => {
  //   console.log( images );
  //   images.forEach( img => RenderImage( img ) );
  // })
  // .catch( error => console.log('catch', error));

  // http://www.json-generator.com/api/json/get/cfWixBRmPS?indent=2/
  //ASYNC PROMISE
  let url = "http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2";
  // //
  var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "text/plain");
  //
  const ConvertToJSON = ( data ) => data.json();
  //


  {
    loading: false,
    loaded: false
    data: []
  }
  fetch( url, { method: 'POST', header: myHeaders} )
    .then( ConvertToJSON )
    .then( DataHandler );

  function DataHandler( json ){
      console.log( 'json', json );
      json.map( item => {

        let elem = document.createElement('div');
            elem.innerHTML = `
              <div>
                ${item.name}, ${item.age}
              </div>
            `
          document.body.appendChild(elem);
      } )
  }






  `/api/public/companies/3/info/2` => Test 1
  `/api/public/companies/4/info/2` => Test 2
