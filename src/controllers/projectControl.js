import { addProject, getProjectName } from '../index.js';
import { newProject } from '../actions/newProject.js';
import { projectEdit } from '../objects/projectEdit.js';
import { projectView } from '../objects/projectView.js';
import { Project } from '../classes/project.js';
import { dataHandler } from '../dataHandler.js';

export const projectControl = (function() {
    const openWindow = newProject.renderWindow;
    const openProject = projectView.renderWindow;
    const editProject = projectEdit.renderWindow;

    newProject.saveButton.addEventListener('click', (event) => {
        let name = newProject.nameInput.value;
        if(name.length !== 0) {
            const tasksInputs = newProject.tasksInputs;
        
            const project = new Project(name);
            const projects = dataHandler.getAllProjects();

            for(let checkBox of tasksInputs) {
                if(checkBox.checked) {
                    const allTasks = dataHandler.getAllTasks();
                    for(let task of allTasks) {
                        let titleToId = ((task.title.match(' ') !== null) 
                        ? task.title.replace(' ', '-') : task.title).toLowerCase();
                        if(titleToId === checkBox.id) {
                            dataHandler.saveTask(task, project);
                        }
                    }
                }
            }
            dataHandler.saveProject(project);

            addProject(project.name, projects);

            newProject.nameInput.value = '';
            for(let checkBox of tasksInputs) {checkBox.checked = false}
        } else {
            alert('Give your project a name.');
        }
        event.preventDefault();
    })
    projectEdit.saveButton.addEventListener('click', (event) => {
        const name = projectEdit.nameInput.value;

        if(name.length !== 0) {
            const projectName = getProjectName(projectEdit.nameInitial);
            
            const projects = dataHandler.getAllProjects();
            for(let project of projects){
                if(project.name === projectEdit.nameInitial) {
                    dataHandler.changeProjectName(project, name);
                    projectName.innerHTML = name;
                }
            }
        } else {
            alert('Give your project a name.');
        }
        event.preventDefault();
    })
    
    return {openWindow, openProject, editProject};
})();