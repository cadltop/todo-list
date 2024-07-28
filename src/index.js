import 'normalize.css';
import './index.css';

import { setNewTask } from './actions/newTask.js';
import { setNewProject } from './actions/newProject.js';

const clickable = document.querySelectorAll('.action, .project');
for(let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener('mouseover', () => {
        clickable[i].style = 'background-color: #c8f8d9;';
    })
    clickable[i].addEventListener('mouseout', () => {
        clickable[i].style = 'background-color: ';
    })
}
function emptyMain() {
    const mainSection = document.querySelector('main');
    if(mainSection.lastChild){
        if(mainSection.lastChild !== document.querySelector('h1')){
            mainSection.removeChild(mainSection.lastChild);
        }
    }
}
clickable[0].addEventListener('click', () => {
    emptyMain();
    setNewTask();
})
clickable[1].addEventListener('click', () => {
    emptyMain();
    setNewProject();
})