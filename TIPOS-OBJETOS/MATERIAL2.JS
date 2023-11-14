class Notebook {
    constructor(marca, modelo, processador, ram, armazenamento, ligado = false) {
      this.marca = marca;
      this.modelo = modelo;
      this.processador = processador;
      this.ram = ram; // em gigabytes
      this.armazenamento = armazenamento; // em gigabytes
      this.ligado = ligado;
    }
  
    ligar() {
      if (!this.ligado) {
        this.ligado = true;
        console.log(`${this.marca} ${this.modelo} ligado.`);
      } else {
        console.log(`${this.marca} ${this.modelo} já está ligado.`);
      }
    }
  
    desligar() {
      if (this.ligado) {
        this.ligado = false;
        console.log(`${this.marca} ${this.modelo} desligado.`);
      } else {
        console.log(`${this.marca} ${this.modelo} já está desligado.`);
      }
    }
  
    executarPrograma(programa) {
      if (this.ligado) {
        console.log(`${this.marca} ${this.modelo} executando o programa: ${programa}`);
      } else {
        console.log(`${this.marca} ${this.modelo} não pode executar programas enquanto estiver desligado.`);
      }
    }
  
    expandirMemoria(adicionalRAM) {
      this.ram += adicionalRAM;
      console.log(`Memória RAM expandida para ${this.ram} GB.`);
    }
  
    armazenamentoDisponivel() {
      console.log(`Espaço de armazenamento disponível: ${this.armazenamento} GB.`);
    }
  
    obterInformacoes() {
      console.log(`Informações do Notebook - Marca: ${this.marca}, Modelo: ${this.modelo}, Processador: ${this.processador}, RAM: ${this.ram} GB, Armazenamento: ${this.armazenamento} GB, Ligado: ${this.ligado}`);
    }
  }
  
  // Exemplo de uso
  const meuNotebook = new Notebook('Dell', 'Inspiron 15', 'Intel Core i5', 8, 256);
  meuNotebook.ligar();
  meuNotebook.executarPrograma('Visual Studio Code');
  meuNotebook.expandirMemoria(8);
  meuNotebook.armazenamentoDisponivel();
  meuNotebook.desligar();
  meuNotebook.obterInformacoes();
  