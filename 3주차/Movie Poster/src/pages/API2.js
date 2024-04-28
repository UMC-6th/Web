// api2.js
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