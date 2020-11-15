import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import classes from './Login.module.css';

const Login = ({ getName, onLogin }) => {

    const getPlayerName = (event) => {
        let value = event.target.value;
        getName(value);
    }

    const onLoginHandler = (event) => {
        event.preventDefault();
        onLogin();
    }

    return (
        <div className={classes.Login}>
            <Form onSubmit={onLoginHandler}>
                <FormGroup>
                    <Label 
                        htmlFor="name"
                    >
                        Enter your name
                    </Label>
                    <Input 
                        type="text" 
                        placeholder="name"
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
        </div>
    )
}

export default Login;