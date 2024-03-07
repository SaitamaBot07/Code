
import MovieInterface from '../types/MovieInterface'

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
  <article class="main_section_article">
  <figure class="main_section_article_figure">
      <img src="${movie.image}" alt="${movie.title}">
      <span>
          <h5>${movie.rank}. ${movie.title}</h5>
          <p>${movie.rank} ${movie.genre}</p>
          <p># ${movie.rating}</p>
      </span>
  </figure>
  <p>
      ${movie.description}
  </p>
  </article>

  `
  }
}
