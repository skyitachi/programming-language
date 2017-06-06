function identity<T>(arg: T): T {
  return arg;
}
// calling generic function with explict type
let a: string = identity<string>("generics");

console.log(typeof a);
// calling generic function without explict type information
let b = identity(1);

console.log(typeof b);

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

// Generic Types
let myIdentity: <T>(arg: T) => T = identity; 
let myIdentity2: <U>(arg: U) => U = identity;
let myIdentity3: {<T>(arg: T): T} = identity;

// Generic Interface
interface GenericIdentityFn {
  <T>(arg: T): T
}
// T as type parameter for whole interface
interface GenericIdentityFn2<T> {
  (arg: T): T
}

let myIdentity4: GenericIdentityFn = identity;

let myIdentity5: GenericIdentityFn2<number> = identity;

// Generic Class
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "";
myGenericString.add = function (x, y) { return x + y; };