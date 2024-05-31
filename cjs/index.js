// ? globalThis, variable global en toda la app: node, navegador, etc ..
// ? - En navegador, apunta a window
// ? - En node.js, apunta a global, siendo globalThis = global
//console.log(global)

//! para importarla con CJS
//const sum = require('./sum');

//* de la otra forma

const { sum } = require('./sum')
console.log(sum(1,4))
