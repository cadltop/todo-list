import 'normalize.css';
import './index.css';
import {Task} from './task.js';

const clickable = document.querySelectorAll('.action, .project');
for(let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener('mouseover', () => {
        clickable[i].style = 'background-color: #c8f8d9;';
    })
    clickable[i].addEventListener('mouseout', () => {
        clickable[i].style = 'background-color: ';
    })
}

let todos = [];
document.querySelector('form > button').addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due-date').value;
    const priority = document.querySelector('#priority').value;
    todos.push(new Task(title, description, dueDate, priority));
    console.log(todos);
}, false)