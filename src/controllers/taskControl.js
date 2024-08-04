import { newTask } from '../actions/newTask.js';
import { Task } from '../classes/task.js';
import { projects } from '../data.js';

const taskControl = (function(){
    const openWindow = newTask.renderWindow;
    newTask.saveButton.addEventListener('click', (event) => {
        const title = newTask.titleInput.value;
        const description = newTask.descriptionTextarea.value;
        const dueDate = newTask.dueDateInput.value;
        const priority = newTask.prioritySelect.value;
        const projectsInputs = newTask.projectsInputs;

        const task = new Task(title, description, dueDate, priority);
        for(let checkBox of projectsInputs) {
            if(checkBox.checked) {
                for(let project of projects){
                    let nameToId = (project.name.match(' ') !== null) ? project.name.replace(' ', '-'): project.name;
                    nameToId.toLowerCase();
                    if(nameToId === checkBox.id){
                        project.tasks.push(task);
                    }
                }
            }
        }
        projects[0].tasks.push(task);

        for(let p in newTask){
            if(p === 'saveButton') {
                break;
            } else {
                newTask[p].value = '';
            }
        }
        for(let checkBox of projectsInputs) {checkBox.checked = false}
        
        event.preventDefault();
    })
    return {openWindow};
})();
export {taskControl};