import React, { useState } from "react";

import { Form, Container, Row, Col } from "react-bootstrap";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [states, setStates] = useState("");
  const [towns, setTowns] = useState("");
  const [suburbs, setSuburbs] = useState("");

  const API_BASE = "https://api.copomex.com/query";
  const TOKEN_API ="3fa8ee86-baa5-4936-8a2f-35efd65b92a8";

  return (
    <>
      <Container>
        <pre>
          <code>
            {states} - {towns} - {suburbs}
          </code>
        </pre>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <h3 className="text-center text-primary">Selects Anidados</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="7">
            <SelectList
              label={"estado"}
              url={`${API_BASE}/get_estados?token=${TOKEN_API}`}
              handleChange={(e) => {
                setStates(e.target.value);
                if(!e.target.value){
                    setTowns(null,)
                }
              }}
            />
          </Col>
          {states && (
            <Col xs lg="7">
              <SelectList
                label={"municipios"}
                url={`${API_BASE}/get_municipio_por_estado/${states}?token=${TOKEN_API}`}
                handleChange={(e) => {
                  setTowns(e.target.value);
                  if(!e.target.value){
                    setSuburbs(null,)
                }
                }}
              />
            </Col>
          )}
          {towns && (
            <Col xs lg="7">
              <SelectList
                label={"colonia"}
                url={`${API_BASE}/get_colonia_por_municipio/${towns}?token=${TOKEN_API}`}
                handleChange={(e) => {
                  setSuburbs(e.target.value);
                }}
              />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default SelectsAnidados;
