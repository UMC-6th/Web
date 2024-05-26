// api2.js

import axios from 'axios';

// src/API2.js
export async function fetchMovies(page = 1) {
  const apiKey = '5532b4aedd542db70978e1aface1c6f5';
  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}


// api2.js
export async function fetchNowPlayingMovies(page = 1) {
  const apiKey = '5532b4aedd542db70978e1aface1c6f5';
  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`; // 페이지 매개변수를 URL에 포함

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results; // 영화 데이터를 반환
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // 에러 발생 시 빈 배열 반환
  }
}





// api2.js
export async function fetchTopRatedMovies() {
  const apiKey = '5532b4aedd542db70978e1aface1c6f5';
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}


// api2.js
export async function fetchUpComingMovies() {
  const apiKey = '5532b4aedd542db70978e1aface1c6f5';
  const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}


export async function fetchMovieDetail(movieId) {
  const apiKey = '5532b4aedd542db70978e1aface1c6f5';
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ko-KR`;

  try {
    const response = await axios.get(apiUrl); // axios를 사용하여 API 호출
    return response.data;
  } catch (error) {
    console.error('Error fetching movie detail:', error);
    throw error;
  }
}


export async function fetchSearchMovies(searchTerm) {
  const apiKey = '5532b4aedd542db70978e1aface1c6f5';
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&query=${searchTerm}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching search data:', error);
    return [];
  }
}





export const fetchMovieCredits = async (movieId) => {
  const API_KEY = '5532b4aedd542db70978e1aface1c6f5';
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error; // 에러 처리를 위해 에러를 다시 throw합니다.
  }
};
