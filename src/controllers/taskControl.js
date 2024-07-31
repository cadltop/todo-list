import { newTask } from '../actions/newTask.js';
import { Task } from '../classes/task.js';
import { projects } from '../index.js';

const taskControl = (function(){
    const openWindow = newTask.renderWindow;
    newTask.saveButton.addEventListener('click', (event) => {
        const title = newTask.titleInput.value;
        const description = newTask.descriptionTextarea.value;
        const dueDate = newTask.dueDateInput.value;
        const priority = newTask.prioritySelect.value;

        const task = new Task(title, description, dueDate, priority);
        projects[0].tasks.push(task);
        event.preventDefault();
    })
    return {openWindow};
})();
export {taskControl};