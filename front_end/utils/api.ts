import { IMovieDetail, TRequest, TRequestArrary } from "@/types";

export const Links = ["Popular", "Trending", "Horror", "Heart"];

export const key = process.env.NEXT_PUBLIC_MOVIES_APP_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const request: TRequest = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${key}&language=en-US`,
  requestPopular: `${BASE_URL}/movie/popular?api_key=${key}&language=en-US&page=1`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${key}&language=en-US&with_genres=28`,
  requestHorror: `${BASE_URL}/discover/movie?api_key=${key}&language=en-US&with_genres=27`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${key}&language=en-US&with_genres=35`,
};

export const arrReq: TRequestArrary[] = [
  { name: "Trending Now", req: "fetchTrending" },
  { name: "Popular on Netflix", req: "requestPopular" },
  { name: "Top Rated", req: "fetchTopRated" },
  { name: "Action Thrillers", req: "fetchActionMovies" },
  { name: "Horror Movies", req: "requestHorror" },
  { name: "Comedies", req: "fetchComedyMovies" },
];

export const getData = async (req: string) => {
  try {
    const response = await fetch(req, {
      next: { revalidate: 120 },
    });
    const { results }: { results: IMovieDetail[] } = await response.json();
    return results;
  } catch {
    throw Error;
  }
};

export async function getRandomMovie(url: string) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const movies = data?.results || [];

    if (movies.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  } catch {
    return null;
  }
}

export const getDataDetails = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
    { next: { revalidate: 120 } },
  );
  return await response.json();
};
