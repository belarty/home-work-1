import React, { useState } from "react";

const App = () => {
    interface ReduxApi {
        createdAt?: string;
        name?: string;
        email?: string;
        phone?: string;
        position?: string;
        id?: number;
        map?: any;
    }
    const [users, setUsers] = useState<Array<ReduxApi>>([]);

    const getUsers = async () => {
        try {
            let response = await fetch(
                "https://5c3755177820ff0014d92711.mockapi.io/users"
            );
            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                throw Error('Ошибка при запросе данных');
            }
        } catch (error) {
            console.log("ERROR:", error);
        }
    };
    return (
        <div>
            {users.map((users) => (
                <li key={users.id}>{users.name}</li>
            ))}
            <button onClick={getUsers}>Запросить пользователей!</button>
        </div>
    );
};

export default App;
