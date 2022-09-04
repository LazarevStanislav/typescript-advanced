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
function mergeObjects<T extends object, R extends object>( a: T, b: R ) {
  return Object.assign({}, a, b)
}

const merged = mergeObjects( { name: 'Staz' }, { age: 32 } )
const merged1 = mergeObjects( { model: 'ford' }, { year: 2010 } )
// const merged2 = mergeObjects( 'aaa', 'bbb' )

console.log(merged.age);
console.log(merged1.model);
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

console.log(withCount('Hello typeScript'));
console.log(withCount(['i', 'am', 'array']));
console.log(withCount([1, 2 , 3, 4]));


//======================================================================
