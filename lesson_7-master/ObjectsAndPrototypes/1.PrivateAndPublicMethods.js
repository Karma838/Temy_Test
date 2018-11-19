  /*
    Objects
  */

  function generateMyObject( name ){
    var defaultPopulation = 0;

    this.name = name;
    this.doSmsng = function(){
      console.log('defaultPopulation:', defaultPopulation );
    };
    this.population = GenerateRandomNum(10000);

    function GenerateRandomNum( q ){
      return Math.floor( Math.random() * q);
    }
    const privateMethod = () => {
      this.name = "new Name!";
    }
    this.publicMethod = function(){
      console.log('before', this.name);
      privateMethod();
      console.log('after', this.name);
    };
  }

  var obj = new generateMyObject('Dexter');
  //     obj.doSmsng();
  //     console.log(obj);
      obj.publicMethod();
      // obj.publicMethod();
  console.log( obj );
  // var testo = new generateMyObject('Test');
      // testo.doSmsng();
  //     test.publicMethod()
