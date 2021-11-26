import React from "react";
import classes from "./Profile.module.css";

function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
        ","
      )[num - 1];
}

class ProfileClass extends React.Component {
  render() {
    let days = this.props.registredAt.getDate();
    let months = montoToStr(this.props.registredAt.getMonth());

    return (
      <div>
        <h1>
          Привет, <b className={classes.bold}>{this.props.name.split(` `, 1)}!</b>
        </h1>
        <h2>
          Дата регистрации: {days + ` ` + months + "," + ` ` + this.props.registredAt.getFullYear()}
        </h2>
      </div>
    );
  }
}

export default ProfileClass;