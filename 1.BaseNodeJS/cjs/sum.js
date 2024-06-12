function sum (a, b) {
  return a + b
}

// ! Para exportar la suma de forma clásica, se usa Common JS (CJS)
// module.exports = sum

//* También se puede exportar de la siguiente forma, obligando al usuario a llamar
//* a la constante sum a la hora de importarla
module.exports = {
  sum
}
