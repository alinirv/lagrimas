function Lagrima(id, nome, categoria, autor) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.autor = autor;
}


const lagrimasIniciais = [
    {id:1, nome: "Nota 6", categoria: "Alegria", autor: "Anônimo"},
    {id:2, nome: "Passei em DOO", categoria: " Gratidão", autor: "Maria"},
    {id:3, nome: "AP1", categoria: "Saudade", autor: "Maria"},
    {id:4, nome: "IFA", categoria: "Tristeza", autor: "Maria"},
    {id:5, nome: "Prova de POO", categoria: "Esperança", autor: "Maria"}

  ];
  
  // Armazene as lágrimas iniciais no Local Storage
  localStorage.setItem('lagrimas', JSON.stringify(lagrimasIniciais));


  
