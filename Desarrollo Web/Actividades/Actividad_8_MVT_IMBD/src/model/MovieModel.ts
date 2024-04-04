
import MovieInterface from '../types/MovieInterface'

export default class MovieModel {
  public async getMovies (): Promise<MovieInterface[]> {
    return await new Promise((resolve, reject) => {
      const response = fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2e115dfce5mshfa31edd6fdb3c87p119c86jsn398aaab56d3c',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      })
      response.then((movies) => {
        resolve(movies.json())
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
