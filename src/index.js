import 'normalize.css';
import './index.css';

import { taskControl } from './controllers/taskControl.js';
import { projectControl } from './controllers/projectControl.js';

const actions = document.querySelectorAll('.action');
const allTasks = document.querySelector('.project.all');

actions[0].addEventListener('click', () => {
    taskControl.openWindow();
})
actions[1].addEventListener('click', () => {
    projectControl.openWindow();
})

allTasks.addEventListener('click', () => {
    projectControl.openProject('All Tasks');
})
function emptyMain() {
    const mainSection = document.querySelector('main');
    while(mainSection.lastChild !== document.querySelector('h1')){
        mainSection.removeChild(mainSection.lastChild);
    }
    mainSection.lastChild.innerHTML = '';
}
export {emptyMain};