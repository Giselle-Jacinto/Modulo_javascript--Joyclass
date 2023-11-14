class RedeSocial {
    constructor(nome) {
      this.nome = nome;
      this.usuarios = [];
      this.publicacoes = [];
    }
  
    adicionarUsuario(usuario) {
      this.usuarios.push(usuario);
      console.log(`Usuário ${usuario} adicionado à ${this.nome}.`);
    }
  
    criarPublicacao(usuario, texto) {
      const publicacao = { usuario, texto };
      this.publicacoes.push(publicacao);
      console.log(`Nova publicação de ${usuario} na ${this.nome}: ${texto}`);
    }
  
    listarPublicacoes() {
      console.log(`Publicações em ${this.nome}:`);
      this.publicacoes.forEach((publicacao, index) => {
        console.log(`${index + 1}. ${publicacao.usuario}: ${publicacao.texto}`);
      });
    }
  }
  
  const minhaRedeSocial = new RedeSocial('MySocial');
  minhaRedeSocial.adicionarUsuario('Alice');
  minhaRedeSocial.adicionarUsuario('Bob');
  minhaRedeSocial.criarPublicacao('Alice', 'Olá, mundo!');
  minhaRedeSocial.criarPublicacao('Bob', 'JS é incrível!');
  minhaRedeSocial.listarPublicacoes();
  