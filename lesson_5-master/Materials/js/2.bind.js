

    /*
      call, bind, apply

      Apply:
        fun.apply(thisArg, [argsArray]);
        fun.call(thisArg, a, b, c);
        fun.bind(thisArg, a, b, c);
    */

    // function add(c, d) {
    //   console.log('add context', this);
    //   console.log('add sum', this.a + this.b + c + d);
    // }

    // add(3,4); //NaN

    // var ten = {
    //   a: 1,
    //   b: 2,
    // };
    // add.call(ten, 3, 4); // 10

    // var x = [1,2];
    // add.apply(ten, x);

    // function Product(name, price) {
    //   this.name = name;
    //   this.price = price;
    //
    //   if (price < 0) {
    //     throw RangeError('Cannot create product ' + this.name + ' with a negative price');
    //   }
    // }
    // function Food(name, price) {
    //   Product.call(this, name, price);
    //   this.category = 'food';
    // }
    // function Toy(name, price) {
    //   Product.call(this, name, price);
    //   this.category = 'toy';
    // }

    // var phone = new Product('Phone', 1000);
    // console.log(phone);
    // var cheese = new Food('feta', -5);
    // var fun = new Toy('robot', 40);
    // console.log( fun, cheese );

    /*
      Bind
    */


// var meowButton = document.getElementById('meowButton');
//     console.log( meowButton );
//
//     var myObj = {
//       sound: 'Guten Morgen',
//       talk: function(){
//         console.log('myObj', this, this.sound );
//       }
//     }
//
//     var vampire = {
//       sound: 'grrrr'
    // }
    // myObj.talk();

    // var bindedTalk = myObj.talk.bind(vampire);
    // meowButton.addEventListener(
    //   'click',
    //   bindedTalk
    // );
        //
    // var Sasha = { name: 'Sasha', sound: 'Sasha say hello!'};
    // myObj.talk.call(Sasha);
    // testBtn.addEventListener('click', bindedTalk);

    /*
      Частичный вызов функции
    */

    // function hardCarrying(a,b,c,d,e){
    //   console.log(a,b,c,d,e);
    // }
    // var simpeFunc = hardCarrying.bind(null, 1,2,3,4);
    // simpeFunc(5);

     function SimlpleFunc( a, b, message ){
       console.log(  a, b, message, this );
     }
     var SimpleCarrying = SimlpleFunc.bind(null, 1);

     var context = { test: true }
     var TestFunc = SimlpleFunc.bind(context, 1, 2, "test");

         SimpleCarrying(6, 'hello');
         SimlpleFunc(5, 6, 'bye')
         TestFunc();

/* function ManyArgyments( another, brick, in_the, wall){
       console.log('ManyArgyments', another, brick, in_the, wall);
     }

     var CarryingFunc = ManyArgyments.bind(null, 'We', 'don\'t', 'need', 'no education');
         CarryingFunc();
*/