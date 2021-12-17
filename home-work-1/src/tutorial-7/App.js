import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import style from './App.module.css';

const App = () => {
    const { handleSubmit, register, formState, reset } = useForm({
        formState: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (values) => {
        console.log(values)
    };

    const isValid = !!formState.firstName && !!formState.lastName && !!formState.email && !!formState.password;
    return (
        <div className={style.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField
                        {...register("firstName", {
                            required: 'Это обязательное поле!',
                            pattern: {
                                value: /^[А-Яа-я]+$/i,
                                message: 'Wrong firstname!'
                            },
                            maxLength: 15
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
                            required: 'Это обязательное поле!',
                            pattern: {
                                value: /^[А-Яа-я]+$/i,
                                message: 'Wrong lastname!'
                            },
                            maxLength: 15
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
                            required: 'Это обязательное поле!',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                                message: "Это неверная почта!"
                            },
                            maxLength: 15
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
                            required: "Это обязательное поле!",
                            minLength: {
                                value: 5,
                                message: "Минимальная длина 5 символов"
                            }
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
                <Button onClick={() => {
                    handleSubmit(onSubmit)
                    reset(
                        {
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: ''
                        }
                    )
                }}
                    disabled={!isValid}
                    variant="contained">
                    Зарегистрироваться
                </Button>
                <Button onClick={() => {
                    reset(
                        {
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: ''
                        }
                    )
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