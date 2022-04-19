import React from "react";
import { Form} from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

//http://localhost:9080/inai3/rest/catalogos/obtenerEntidadesFederativas
//http://localhost:9080/inai3/rest/catalogos/obtenerMunicipiosPorEntidadFederativa
//http://localhost:9080/inai3/rest/catalogos/obtenerColoniasPorMunicipio
const SelectList = ({label,url,handleChange}) => {

   const {data,error,loading} =  useFetch(url);

   console.log(data,error,loading);

   if(error){
       return <Message msg={`Error: ${error.status}: ${error.statusText}`}
       bgColor='#dc3545'></Message>
   }

   if(!data) return null;

   let id = `select-${label}`;
   let _label = label.charAt(0).toUpperCase() + label.slice(1);

   let options = data.response[label];
  return (
    <>
    { loading && <Loader/>}
      <Form.Group className="mb-3">
        <Form.Label htmlFor={id}>{_label}</Form.Label>
        <Form.Select name={id} id={id} onChange={handleChange}>
          <option value="">--Seleccionar {label}--</option>
          {data && options.map((item,index) => <option value={item} key={index}>{item}</option>)}
        </Form.Select>
      </Form.Group>
    </>
  );
};

export default SelectList;
