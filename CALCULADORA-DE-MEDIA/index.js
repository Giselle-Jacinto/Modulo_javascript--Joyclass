/* 
A atividade que faremos é a da “calculadora de média”. Para isso, você deve criar um 
programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o 
resultado no console.

Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). 
Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. 
Depois, some-as e divida por três. 
O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. 
Por fim, exiba esse valor no console usando a função console.log().
*/

function calcularMedia() {
    alert("Insira três notas entre 0 e 10 para calcular a media");
  
    const nota1 = Number(prompt("Digite a nota 1"));
    const nota2 = Number(prompt("Digite a nota 2"));
    const nota3 = Number(prompt("Digite a nota 3"));
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      alert("Numero Invalido!");
      return;
    }
  
    const verifacarNumeros =
      nota1 < 0 ||
      nota1 > 10 ||
      nota2 < 0 ||
      nota2 > 10 ||
      nota3 < 0 ||
      nota3 > 10;
  
    if (verifacarNumeros) {
      alert("Digite numeros entre 0 e 10");
      return;
    }
  
    const media = (nota1 + nota2 + nota3) / 3;
  
    console.log(media);
  }
  
  calcularMedia();