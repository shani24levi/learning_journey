/*
What is TypeScript?
from docs:
-------------------

1) JavaScript and More
TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. 
Catch errors early in your editor.

2) TypeScript code converts to JavaScript
which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.

3) Safety at Scale
TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.
*/

const myValue: string = "jack";
const sp : string[] = myValue.split('')
let myValues: number[] = [1, 2, 3];
let myValues2: Array<string> = ["a"];

type Person = boolean | null

interface Person2 {
    name: string,
    age: number,
    bio: Array<string>
}

const preson ={
    name: 'string',
    age: 1
}

//Record<key type,value type>  for expanding object
const b : Record<number,string> = {
    1:'1',
    2:'2'
}
b[3]='3'