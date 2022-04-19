
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import './App.css';
import Blog from './views/Blog';
import ListadoPeliculas from './views/ListadoPeliculas';


function App() {

  return (

		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ListadoPeliculas />} />
				<Route path="blog" element={<Blog />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;
