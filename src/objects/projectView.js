import './projectView.css';
import { List } from '../classes/list.js';
import { dataHandler } from '../dataHandler.js';
import { taskEdit } from './taskEdit.js';

export const projectView = (function(){
    const list = new List();

    const renderWindow = function(projectName) {
        list.clearMainAndHeader();
        const project = dataHandler.getProject(projectName);
        list.emptyElement(list.element);
        
        const itemsAmmount = project.tasks.length;
        for(let i = 0; i < itemsAmmount; i++) {
            const listItem = document.createElement('li');
            const task = project.tasks[i];
            switch(task.priority) {
                case 'low':
                    listItem.style.backgroundColor = '#baffac';
                    break;
                case 'medium':
                    listItem.style.backgroundColor = '#fffeac';
                    break;
                case 'high':
                    listItem.style.backgroundColor = '#ffacac';
                    break;
            }

            const checkBox = list.makeInput(undefined, 'checkbox');
            if(task.checked) checkBox.checked = true;
            checkBox.addEventListener('click', () => {
                if(checkBox.checked) {
                    task.checked = true;
                } else {
                    task.checked = false;
                }
            })

            const textDiv = list.makeDiv(undefined, 'text');
            const titleDiv = list.makeDiv(undefined, 'title');
            const titleP = list.makeP(task.title, undefined);
            const titleImg = list.makeImg('../res/icons/text-box.svg', 'tasks icon');
            titleDiv.append(titleP, titleImg);
            const dueDateP = list.makeP(task.dueDate, 'due-date');
            textDiv.append(titleDiv, dueDateP);

            const optionsDiv = list.makeDiv(undefined, 'options');
            const editImg = list.makeImg('../res/icons/pencil-box.svg', 'edit icon');
            const deleteImg = list.makeImg('../res/icons/file-excel-box.svg', 'delete icon');
            optionsDiv.append(editImg, deleteImg);

            editImg.addEventListener('click', () => {
                taskEdit.renderWindow(task.title, task.description, task.dueDate, task.priority);
            });
            deleteImg.addEventListener('click', () => {
                if(projectName === 'All Tasks'){
                    const projects = dataHandler.getAllProjects();
                    for(let p = 1; p < projects.length; p++){
                        dataHandler.deleteTask(task.title, projects[p]);
                    }
                }
                dataHandler.deleteTask(task.title, project);
                list.element.removeChild(listItem);
            })

            listItem.append(checkBox);
            listItem.append(textDiv);
            listItem.append(optionsDiv);
            list.element.append(listItem);
        }
        list.setMainAndHeader(projectName);
    }
    
    return {renderWindow};
})();