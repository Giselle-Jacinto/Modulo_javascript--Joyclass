class ContaBancaria {
    constructor(numeroConta, saldoInicial, titular) {
      this.numeroConta = numeroConta;
      this.saldo = saldoInicial;
      this.titular = titular;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado na conta de ${this.titular}. Novo saldo: R$ ${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado na conta de ${this.titular}. Novo saldo: R$ ${this.saldo}`);
      } else {
        console.log(`Saldo insuficiente para saque na conta de ${this.titular}.`);
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual da conta de ${this.titular}: R$ ${this.saldo}`);
    }
  }
  
  const minhaConta = new ContaBancaria('123456', 1000, 'Fulano');
  minhaConta.depositar(500);
  minhaConta.sacar(200);
  minhaConta.consultarSaldo();
  