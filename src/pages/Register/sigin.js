import React from 'react'
import { Form, Button, Stack } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
     <Form style={{width: "512px", maxWidth: "100%"}} className="mx-auto">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name="fName" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" name="lName" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Re-enter the email</Form.Label>
            <Form.Control type="email" placeholder="Re-enter the email" name="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" required />
        </Form.Group>
        <Link to="/PersonalPage" style={{ textDecoration: 'none' }}>
          <Button variant="primary" type="submit" className="w-100">Submit</Button>
        </Link>
        <Stack>
          <label className='btn-login mx-auto my-4'> Already have account ?
              <Link to="/login" style={{textDecoration:'none'}}>
                <span style={{cursor:"pointer"}} className="text-danger"> Click to Login </span>
              </Link>
          </label>
            </Stack>
          
        </Form>
  );
};
export default Signup;
