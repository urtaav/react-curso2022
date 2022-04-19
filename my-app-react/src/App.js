import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1,setlinea1] = useState('');
  const [linea2,setlinea2] = useState('');
  const [image,setImage] = useState('');

  const onChangeL1 = function(event){
    setlinea1(event.target.value);
  }

  const onChangeL2 = function(event){
    setlinea2(event.target.value);
  }

  const onChangeImg = function(event){
    setImage(event.target.value);
  }
  const handlerExport = function(){
    html2canvas(document.querySelector("#capture")).then(canvas => {
      var img = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = "meme.png";
      link.href = img;
      link.click();
  });


  }

  return (
    <div className="App">
      {/* select picker memes  */}
      <select onChange={onChangeImg}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br/>
      {/* input text - primera linea */}
      <input onChange={onChangeL1} type="text" placeholder='linea 1'></input>
      <br/>
      {/* input text - segunda linea */}
      <input onChange={onChangeL2} type="text" placeholder='linea 2'></input>
      <br/>
      {/* boton exportar  */}
      <button onClick={handlerExport}>Exportar</button>

      <div className='container-meme' id='capture'>
        <span>{linea1}</span>
        <br/>
        <span>{linea2}</span>
        <img src={"/img/" + image + ".jpg"} alt=""></img>
      </div>

    </div>
  );
}

export default App;
