// const cars: string[] = ['ford', 'toyota']
// const cars1: Array<string> = ['ford', 'toyota']

// const promise: Promise<number> = new Promise<number>( resolve => {
//   setTimeout( () => {
//     resolve( 42 )
//   }, 2000 )
// } )

// promise.then( data => console.log( data ) )

// generic T и R говорят о том что значения a и b будут такого же типа (но без уточнения)
// T extends object, R extends object - говорит о том что generic T и R наследуют типы объект
function mergeObjects<T extends object, R extends object> ( a: T, b: R ) {
  return Object.assign( {}, a, b )
}

const merged = mergeObjects( { name: 'Staz' }, { age: 32 } )
const merged1 = mergeObjects( { model: 'ford' }, { year: 2010 } )
// const merged2 = mergeObjects( 'aaa', 'bbb' )

// console.log(merged.age);
// console.log(merged1.model);
// console.log(merged2.model);

// ======================================================

interface Ilength {
  length: number
}

function withCount<T extends Ilength> ( value: T ): { value: T, count: string } {
  return {
    value,
    count: `в этом объекте ${value.length} символов`
  }
}

// console.log(withCount('Hello typeScript'));
// console.log(withCount(['i', 'am', 'array']));
// console.log(withCount([1, 2 , 3, 4]));


//======================================================================

// function getObjectValue<T extends object, R extends keyof T> ( obj: T, key: R ) {
//   return obj[key]
// }

// const person = {
//   name: 'Gucci',
//   age: 4
// }

// console.log( person, 'name' );
// console.log( person, 'age' );
// console.log( person, 'job' );  //должен ругаться на не существующий ключ, но почему то не ругается

//=========================================================================

class Collection<T extends number | string | boolean> {
  constructor( private _items: T[] = [] ) { }

  add ( item: T ) {
    this._items.push( item )
  }

  remove ( item: T ) {
    this._items = this._items.filter( el => el !== item )
  }

  get items (): T[] {
    return this._items
  }
}

const string = new Collection<string>( ['i', 'am', 'string'] )
string.add( '!' )
string.remove( 'am' )
// console.log( string.items );

const number = new Collection<number>( [1, 2, 3] )
number.add( 1 )
number.remove( 3 )
// console.log( number.items );

// const objs = new Collection( [{ a: 1 }, { b: 2 }] )  //ошибка при работе с объектами, поэтому чтобы исключить данную ошибку в классе прописываем типы
// objs.remove( { b: 2 } )
// console.log( objs.items );

//=============================================================================

interface Car {
  model: string
  year: number
}

function createAndValidateCar ( model: string, year: number ): Car {
  const car: Partial<Car> = {}    //Partial означает что в будущем пустой объект станет как интерфейс Car

  if ( model.length > 3 ) {
    car.model = model
  }

  if ( year > 2000 ) {
    car.year = year
  }

  return car as Car     //такой синтаксис тоже говорит о том что переменная станет как интерфейс Car
}


//==========================================================


const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift() //Readonly значит что нельзя изменять исходный массив
cars[1]   //но использовать и обращаться можно


const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari' //тоже самое Readonly
