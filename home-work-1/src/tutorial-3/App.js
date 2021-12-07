import React, { useState } from 'react';
import Students from './Students';

const App = () => {
    const [mainList, setMainList] = useState([]);

    let onMoveAction = (arr) => {
        debugger
        setMainList([...mainList, ...arr]);
    }
    
    return (
        <div>
            <Students onMove={onMoveAction} />
            <ul>{mainList.map((name) => <li>{name}</li>)}</ul>
        </div>
    );
};

export default App;




