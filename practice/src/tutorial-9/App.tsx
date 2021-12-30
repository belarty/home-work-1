import React, { useState, useEffect } from "react";
import ProfilePage from "./components/ProfilePage";
import { IUser } from "./components/Type";
import axios from "axios";
import style from "./Style.module.css";

const App = () => {
    const [profile, setProfile] = useState<IUser[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputValue = ({ event }: any) => {
        setTimeout(() => {
            const value = event.target;
            setInputValue(value);
        }, 1000);
    };
    useEffect(() => {}, []);
    const getUser = async () => {
        setLoading(true);
        try {
            let response = await axios.get<IUser[]>(
                `https://api.github.com/users/${inputValue}`
            );
            setProfile(response.data);
        } catch (error) {
            alert(error);
        }
        setLoading(false);
    };
    return (
        <div>
            <form className={style.app-form} onSubmit={getUser}>
                <input
                    className={style.app-input}
                    onChange={handleInputValue}
                    placeholder="Введите имя аккаунта"
                />
                <button className={style.app-form_btn} disabled={loading}>
                    Найти
                </button>
            </form>
            {inputValue ? <ProfilePage profile={profile} /> : <div>Пусто</div>}
        </div>
    );
};

export default App;
