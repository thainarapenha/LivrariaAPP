import { api } from "./api";

// crio uma função assíncrona para fazer a requisição na API
export async function GetAllBook() {
  try {
    // método responsável com requisitar os livros da API
    const response = await api.get('/livros');
    console.log("O que API retornou: ", response.data);
    // retorno as informações que peguei da API
    return(response.data);
  } catch (error) {
    console.log("erro no service book" + error);
  }
}