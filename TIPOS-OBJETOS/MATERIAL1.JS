class Carro {
    constructor(modelo, cor, anoFabricacao) {
      this.modelo = modelo;
      this.cor = cor;
      this.anoFabricacao = anoFabricacao;
      this.velocidadeAtual = 0;
      this.ligado = false;
    }
  
    ligar() {
      this.ligado = true;
      console.log(`${this.modelo} ligou.`);
    }
  
    desligar() {
      this.ligado = false;
      this.velocidadeAtual = 0;
      console.log(`${this.modelo} desligou.`);
    }
  
    acelerar(velocidade) {
      if (this.ligado) {
        this.velocidadeAtual += velocidade;
        console.log(`${this.modelo} acelerou para ${this.velocidadeAtual} km/h.`);
      } else {
        console.log(`${this.modelo} não pode acelerar enquanto estiver desligado.`);
      }
    }
  
    frear() {
      if (this.ligado && this.velocidadeAtual > 0) {
        this.velocidadeAtual -= 10; // Simplesmente reduz 10 km/h para simular o freio
        console.log(`${this.modelo} freou. Velocidade atual: ${this.velocidadeAtual} km/h.`);
      } else if (!this.ligado) {
        console.log(`${this.modelo} não pode frear enquanto estiver desligado.`);
      } else {
        console.log(`${this.modelo} já está parado.`);
      }
    }
  
    obterInformacoes() {
      console.log(`Informações do carro - Modelo: ${this.modelo}, Cor: ${this.cor}, Ano: ${this.anoFabricacao}, Velocidade: ${this.velocidadeAtual} km/h, Ligado: ${this.ligado}`);
    }
  }
  
  // Exemplo de uso
  const meuCarro = new Carro('Toyota Corolla', 'Azul', 2022);
  meuCarro.ligar();
  meuCarro.acelerar(60);
  meuCarro.frear();
  meuCarro.obterInformacoes();
  