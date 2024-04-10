import axios from "axios";

// declaro e exporto a url base da API
export const api = axios.create({
  baseURL: "https://meu-livro-api.onrender.com"
})