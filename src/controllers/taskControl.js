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

        const task = new Task(title, description, dueDate, priority);
        projects[0].tasks.push(task);
        for(let p in newTask){
            if(p === 'saveButton') {
                break;
            } else {
                newTask[p].value = '';
            }
        }
        event.preventDefault();
    })
    return {openWindow};
})();
export {taskControl};