import { newTask } from '../actions/newTask.js';
import { taskEdit } from '../objects/taskEdit.js';
import { Task } from '../classes/task.js';
import { dataHandler } from '../dataHandler.js';

export const taskControl = (function(){
    const openWindow = newTask.renderWindow;
    newTask.saveButton.addEventListener('click', (event) => {
        const title = newTask.titleInput.value;
        const description = newTask.descriptionTextarea.value;
        const dueDate = newTask.dueDateInput.value;
        const priority = newTask.prioritySelect.value;
        const projectsInputs = newTask.projectsInputs;

        if(title.length !== 0 && dueDate.length !== 0) {
            const task = new Task(title, description, dueDate, priority);
            const allTasks = dataHandler.getProject('All Tasks');
            dataHandler.saveTask(task, allTasks);

            for(let checkBox of projectsInputs) {
                if(checkBox.checked) {
                    const allProjects = dataHandler.getAllProjects(); 
                    for(let project of allProjects){
                        let nameToId = ((project.name.match(' ') !== null)
                        ? project.name.replace(' ', '-'): project.name).toLowerCase();
                        if(nameToId === checkBox.id){
                            dataHandler.saveTask(task, project);
                        }
                    }
                }
            }

            for(let propertie in newTask){
                if(propertie === 'prioritySelect') {
                    newTask[propertie].children[0].selected = true;
                    break;
                } else {
                    newTask[propertie].value = '';
                }
            }
            for(let checkBox of projectsInputs) {checkBox.checked = false}
        } else {
            alert('Give your task a title and/or a due date.');
        }
        event.preventDefault();
    })
    taskEdit.saveButton.addEventListener('click', (event) => {
        const title = taskEdit.titleInput.value;
        const description = taskEdit.descriptionTextarea.value;
        const dueDate = taskEdit.dueDateInput.value;
        const priority = taskEdit.prioritySelect.value;
        
        if(title.length !== 0 && dueDate.length !== 0) {
            const allProjects = dataHandler.getAllProjects(); 
            for(let project of allProjects){
                for(let task of project.tasks) {
                    if(task.title === taskEdit.titleInitial){
                        task.title = title;
                        task.description = description;
                        task.dueDate = dueDate;
                        task.priority = priority;

                        dataHandler.sortTasks(project);
                    }
                }
            }
        } else {
            alert('Give your task a title and/or a due date.');
        }
        event.preventDefault();
    })

    return {openWindow};
})();