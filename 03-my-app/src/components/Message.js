import React from "react";
import { Alert, Row} from "react-bootstrap";

const Message = ({ msg, bgColor }) => {
  // let styles = {
  //   padding: "1rem",
  //   marginBottom: "1rem",
  //   textAlign: "center",
  //   color: "#fff",
  //   fontWeight: "bold",
  //   backgroundColor: bgColor,
  // };

  return (
    <>
      <Alert variant="danger">
       <Row className="justify-content-center">
          <img src="../sign_error_icon.png" alt="err" style={{width:"4rem"}}/>
        </Row>
        <Alert.Heading>Lo sentimos</Alert.Heading>  
        <p dangerouslySetInnerHTML={{ __html: msg }} />
      </Alert>

    </>
  );
};

export default Message;
