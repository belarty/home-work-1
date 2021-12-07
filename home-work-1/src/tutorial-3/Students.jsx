import React, { useState } from 'react';

const Students = ({ onMove }) => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    let handleClickAdd = () => {
        inputValue && setItems((prev) => [...prev, inputValue]); 
        setInputValue('');
    }

    let handleClickMove = () => {
        if (onMove) {
            onMove(items);
            setItems([]);
        }
    }

    return (
        <div>
            {items.map((str) => <li key={str}>{str}</li>)}
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add name" />
            <button onClick={handleClickAdd}>Добавить имя</button>
            <button onClick={handleClickMove}>Переместить</button>
        </div>
    );
};

export default Students;