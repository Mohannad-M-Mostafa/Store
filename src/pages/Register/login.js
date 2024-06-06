import React from 'react'
import { Form, Button , Stack } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    function onSubmit(event) {
        event.preventDefault();
        const { email, password } = event.target;
        console.log({ email, password });
        navigate("/PersonalPage", { replace: true });
    }
    return (
        <Form style={{width: "512px", maxWidth: "100%"}} className="mx-auto" onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" required />
        </Form.Group>
        <Link to="/PersonalPage" style={{ textDecoration: 'none' }}>
          <Button variant="primary" type="submit" className="w-100">Submit</Button>
        </Link>
        <Link to="/ForgotPassword" style={{ textDecoration: 'none' }}>
          <Button variant="primary" type="send" className="w-50">ForgotPassword</Button>
        </Link>
            
        <Stack>
          <label className='btn-login mx-auto my-4'> dont have an account? 
              <Link to="/Signup" style={{textDecoration:'none'}}>
                <span style={{cursor:"pointer"}} className="text-danger"> Click to register </span>
              </Link>
          </label>
            </Stack>
          
        </Form>
      );
}

export default login;
