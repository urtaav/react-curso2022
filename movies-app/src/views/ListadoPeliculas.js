
import '../App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './Pelicula';
import peliculasJson from '../Peliculas.json';
import Pagination from './Pagination';
import { useState } from 'react';

function ListadoPeliculas() {

	const [paginaActual,setPaginaActual] = useState(1);
	const TOTAL_BY_PAGE = 7;
	let peliculasList = peliculasJson;

	const cargarPeliculas = () => {
		peliculasList = peliculasList.slice(
		  (paginaActual - 1) * TOTAL_BY_PAGE,
		  paginaActual * TOTAL_BY_PAGE
		);
	  }

	const getTotalPaginas = () => {
		let cantidadTotalDePeliculas = peliculasJson.length;
		return Math.ceil(cantidadTotalDePeliculas / TOTAL_BY_PAGE);
	  }

	  
  cargarPeliculas();

  return (
	 
	<PageWrapper>
		{
				peliculasList.map(movie => 
					 <Pelicula
							title={movie.titulo}
							rate={movie.calificacion}
							img={movie.img}
							runtime={movie.duracion}
							release={movie.fecha}
							director={movie.director}
							starts={movie.actores}
							>
							
							{movie.descripcion}
						</Pelicula>
				)
		}
  <Pagination pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />
	</PageWrapper>
  );
}

export default ListadoPeliculas;
