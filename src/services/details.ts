import { api } from "./api";

export async function GetDetails(id: number) {
  try {
    const response = await api.get(`/livros/${id}`);
    return response.data;
  } catch (error) {
    console.log("erro no service de books " + error);
  }
}