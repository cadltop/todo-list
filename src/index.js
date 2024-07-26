import 'normalize.css';
import './index.css';

const clickable = document.querySelectorAll('.action, .project');
for(let item in clickable) {
    clickable[item].addEventListener('mouseover', () => {
        clickable[item].style = 'background-color: #c8f8d9;';
    })
    clickable[item].addEventListener('mouseout', () => {
        clickable[item].style = 'background-color: ';
    })
}