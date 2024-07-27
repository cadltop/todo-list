import 'normalize.css';
import './index.css';

const clickable = document.querySelectorAll('.action, .project');
for(let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener('mouseover', () => {
        clickable[i].style = 'background-color: #c8f8d9;';
    })
    clickable[i].addEventListener('mouseout', () => {
        clickable[i].style = 'background-color: ';
    })
}