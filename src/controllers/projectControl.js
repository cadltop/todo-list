import { newProject } from '../actions/newProject.js';
import { Project } from '../classes/project.js';
import { projects } from '../data.js';
import { projectView } from '../objects/projectView.js';

const projectControl = (function() {
    const openWindow = newProject.renderWindow;
    newProject.saveButton.addEventListener('click', (event) => {
        let name = newProject.nameInput.value;
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
        projects.push(project);
        newProject.nameInput.value = '';
        for(let checkBox of tasks) {checkBox.checked = false}
        event.preventDefault();
    })
    const openProject = projectView.renderWindow;
    
    return {openWindow, openProject};
})();
export {projectControl};