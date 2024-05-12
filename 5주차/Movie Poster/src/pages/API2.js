// api2.js

import axios from 'axios';

export async function fetchMovies() {
  const apiKey = '5532b4aedd542db70978e1aface1c6f5';
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

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
export async function fetchNowPlayingMovies() {
  const apiKey = '5532b4aedd542db70978e1aface1c6f5';
  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

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
