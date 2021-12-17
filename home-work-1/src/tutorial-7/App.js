import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import style from './App.module.css';

const App = () => {
    const { handleSubmit, register, formState, reset } = useForm({
        mode: 'onChange',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (values) => {
        console.log(values);
        reset({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    };

    return (
        <div className={style.form}>
            <form>
                <div>
                    <TextField
                        {...register("firstName", {
                            pattern: {
                                value: /^[А-Яа-я]+$/i,
                                message: 'Wrong firstname!'
                            },
                        })}
                        helperText={formState.errors.firstName && formState.errors.firstName.message}
                        error={!!formState.errors.firstName}
                        name='firstName'
                        label="Firstname"
                        placeholder='Введите имя'
                        variant="filled"
                        color="success"
                        focused
                    />
                    <TextField
                        {...register("lastName", {
                            pattern: {
                                value: /^[А-Яа-я]+$/i,
                                message: 'Wrong lastname!'
                            },
                        })}
                        helperText={formState.errors.lastName && formState.errors.lastName.message}
                        error={!!formState.errors.lastName}
                        name='lastName'
                        label="Lastname"
                        placeholder='Введите фамилию'
                        sx={{ marginLeft: 2 }}
                        variant="filled"
                        color="success"
                        focused
                    />
                </div>
                <div>
                    <TextField
                        {...register("email", {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                                message: "Это неверная почта!"
                            },
                        })}
                        helperText={formState.errors.email && formState.errors.email.message}
                        error={!!formState.errors.email}
                        name='email'
                        label="Email"
                        placeholder='Введите почту'
                        variant="filled"
                        color="success"
                        focused
                    />
                    <TextField
                        {...register("password", {
                            required: 'Введите минимум 5 символов!',
                            minLength: 5,
                        })}
                        helperText={formState.errors.password && formState.errors.password.message}
                        error={!!formState.errors.password}
                        name='password'
                        label="Password"
                        type='password'
                        sx={{ marginLeft: 2 }}
                        placeholder='Введите пароль'
                        variant="filled"
                        color="success"
                        focused
                    />
                </div>
            </form>

            <div>
                <br />
                <Button
                    onClick={handleSubmit(onSubmit)}
                    disabled={!formState.isValid}
                    variant="contained">
                    Зарегистрироваться
                </Button>
                <Button
                    onClick={() => {
                        reset({
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: ''
                        })
                    }}
                    sx={{ marginLeft: 2 }}
                    variant="outlined">
                    Очистить
                </Button>
            </div>
        </div>
    );
};

export default App;