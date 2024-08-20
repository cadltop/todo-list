import 'normalize.css';
import './index.css';
import { taskControl } from './controllers/taskControl.js';
import { projectControl } from './controllers/projectControl.js';
import { dataHandler } from './dataHandler.js';
import { Project } from './classes/project.js';

const actions = document.querySelectorAll('.action');
const allTasks = document.querySelector('.project.all');

actions[0].addEventListener('click', () => {
    taskControl.openWindow();
})
actions[1].addEventListener('click', () => {
    projectControl.openWindow();
})

const project = new Project('All Tasks');
dataHandler.saveProject(project);
allTasks.addEventListener('click', () => {
    projectControl.openProject('All Tasks');
})

function emptyMain() {
    const mainSection = document.querySelector('main');
    while(mainSection.lastChild !== document.querySelector('h1')){
        mainSection.removeChild(mainSection.lastChild);
    }
    mainSection.lastChild.innerHTML = '';
}
const allProjects = dataHandler.getAllProjects();
for(let p = 1; p < allProjects.length; p++) {
    addProject(allProjects[p].name);
}
function addProject(projectName) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const projectIcon = document.createElement('img');
    projectIcon.src = '../res/icons/folder.svg';
    projectIcon.alt = 'project icon';

    const projectP = document.createElement('p');
    projectP.innerHTML = projectName;

    projectDiv.addEventListener('click', () => {
        projectControl.openProject(projectName);
    })

    const editIcon = document.createElement('img');
    editIcon.src = '../res/icons/pencil-box.svg';
    editIcon.alt = 'edit icon';
    editIcon.addEventListener('click', (event) => {
        projectControl.editProject(projectName);
        event.stopPropagation();
    })
    const deleteIcon = document.createElement('img');
    deleteIcon.src = '../res/icons/file-excel-box.svg';
    deleteIcon.alt = 'delete icon';
    deleteIcon.addEventListener('click', (event) => {
        const projectName = getProjectName(projectP.innerHTML);
        const projectContainer = (function() {
            const projectsContainers = document.querySelectorAll('section#projects > .project');

            for(let pc of projectsContainers) {
                const projectContainerP = pc.querySelector('p');
                if(projectContainerP.innerHTML ===  projectName.innerHTML){
                    return pc;
                }
            }
        })();
        dataHandler.deleteProject(projectName.innerHTML);
        projectContainer.remove();
        emptyMain();

        event.stopPropagation();
    })

    projectDiv.addEventListener('mouseenter', () => {
        projectDiv.append(editIcon, deleteIcon);
    })
    projectDiv.addEventListener('mouseleave', () => {
        while(projectDiv.lastElementChild.tagName.toLowerCase() !== 'p'){
            projectDiv.lastElementChild.remove();
        }
    })

    const projectsSection = document.querySelector('section#projects');

    projectDiv.append(projectIcon, projectP);
    projectsSection.append(projectDiv);
}
function getProjectName(name) {
    const projectsNames = document.querySelectorAll('section#projects > .project > p');
            
    for(let pn of projectsNames) {
        if(pn.innerHTML === name){
            return pn;
        }
    }
}
export {addProject, getProjectName};