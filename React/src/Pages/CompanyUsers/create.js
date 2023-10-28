import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Form, Button, FormGroup, FormControl, ControlLabel, Container, Row, Col, Table, InputGroup } from "react-bootstrap";
import { useParams, useHistory, useNavigate } from 'react-router-dom';

function Create() {

  const [user, setUser] = useState([]);
  const {id} = useParams();

  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  //additional contact customer
  const [pesho, setPesho] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tag, setTag] = useState("");
  const [pricing, setPricing] = useState("");
  const data =  {
    // additional contact customer 
    firstname: firstName, 
    lastname: lastName, 
    email: email,
    tag: tag, 
    pricing: pricing
  }


  function Submit(e){
    e.preventDefault();
    axios.post("url", data)
      .then(navigate('/'));

  }
 


  return (
    <Container gap={5}>
      <><>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <br/><br/>
          <Form.Group as={Row} mb={6} mt={10} controlId="validationCustom01">
            <Form.Label as={Col} md={{ span: 1, offset: 2 }}>First name</Form.Label>
           <Col sm={6}>
              <Form.Control
                column sm="2"
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
                required
                type="text"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br/><br/> 

          <Form.Group as={Row} mb={6} mt={10} controlId="validationCustom02">
            <Form.Label as={Col} md={{ span: 1, offset: 2 }}>Last name</Form.Label>
            <Col sm={6}>
              <Form.Control
                column sm="2"
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
                required
                type="text"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          
        <br/><br/>
        <Form.Group as={Row} mb={6} mt={10} controlId="validationCustom01">
          <Form.Label as={Col} md={{ span: 1, offset: 2 }}>Pricing</Form.Label>
          <Col sm={6}>
              <Form.Control
                column sm="2"
                value={pricing}
                onChange={(e)=> setPricing(e.target.value)}
                required
                type="text"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
        </Form.Group>
          <br/><br/>
          <Form.Group as={Row} mb={4}>
            <Button type="submit" as={Col} md={{ span: 2, offset: 4 }} onClick={Submit}>Submit form</Button>
          </Form.Group>
      </Form>
</></>

    </Container>
  );
}

export default Create