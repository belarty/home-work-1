import React from "react";

class TodoApp extends React.Component {
    render() {
        let inputValue = ['fefeaf'];
        let searchValue;
        let ul = document.getElementById('ul_elem');
        function moveTask() {
            inputValue.push(searchValue);
            debugger
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

        return <div>
            <input value={searchValue} placeholder='Введите задачу'/>
            <button onClick={moveTask}>Добавить задачу</button>
            <ul id='ul_elem'>{inputValue}</ul>
        </div>;
    }
}

export default TodoApp;