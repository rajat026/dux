import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { useAuth } from '../hooks/useAuth';
import { setItemInStorage } from '../utils/helper';

/* eslint-disable */

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const auth = useAuth();
  const onLoginClick = (e) => {
    e.preventDefault();
    auth.login();
    setItemInStorage('user', {
      email,
    });
    navigate('/');
  };

  const SignUp = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center h-100vh">
        <Col sm="12" md={6}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center mb-5">
                Login
              </CardTitle>
              <Form onSubmit={onLoginClick}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>
                <Button color="primary">Login</Button>
                <Button
                  onClick={() => SignUp()}
                  className="sign-up-button"
                  color="primary"
                >
                  Sign Up
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
