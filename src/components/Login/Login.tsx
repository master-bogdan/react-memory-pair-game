import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { LoginForm } from './styles';

interface LoginProps {
  getName: Function
  onLogin: Function
}

const Login: React.FC<LoginProps> = ({ getName, onLogin }) => {
  const getPlayerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    getName(event.currentTarget.value);
  };

  const onLoginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <LoginForm>
      <Form onSubmit={onLoginHandler}>
        <FormGroup>
          <Label
            htmlFor="name"
          >
            Enter your name
          </Label>
          <Input
            type="text"
            placeholder="Your name"
            onChange={getPlayerName}
          />
          <Button
            className="mt-3 btn-info"
            type="submit"
          >
            Submit
          </Button>
        </FormGroup>
      </Form>
    </LoginForm>
  );
};

export default Login;
