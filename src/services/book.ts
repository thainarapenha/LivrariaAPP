import { api } from "./api";

// crio uma função assíncrona para fazer a requisição na API
export async function GetAllBook() {
  try {
    // método responsável com requisitar os livros da API
    const response = await api.get('/livros');
     // esse console pode ser apagado. Queriamos apenas ver se os dados estavam sendo retornados corretamente
    console.log("O que API retornou: ", response.data);

    // retorno as informações que peguei da API
    return(response.data);
  } catch (error) {
    // lembre-se que este não é um jeito correto para fazer
    // tratamento de erro. Como expliquei anteriormente, queriamos ver
    // se acontecia algo. Fica como sugestão, pesquisar mais sobre esse tópico.
    console.log("erro no service book" + error);
  }
}