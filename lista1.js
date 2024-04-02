class Contato {
    constructor(nome, telefone, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
    }
  }

  class BuscaStrategy {
    buscar(contacts, term) {
      // Implementação padrão
      return contacts.filter(contact =>
        contact.nome.toLowerCase().includes(term.toLowerCase())
      );
    }
  }

  class BuscaPorTelefone extends BuscaStrategy {
    buscar(contacts, term) {
      return contacts.filter(contact =>
        contact.telefone.includes(term)
      );
    }
  }

  class BuscaPorEmail extends BuscaStrategy {
    buscar(contacts, term) {
      return contacts.filter(contact =>
        contact.email.includes(term)
      );
    }
  }

  class GerenciadorContatos {
    constructor() {
      this.contatos = [];
    }

    adicionarContato(contato) {
      this.contatos.push(contato);
    }

    removerContato(contato) {
      const index = this.contatos.indexOf(contato);
      if (index !== -1) {
        this.contatos.splice(index, 1);
      }
    }

    listarContatos() {
      return this.contatos;
    }

    buscarContatos(termo, strategy) {
      return strategy.buscar(this.contatos, termo);
    }
  }

  const gerenciador = new GerenciadorContatos();

  gerenciador.adicionarContato(new Contato("João", "123456", "joao@example.com"));
  gerenciador.adicionarContato(new Contato("Maria", "789012", "maria@example.com"));
  gerenciador.adicionarContato(new Contato("José", "345678", "jose@example.com"));

  console.log("Contatos:");
  console.log(gerenciador.listarContatos());

  console.log("\nBusca por nome (estratégia padrão):");
  console.log(gerenciador.buscarContatos("João", new BuscaStrategy()));

  console.log("\nBusca por telefone:");
  console.log(gerenciador.buscarContatos("789", new BuscaPorTelefone()));

  console.log("\nBusca por email:");
  console.log(gerenciador.buscarContatos("maria", new BuscaPorEmail()));
  