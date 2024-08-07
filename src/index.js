import 'normalize.css';
import './index.css';

import { taskControl } from './controllers/taskControl.js';
import { projectControl } from './controllers/projectControl.js';

const clickable = document.querySelectorAll('.action, .project');
for(let i = 0; i < clickable.length; i++) {
    switch(i)  {
        case 0:
            clickable[i].addEventListener('click', () => {
                emptyMain();
                taskControl.openWindow();
            });
            break;
        case 1:
            clickable[i].addEventListener('click', () => {
                emptyMain();
                projectControl.openWindow();
            });
            break;
        default:
            clickable[i].addEventListener('click', () => {
                emptyMain();
                projectControl.openProject();
            });
            break;
    }
}

function emptyMain() {
    const mainSection = document.querySelector('main');
    while(mainSection.lastChild !== document.querySelector('h1')){
        mainSection.removeChild(mainSection.lastChild);
    }
}