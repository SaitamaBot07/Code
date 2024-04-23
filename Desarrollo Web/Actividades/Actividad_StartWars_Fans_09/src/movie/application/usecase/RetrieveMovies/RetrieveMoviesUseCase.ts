
import Movie from '../../../domain/model/movie/Movie'
import RetrieveMoviesServicePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesServicePort'
import RetrieveMoviesUseCasePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesUseCasePort'
import RetrieveMoviesService from '../../service/RetrieveMovies/RetrieveMoviesService'

export default class RetrieveMoviesUseCase implements RetrieveMoviesUseCasePort {
  name: string

  constructor(private readonly retrieveMoviesService: RetrieveMoviesServicePort) {
    this.name = 'RetrieveMoviesUseCase'
  }

  //! Un puerto es una interface - Contrato,  EN UNA INTERFACE LO QUE HAY ES UNA DECLARACION DE LAS ENTIDADES QUE HAY AHI, EL OBJETO QUE IMPLEMENTE CIERTA INTERFACE PUEDE USAR LOS MISMOS METODOS 

  public getMovies = async (): Promise<Movie[]> => {
    return this.retrieveMoviesService.getMovies()
  }
}

//! HAY QUE DISTINGUIR EL MOMENTO ENTRE DESARROLLO Y OTRA CUANDO YA ESTA EN EJECUCIÓN 


  
