let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generarTodosLosDominios() {
  let dominios = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let dominio = p + a + n + ".com";
        dominios.push(dominio);
      }
    }
  }

  return dominios;
}

let listaDeDominios = generarTodosLosDominios();
console.log(listaDeDominios);
