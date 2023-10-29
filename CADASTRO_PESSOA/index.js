/* 
 Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a 
codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada 
variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos. 
*/

/* 
    Tipos das Variaveis

    nome: String,
    salario: Number,
    idade: Number,
    possuiDiploma: Boolean,
*/
const pessoas = [];

function cadastro(nome, salario, idade, possuiDiploma) {
  const pessoa = { nome, salario, idade, possuiDiploma };

  typeof nome === "string" &&
  typeof salario === "number" &&
  typeof idade === "number" &&
  typeof possuiDiploma === "boolean"
    ? pessoas.push(pessoa)
    : console.log("Cadastro Invalido");
}

cadastro("Giselle jacinto gomes", 1500.55, 21, false);
cadastro("João da Silva", 11600.55, 21, true);
cadastro("Ruan José", 5500.55, 21, true);
cadastro(2222, "rede", 21, "true");

console.log(pessoas);