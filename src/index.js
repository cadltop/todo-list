import 'normalize.css';
import './index.css';

import { taskControl } from './controllers/taskControl.js';
import { projectControl } from './controllers/projectControl.js';

const clickable = document.querySelectorAll('.action, .project');
for(let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener('mouseover', () => {
        clickable[i].style = 'background-color: #c8f8d9;';
    })
    clickable[i].addEventListener('mouseout', () => {
        clickable[i].style = 'background-color: ';
    })
}

clickable[0].addEventListener('click', () => {
    emptyMain();
    taskControl.openWindow();
})
clickable[1].addEventListener('click', () => {
    emptyMain();
    projectControl.openWindow();
})

function emptyMain() {
    const mainSection = document.querySelector('main');
    if(mainSection.lastChild){
        if(mainSection.lastChild !== document.querySelector('h1')){
            mainSection.removeChild(mainSection.lastChild);
        }
    }
}