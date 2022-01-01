import React, { useState, useEffect } from "react";
import ProfilePage from "./components/ProfilePage";
import { IUser } from "./components/Type";
import axios from "axios";
import "./Style.css";
import useDebounce from "./components/useDebounce";

const App = () => {
    const [profile, setProfile] = useState<IUser[]>();
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(inputValue, 1500);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        isClearValue(e);
    };

    useEffect(() => {
        if (debounce) {
            isClearValue("");
        }
    }, [debounce]);

    const isClearValue = (e: any) => {
        if (inputValue !== "") {
            getUser(e);
        } else {
            <div>Поле не должно быть пустым!</div>;
        }
    };

    const getUser = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.get(
                `https://api.github.com/users/${inputValue}`
            );
            setProfile(data);
            setLoading(false);
        } catch (error) {
            alert(`Пользователь ${inputValue} не найден`);
            setLoading(false);
        }
        setInputValue('');
    };
    return (
        <div className="app">
            <div className="app_container">
                <form className="app_form" onSubmit={handleSubmit}>
                    <input
                        value={inputValue}
                        className="app_input"
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Введите имя аккаунта"
                    />
                    <button className="app_form_btn" disabled={loading}>
                        {loading ? "Подождите" : "Найти"}
                    </button>
                </form>
                {profile ? <ProfilePage profile={profile} /> : <div>Пусто</div>}
            </div>
        </div>
    );
};

export default App;
