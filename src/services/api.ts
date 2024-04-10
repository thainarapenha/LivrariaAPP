import axios from "axios";

export const api = axios.create({
  baseURL: "https://meu-livro-api.onrender.com"
})