import { newProject } from '../actions/newProject.js';
import { Project } from '../classes/project.js';
import { projects } from '../data.js';

const projectControl = (function() {
    const openWindow = newProject.renderWindow;
    newProject.saveButton.addEventListener('click', (event) => {
        const name = newProject.nameInput.value;
        const tasks = newProject.tasksInputs;
        
        const project = new Project(name);
        for(let checkBox of tasks) {
            if(checkBox.checked) {
                for(let task of projects[0].tasks){
                    let titleToId = (task.title.match(' ') !== null) ? task.title.replace(' ', '-'): task.title;
                    titleToId.toLowerCase();
                    if(titleToId === checkBox.id){
                        project.tasks.push(task);
                    }
                }
            }
        }
        
        
        event.preventDefault();
    })
    
    return {openWindow};
})();
export {projectControl};