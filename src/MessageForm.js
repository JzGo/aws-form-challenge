import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import './App.css';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
        display: 'block',
    },
    menu: {
        width: 200,
    },
}));

export default function MessageForm() {
    const classes = useStyles();

    const [ values, setValues ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = name => event => {
        setValues({...values, [name]:  event.target.value })
    }

    const submitValues = () => {
        console.log(values);
        fetch("https://555jhu1ku6.execute-api.us-west-2.amazonaws.com/default/message-save-and-send", {
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            mode: 'no-cors'
        })
        .then(res => {
            console.log('Success! Message saved')
        })
        .catch(err => console.log(err))

        
    }

    return (
        <form className={classes.container}>
            <TextField 
                id="name"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="email"
                label="Email"
                className={classes.textField}
                value={values.email}
                onChange={handleChange('email')}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="message"
                label="Message"
                className={classes.textField}
                value={values.message}
                onChange={handleChange('message')}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <Fab onClick={submitValues} variant="extended" color="primary" aria-label="Add" className={classes.margin}>
                Submit
            </Fab>
        </form>
    )
}