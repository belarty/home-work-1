import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar, { ConfigProvider } from 'react-avatar';


const App = () => {
    const [comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState({
        fullName: '',
        email: '',
        text: '',
    })

    const handleInputValue = (event) => {
        const { name, value } = event.target;
        setInputValue({ ...inputValue, [name]: value })
    }
    const addNewComment = (e) => {
        e.preventDefault();
        setComments([...comments, { ...inputValue, createdAt: new Date() }]);
    }
    const handleRemoveComment = (createdAt) => {
        const remove = comments.filter((comment) => comment.createdAt !== createdAt)
        setComments([...remove])
    }

    useEffect(() => {
        const commentTo = JSON.parse(localStorage.getItem('comments')) || []
        setComments([...commentTo])
    }, []);
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments]);

    return (
        <div className={styles.form}>
            <form onSubmit={addNewComment}>
                <h1>Обратная Связь: </h1>
                {comments.map((comment) =>
                    <div key={comment.createdAt} className={styles.commentsFormList}>
                        <div>
                            <ConfigProvider color>
                                <Avatar size={70} round={true} />
                            </ConfigProvider>
                        </div>
                        <div className={styles.commentsAvatar}>
                            <h3>{comment.fullName}</h3>
                            <li className={styles.text} rows={4}>{comment.text}</li>
                        </div>
                        <Button onClick={() => handleRemoveComment(comment.createdAt)} variant="contained">Удалить комментарий</Button>
                    </div>
                )}
                <div className={styles.commentsForm}>
                    <TextField onChange={handleInputValue} name='fullName' sx={{ marginBottom: 2, marginTop: 2, width: 400 }} id="filled-basic" label="Имя" placeholder='Введите имя' />
                    <TextField onChange={handleInputValue} name='email' sx={{ marginBottom: 2, width: 400 }} id="filled-basic" label="Почта" placeholder='Введите почту' />
                    <TextField
                        onChange={handleInputValue}
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