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
            })
            break;
        case 1:
            clickable[i].addEventListener('click', () => {
                emptyMain();
                projectControl.openWindow();
            })
            break;
        default:
            clickable[i].addEventListener('click', () => {
                emptyMain();
                projectControl.openProject();
            })
            clickable[i].addEventListener('mouseenter', () => {
                const editIcon = document.createElement('img');
                editIcon.src = '../res/icons/pencil-box.svg';
                editIcon.alt = 'edit icon';
                const deleteIcon = document.createElement('img');
                deleteIcon.src = '../res/icons/file-excel-box.svg';
                deleteIcon.alt = 'delete icon';
                clickable[i].append(editIcon, deleteIcon);
            })
            clickable[i].addEventListener('mouseleave', () => {
                while(clickable[i].lastElementChild.tagName.toLowerCase() !== 'p'){
                    clickable[i].lastElementChild.remove();
                }
            })
            break;
    }
}
function emptyMain() {
    const mainSection = document.querySelector('main');
    while(mainSection.lastChild !== document.querySelector('h1')){
        mainSection.removeChild(mainSection.lastChild);
    }
}