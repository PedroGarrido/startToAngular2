// Example from https://learnxinyminutes.com/docs/typescript/

//There are 3 basic types in TypeScript
let isDone: boolean = false;
let lines: number = 42;
let username: string = 'Anders';
console.log('Hi, world: ', username);

// But you can omit the type annotation if the variables are derived from explicit literals
let isDoneBoolean = false;
let linesNumber = 42;
let nameString = "Anders";


// When it's impossible to know, there is the "Any" type
let notSure: any = 4;
console.log('notSure variable as number: ', notSure);

notSure = "maybe a string instead";
console.log('notSure variable as string: ', notSure);

notSure = false; // okay, definitely a boolean
console.log('notSure variable as Boolean: ', notSure);
