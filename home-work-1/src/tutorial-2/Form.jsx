import React from 'react';
import classes from './Form.module.css';

const Form = () => {
    let login = '';
    let password = '';

    function handleChangeInput(event, name) {
        if (name === 'login') {
            login = event.target.value
        }
        if (name === 'password') {
            password = event.target.value
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        
        console.log({ login, password });

        if (login === '' || password === '') {
            alert('Error, write something!')
        }
    }
    return (
        <form onSubmit={handleSubmit} className={classes.auth}>
            <input onChange={(e) => handleChangeInput(e, 'login')} type="text" name='login' />
            <input onChange={(e) => handleChangeInput(e, 'password')} type="password" name='password' />
            <button type='submit'>Войти</button>
            <button type='reset'>Очистить поля для ввода</button>
        </form>
    );
};

export default Form;