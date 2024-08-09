import 'normalize.css';
import './index.css';

import { taskControl } from './controllers/taskControl.js';
import { projectControl } from './controllers/projectControl.js';

const actions = document.querySelectorAll('.action');
const allTasks = document.querySelector('.project.all');

actions[0].addEventListener('click', () => {
    emptyMain();
    taskControl.openWindow();
})
actions[1].addEventListener('click', () => {
    emptyMain();
    projectControl.openWindow();
})

allTasks.addEventListener('click', () => {
    emptyMain();
    projectControl.openProject('All Tasks');
})
allTasks.addEventListener('mouseenter', () => {
    const editIcon = document.createElement('img');
    editIcon.src = '../res/icons/pencil-box.svg';
    editIcon.alt = 'edit icon';
    const deleteIcon = document.createElement('img');
    deleteIcon.src = '../res/icons/file-excel-box.svg';
    deleteIcon.alt = 'delete icon';
    allTasks.append(editIcon, deleteIcon);
})
allTasks.addEventListener('mouseleave', () => {
    while(allTasks.lastElementChild.tagName.toLowerCase() !== 'p'){
        allTasks.lastElementChild.remove();
    }
})

function emptyMain() {
    const mainSection = document.querySelector('main');
    while(mainSection.lastChild !== document.querySelector('h1')){
        mainSection.removeChild(mainSection.lastChild);
    }
}
export {emptyMain};