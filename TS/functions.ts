/* functions in ts - basic */
function addNumbers(a: number,b: number){a+b}
console.log(addNumbers(1,2));

export const addStrings =(str: string) : string=> `hello ${str}`
console.log(addStrings('shani'));

const fatchdata = () : Promise<string>=> Promise.resolve('data') 


/* functions in ts - advance, fun with func */
