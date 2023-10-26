/*
An interface declaration is another way to name an object type:

Differences Between Type Aliases and Interfaces
Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to 
add new properties vs an interface which is always extendable.

*/

interface Point {
    x: number
    y: number
}

interface Point {
    z: number
}

//automaticly extands point to x,y,z in interface , in type we cant do that.
// will use interface when we have data - a strucher of data as an object
// will use type when need a element e.g. name=string|number
// of defining a func e.g. funcType = (str: string | string[])=>void
