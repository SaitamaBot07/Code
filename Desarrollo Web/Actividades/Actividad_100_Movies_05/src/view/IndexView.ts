
import MovieInterface from '../types/MovieInterface'

export default class IndexView {
  private readonly sec: HTMLDivElement
  //*  Creamos una variable especificando que es despues de los :

  constructor () {
    this.sec = document.querySelector('#sec') as HTMLDivElement
  }

  public deploy (moviesPromise: Promise<MovieInterface[]>): void {
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
          <p>${movie.rank} ${(movie.genre != null) ? movie.genre[0] : ' '}</p>
          //* Lo de arriba es la simplificacion del if, condicion -  entonces if - : else.
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
