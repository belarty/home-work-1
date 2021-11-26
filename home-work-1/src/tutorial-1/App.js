import React from 'react';
import Profile from './Profile';
import ProfileClass from './ProfileClass';


const App = () => {
    return (
        <div>
            <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
            <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
        </div>
    );
};

export default App;