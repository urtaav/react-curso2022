import React from 'react';
import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import CrudApp from "./components/CrudApp";
import SelectsAnidados from './components/SelectsAnidados';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <>
    <h1>Ejercicios con React</h1>
    <ContactForm/>
    <hr/>
    <SelectsAnidados/>
    <hr/>
    <SongSearch/>
    <hr/>
    <CrudApi></CrudApi>
    <hr/>
    <CrudApp/>
    <hr/>
    </>
  );
}

export default App;
