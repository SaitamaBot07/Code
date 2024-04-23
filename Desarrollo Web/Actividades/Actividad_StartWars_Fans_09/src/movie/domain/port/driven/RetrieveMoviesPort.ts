
export default interface RetrieveMoviesPort {
    getMovies(): Promise<Movie[]>
  }
    