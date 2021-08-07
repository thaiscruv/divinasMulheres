// pegar o input do usuário
//Se for "Sim", mostra as representações disponíveis e pergunta qual é a escolhida

//Se "Não", mostra todas as representação em ordem crescente do ID

const deusas = require("./database");

const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar uma secao?S/N");

if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas são as seções disponíveis: ");
  console.log("Criatividade", "Amor", "Poder", "Proteger", "Reinventar ");

  const entradaSecao = readline.question("Qual secao voce escolhe? ");

  const retorno = deusas.filter((deusa) => deusa.secao === entradaSecao);

  console.table(retorno);
} else {
  const deusasOrdenadas = deusas.sort((a, b) => a.página - b.página);
  console.log("Essas são todas as divindades do livro: ");
  console.table(deusasOrdenadas);
}
