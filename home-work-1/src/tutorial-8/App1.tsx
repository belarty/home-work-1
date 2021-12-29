import React, { useState } from 'react';

const App1 = () => {
    interface ReduxApi {
        createdAt: string;
        name: string;
        email: string;
        phone: string;
        position: string;
        id: number;
        map?: any;
    }
    const [users, setUsers] = useState<ReduxApi>(
        {
            createdAt: "Nothing",
            name: "Ivan",
            email: "email",
            phone: "7912412421",
            position: "position 0",
            id: 0,
        },
    );
    const getUsers = async () => {
        try {
                await fetch(
                    "https://5c3755177820ff0014d92711.mockapi.io/users"
                ).then((response) => {
                    setUsers({...users, ...response});
                });
            }
            catch (error: any | null) {
                console.log('ERROR:', error);
            }
        };

    return (
        <div>
            <ul>
                {users.map((users: any) => <li key={users.id}>{users}</li>)}
            </ul>
            <button onClick={getUsers}>Запросить пользователей!</button>
        </div>
    );
};

export default App1;