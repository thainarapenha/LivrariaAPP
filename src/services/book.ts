import { api } from "./api";

export async function GetAllBooks() {
  try {
    const response = await api.get('/livros');
    // console.log("console livros: ", response.data);
    return response.data;
  } catch (error) {
    console.log("erro no service de books" + error);
  }
}