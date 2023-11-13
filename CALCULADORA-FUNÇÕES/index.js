/* 
    Crie um programa que contenha os seguintes tipos de funções: 
    1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro; 
    2. uma função tradicional com parâmetros e um retorno de valor; 
    3. uma arrow function com parâmetros e que retorne um valor. 

    Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora. 
*/

function saudacao() {
    console.log("Bem Vindo a calculadora");
  }
  
  function calculadora(n1, n2, op) {
    let resultado;
    switch (op) {
      case "+":
        resultado = n1 + n2;
        console.log(`${n1} ${op} ${n2} = ${resultado}`);
        break;
      case "-":
        resultado = n1 - n2;
        console.log(`${n1} ${op} ${n2} = ${resultado}`);
        break;
      case "*":
        resultado = n1 * n2;
        console.log(`${n1} ${op} ${n2} = ${resultado}`);
        break;
      case "/":
        resultado = n1 / n2;
        console.log(`${n1} ${op} ${n2} = ${resultado}`);
        break;
      default:
        console.log("Operador Invalido");
        break;
    }
  }
  
  const restoDaDivisao = (n1, n2) => n1 % n2;
  
  saudacao();
  calculadora(10, 5, "-");
  console.log(restoDaDivisao(5, 2));