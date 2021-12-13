import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar, { ConfigProvider } from 'react-avatar';


const App = () => {
    const [comments, setComments] = useState([]);

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
        const { name, value } = event.target;
        setInputValue({
            ...inputValue, [name]: value
        })
    }

    const handleRemove = (event) => {
        if(event.target.id){
            setInputValue({})
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
                <ul>{comments.map((comment) => comment
                    ? <div className={styles.commentsFormList} key={comment.id}>
                        <div>
                            <ConfigProvider color>
                                <Avatar size={70} name={comment.fullName} round={true} />
                            </ConfigProvider>
                        </div>
                        <div className={styles.commentsAvatar}>
                            <h3 className={styles.fullName}>{comment.fullName}</h3>
                            <li className={styles.text} rows={4}>{comment.text}</li>
                        </div>
                        <Button variant="contained" onClick={handleRemove} type='remove'>Удалить комментарий</Button>
                    </div>
                    : null
                )}
                </ul>
                <div className={styles.commentsForm}>
                    <TextField onChange={handleChangeValue} name='fullName' sx={{ marginBottom: 2, marginTop: 2, width: 400 }} id="filled-basic" label="Имя" placeholder='Введите имя' />
                    <TextField onChange={handleChangeValue} name='email' sx={{ marginBottom: 2, width: 400 }} id="filled-basic" label="Почта" placeholder='Введите почту' />
                    <TextField
                        onChange={handleChangeValue}
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