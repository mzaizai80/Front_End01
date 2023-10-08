// src/apiConfig.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:5000/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default instance;
