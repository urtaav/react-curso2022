import React,{useState} from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange  = (e) => {
    // console.log("submit", e);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      setIsDisabled(true);
      return;
    }

    handleSearch(form);
    setForm(initialForm);
    setIsDisabled(false);
  };

  return (
    <>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextEmail">
          <Form.Label>Nombre del Intérprete</Form.Label>
          <Form.Control
            type="text"
            name="artist"
            placeholder="Nombre del Intérprete"
            onChange={handleChange}
            value={form.artist}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label>Nombre de la Canción</Form.Label>
          <Form.Control
            type="text"
            name="song"
            placeholder="Nombre de la Canción"
            onChange={handleChange}
            value={form.song}
          />
        </Form.Group>
        <Row className="justify-content-md-center">
          <Col column="lg" lg={4}>
            <Button variant="primary" type="submit" className="my-1">
              Submit
            </Button>
          </Col>
          <Col column="lg" lg={4}>
            <Button variant="primary" type="button" className="my-1"
            onClick={handleSaveSong} disabled={isDisabled && "disabled"}>
              Agregar Canción
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SongForm;
