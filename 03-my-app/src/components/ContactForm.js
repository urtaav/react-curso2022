import React from "react";
import { useForm } from "../helpers/useForm";

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:""
};

const validationsForm = (form) => {
    let errors = {};

    if(!form.name.trim()){
        errors.name = "EL campo 'Nombre es requerido'";
    }
    return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-md-12 text-center"><h2>ContactForm</h2></div>
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Escribe tu nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.name}
                required
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="Escribe tu email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.email}
                required
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
              <input
                type="text"
                name="subject"
                placeholder="Escribe tu asunto a tratar"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.subject}
                required
              />
              {errors.subject && <p className="text-danger">{errors.subject}</p>}
              <textarea
                name="comments"
                cols="50"
                rows="5"
                placeholder="Escribe tus comentarios"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.comments}
                required
              ></textarea>
              {errors.comments && <p className="text-danger">{errors.comments}</p>}
              
              <input type="submit" value="Submit" className="mt-3" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
