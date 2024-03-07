
import { MovieInterface } from "../types/MovieInterface"

export default class IndexView {
  private readonly sec: HTMLDivElement

  constructor () {
    this.sec = document.querySelector('#sec') as HTMLDivElement
  }

  public deploy(moviesPromise: Promise<MovieInterface[]>): void {
    moviesPromise.then((movies) => {
      movies.forEach((movie) => {
        this.sec.innerHTML += this.getArticle(movie)
      })
    }).catch((err) => {
      console.error(err)
    })
  }

  getArticle = (movie: MovieInterface): string => {
    return `


  `
  }
}
