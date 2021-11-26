import React from 'react';
import classes from './Profile.module.css';


function montoToStr(num) {
    return num > 12 || num < 1
        ? null
        : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')[
        num - 1
        ];
}

const Profile = ({name, registredAt}) => {
    let days = registredAt.getDate();
    let months = montoToStr(registredAt.getMonth());
    return (
        <div>
            <h1>Привет, <b className={classes.bold}>{name.split(` `, 1)}!</b></h1>
            <h2>Дата регистрации: {days + ` ` + months + ','  + ` ` +registredAt.getFullYear()}</h2>
        </div>
    );
};

export default Profile;