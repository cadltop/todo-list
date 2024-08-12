import { newProject } from '../actions/newProject.js';
import { Project } from '../classes/project.js';
import { projects } from '../data.js';
import { projectView } from '../objects/projectView.js';
import { emptyMain } from '../index.js';
import { projectEdit } from '../objects/projectEdit.js';

const projectControl = (function() {
    const openWindow = newProject.renderWindow;
    const openProject = projectView.renderWindow;
    const editProject = projectEdit.renderWindow;

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

        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const projectIcon = document.createElement('img');
        projectIcon.src = '../res/icons/folder.svg';
        projectIcon.alt = 'project icon';

        const projectName = document.createElement('p');
        projectName.innerHTML = project.name;

        projectDiv.addEventListener('click', () => {
            emptyMain();
            projectControl.openProject(project.name);
        })
        const editIcon = document.createElement('img');
        editIcon.src = '../res/icons/pencil-box.svg';
        editIcon.alt = 'edit icon';
        editIcon.addEventListener('click', (event) => {
            projectControl.editProject(project.name);
            event.stopPropagation();
        })
        const deleteIcon = document.createElement('img');
        deleteIcon.src = '../res/icons/file-excel-box.svg';
        deleteIcon.alt = 'delete icon';

        projectDiv.addEventListener('mouseenter', () => {
            projectDiv.append(editIcon, deleteIcon);
        })
        projectDiv.addEventListener('mouseleave', () => {
            while(projectDiv.lastElementChild.tagName.toLowerCase() !== 'p'){
                projectDiv.lastElementChild.remove();
            }
        })

        const projectsSection = document.querySelector('section#projects');

        projectDiv.append(projectIcon, projectName);
        projectsSection.append(projectDiv);

        newProject.nameInput.value = '';
        for(let checkBox of tasks) {checkBox.checked = false}
        event.preventDefault();
    })
    projectEdit.saveButton.addEventListener('click', (event) => {
        const name = projectEdit.nameInput.value;
        const projectName = (function() {
            const projectsNames = document.querySelectorAll('section#projects > .project > p');
            
            for(let pn of projectsNames) {
                if(pn.innerHTML === projectEdit.nameInitial){
                    return pn;
                }
            }
        })();
        
        for(let project of projects){
            if(project.name === projectEdit.nameInitial){
                project.name = name;
                projectName.innerHTML = name;
            }
        }
        event.preventDefault();
    })
    
    return {openWindow, openProject, editProject};
})();
export {projectControl};