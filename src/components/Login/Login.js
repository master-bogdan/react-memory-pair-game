import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import classes from './Login.module.css';

const Login = props => {

    const getPlayerName = (event) => {
        let value = event.target.value;
        props.getName(value);
    }

    const onLogin = (event) => {
        event.preventDefault();
        props.onLogin();
    }

    return (
        <div className={classes.Login}>
            <Form onSubmit={onLogin}>
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
                        className="w-25 mt-3 btn-info" 
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