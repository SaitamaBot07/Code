import StarwarsCharacter from "../domain/starwars/StarwarsCharacter"
import StarwarsMovie from "../domain/starwars/StarwarsMovie"

export default class StarwarsAPI {
  private uriFilms = 'https://swapi.dev/api/films/'


  public async fetchAllMovies(): Promise<StarwarsMovie[]> {
    let movies: StarwarsMovie[] = []
    const response = await fetch(this.uriFilms)
    const data = await response.json()
    movies = data.results.map((movie: any) => {
      return {
        title: movie.title,
        episode_id: movie.episode_id,
        opening_crawl: movie.opening_crawl,
        release_date: movie.release_date,
        director: movie.director,
        producer: movie.producer,
        characters: movie.characters
      }
    })
    return movies
  }

  public async charactersFromMovies(movie: StarwarsMovie): Promise<StarwarsCharacter[]> {
    let characters: StarwarsCharacter[] = []
    movie.characters.forEach(async (character: string) => {
      const response = await fetch(character)
      const data = await response.json()
      characters.push({
        name: data.name,
        gender: data.gender
      })      
  })
  return characters
  }
}