import axios from "axios";

const API_ENDPOINT = "http://localhost:3035/products";


export const fetchProducts = async (productName) =>
await axios.get(`${API_ENDPOINT}?search=${productName}`);

