import { useState , useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function Bootstraplogin() {
  const [validated, setValidated] = useState(false);
    const fnref=useRef(null);
    const lnref=useRef(null);

  const handleSubmit = (event) => {
   

      event.preventDefault();
      event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
     console.log(fnref.current.value);
     console.log(lnref.current.value);
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='w-50 mx-auto mt-5 p-5 border'>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            ref={fnref}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>Looks bad!</Form.Control.Feedback>
        </Form.Group>
     
      </Row>
    
        <Row className="mb-3">
               <Form.Group as={Col}  controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue="Otto"
                    ref={lnref}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>


        </Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default Bootstraplogin;