import { newProject } from '../actions/newProject.js';
import { Project } from '../classes/project.js';
import { projects } from '../data.js';

const projectControl = (function() {
    const openWindow = newProject.renderWindow;
    newProject.saveButton.addEventListener('click', (event) => {
        const name = newProject.nameInput.value;
        // const tasks = newProject.tasksSelect.value;inde  
        const project = new Project(name);
        projects.push(project);
        console.log(projects);
        event.preventDefault();
    })
    
    return {openWindow};
})();
export {projectControl};