import React from 'react';
class App extends React.Component {
    function moveTask() {
    let inputValue = ['fefeaf'];
let searchValue;
let ul = document.querySelector('#ul_elem');
ul = ['gfsfsa'];
    inputValue.push(searchValue);
    inputValue.forEach(element => {
        ul.innerHTML += `
            <li>
            ${element}
            </li>
            `;
    }
    );
    document.querySelector('input').value = '';
}
render() {
    return <div>
        <input value={searchValue} placeholder='Введите задачу' />
        <button onClick={moveTask}>Добавить задачу</button>
        <ul id='ul_elem'>asda{inputValue}</ul>
    </div>;
}
}

export default App;





