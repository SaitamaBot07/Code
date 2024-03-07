export default class IndexView {
    constructor() {
        this.getArticle = (movie) => {
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

  `;
        };
        this.sec = document.querySelector('#sec');
    }
    deploy(moviesPromise) {
        moviesPromise.then((movies) => {
            movies.forEach((movie) => {
                this.sec.innerHTML += this.getArticle(movie);
            });
        }).catch((err) => {
            console.error(err);
        });
    }
}
