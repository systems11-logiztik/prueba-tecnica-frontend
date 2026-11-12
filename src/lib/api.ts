import axios from "axios";

/**
 * Cliente HTTP para la API de DummyJSON.
 * Documentación: https://dummyjson.com/docs/products
 */
export const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Content-Type": "application/json" },
});
