import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

const APPLICATION_JSON = "application/json"; 
const CONTENT_TYPE = { "content-type": APPLICATION_JSON };

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let _http = helpHttp();
  let url = "http://localhost:5000/santos";

  //SOLO SE EJECUTA LA PRIMERA VEZ
  useEffect(() => {
      setLoading(true);
      helpHttp().get(url).then((res) => {
      console.log("res ==>", res);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    console.log("insert ==>", data);
    data.id = Date.now() + 'x0x';

    let options = {
        body:data,
        headers: CONTENT_TYPE
    };
    _http.post(url,options).then((res) => {

        if(!res.err){
            setDb([...db, res]);
        }else{
            setError(res);
        }
    })
  };
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log("update ===>", data);

    let options = {
        body:data,
        headers:  CONTENT_TYPE
    };
    _http.put(endpoint,options).then((res) => {
        if(!res.err){
            let newData = db.map((el) => (el.id === data.id ? data : el));
            setDb(newData);
        }else{
            setError(res);
        }
    })
  };
  const deleteData = (id) => {
    console.log("delete ===>", id);
    let isDelete = window.confirm(
        `¿Estás seguro de eliminar el registro con el id '${id}'?`
      );
  
      if (isDelete) {
        let endpoint = `${url}/${id}`;
        let options = {
          headers: CONTENT_TYPE,
        };
  
        _http.del(endpoint, options).then((res) => {
          //console.log(res);
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
      } else {
        return;
      }
  };

  return (
    <div>
      <h2>Crud API</h2>
      <article className="grid-1-2 ">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
       
         {loading &&  <div className="centerContent"><Loader/></div>}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
