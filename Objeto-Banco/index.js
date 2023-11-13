/* 
    Crie um código com um objeto chamado “Banco”. 
    Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: 
    buscar saldo, depósito, saque e número da conta. 

    Observações: 
    - buscar saldo deve retornar o valor atual do saldo;
    - para o depósito , você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto; 
    - para o saque , você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
    - o número da conta  deve retornar o número da conta.
*/

/* Object Literals */
const Banco = {
    conta: Math.floor(Math.random() * 1000),
    saldo: 0,
    tipoDeConta: "PF",
    agencia: "agencia",
    buscarSaldo: () => Banco.saldo,
    deposito: (valor) => (Banco.saldo += valor),
    saque: (valor) => (Banco.saldo -= valor),
    numeroDaConta: () => Banco.conta,
  };
  
  Banco.deposito(1000);
  Banco.saque(540);
  console.log("Saldo:", Banco.buscarSaldo());
  console.log("Numero da conta:", Banco.numeroDaConta());