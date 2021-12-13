import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import TextField from '@mui/material/TextField';
import { Comments } from './Comments';
import Button from '@mui/material/Button';
import Avatar, { ConfigProvider } from 'react-avatar';


const App = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            fullName: "Вася Пупкин",
            email: "vasya@mail.ru",
            createdAt: "Thu Oct 14 2021 13:41:01",
            text: '.'
        },
        {
            id: 2,
            fullName: "Вася Пупкин",
            email: "vasya@mail.ru",
            createdAt: "Thu Oct 14 2021 13:41:01",
            text: '.'
        }
    ]);

    const [inputValue, setInputValue] = useState({
        id: Date.now(),
        fullName: '',
        email: '',
        text: '',
    });

    const handleOnClick = (e) => {
        e.preventDefault()
        setComments(
            [...comments, inputValue]
        )
        e.target.reset();
        setInputValue({})
    }

    const handleChangeValue = (event) => {
        const { name, value, text, email } = event.target;
        console.log([name], value, text);
        setInputValue({
            ...inputValue, [name]: value, [email]: email, [text]: value, createdAt: Date.now()
        })
    }

    const handleRemove = (e) => {
        const { key } = e.target;
        if (key === e.target.key) {
            e.target.parentElement.remove();
        }
    }

    useEffect(() => {
        console.log('ОТРАБОТАЛ РЕНДЕР');
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments]);

    useEffect(() => {
        console.log('ОЧИСТИЛ СПИСОК');
    }, [setInputValue]);

    return (
        <div className={styles.form}>
            <form onSubmit={handleOnClick}>
                <h1>Обратная Связь: </h1>
                <ul>{comments.map((comment, index) => comment
                    ? <div className={styles.commentsFormList} key={comment.id} number={index + 1}>
                        <div>
                            <ConfigProvider color>
                                <Avatar size={70} name={comment.fullName} round={true} />
                            </ConfigProvider>
                        </div>
                        <div className={styles.commentsAvatar}>
                            <h3 className={styles.fullName}>{comment.fullName}</h3>
                            <li className={styles.text} rows={4}>{comment.text}</li>
                        </div>
                        <Button variant="contained" onClick={(e) => handleRemove(e)} type='remove'>Удалить комментарий</Button>
                    </div>
                    : null
                )}
                </ul>
                <div className={styles.commentsForm}>
                    <Comments />
                    <TextField onChange={(e) => handleChangeValue(e)} name='fullName' sx={{ marginBottom: 2, marginTop: 2, width: 400 }} id="filled-basic" label="Имя" placeholder='Введите имя' />
                    <TextField onChange={(e) => handleChangeValue(e)} name='email' sx={{ marginBottom: 2, width: 400 }} id="filled-basic" label="Почта" placeholder='Введите почту' />
                    <TextField
                        onChange={(e) => handleChangeValue(e)}
                        sx={{ marginBottom: 2, width: 400 }}
                        name='text'
                        label="Комментарий"
                        id="filled-basic"
                        multiline
                        placeholder='Текст...'
                        rows={4}
                    />
                    <div className={styles.button}><Button variant="contained" type='submit'>Отправить комментарий</Button></div>
                    </div>
            </form>
        </div>
    );
};

export default App;