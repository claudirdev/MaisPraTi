/*------------------------------------------------------------------ 
File: src/api/omdb.js
Subject: Exercicio 5 - Consumo API com ReactJS - Formação +PraTI                      
Create: 21/08/25                                                   
Developer: Claudir Kraulich
-------------------------------------------------------------------*/
import { API_KEY, BASE_URL } from "../config.js";

export const fetchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`
    );
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
