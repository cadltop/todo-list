import { newTask } from '../actions/newTask.js';
import { Task } from '../classes/task.js';
import { data } from '../data.js';
import { taskView } from '../objects/taskView.js';
import { compareAsc } from 'date-fns';

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
                for(let project of data.projects){
                    let nameToId = (project.name.match(' ') !== null) ? project.name.replace(' ', '-'): project.name;
                    nameToId.toLowerCase();
                    if(nameToId === checkBox.id){
                        project.tasks.push(task);

                        let tasksDates = project.tasks.map(value => {
                            const date = value.dueDate;
                            return date;
                        }).sort(compareAsc);
                        let newTasksList = tasksDates.map(value => {
                            for(let task of project.tasks) {
                                if(task.dueDate === value){
                                    return task;
                                }
                            }
                        })
                        project.tasks = newTasksList;
                    }
                }
            }
        }
        data.projects[0].tasks.push(task);

        for(let p in newTask){
            if(p === 'prioritySelect') {
                newTask[p].children[0].selected = true;
                break;
            } else {
                newTask[p].value = '';
            }
        }
        for(let checkBox of projectsInputs) {checkBox.checked = false}
        
        event.preventDefault();
    })
    taskView.saveButton.addEventListener('click', (event) => {
        const title = taskView.titleInput.value;
        const description = taskView.descriptionTextarea.value;
        const dueDate = taskView.dueDateInput.value;
        const priority = taskView.prioritySelect.value;
        
        for(let project of data.projects){
            for(let task of project.tasks) {
                if(task.title === taskView.titleInitial){
                    task.title = title;
                    task.description = description;
                    task.dueDate = dueDate;
                    task.priority = priority;
                    
                    let tasksDates = project.tasks.map(value => {
                        const date = value.dueDate;
                        return date;
                    }).sort(compareAsc);
                    let newTasksList = tasksDates.map(value => {
                        for(let task of project.tasks) {
                            if(task.dueDate === value){
                                return task;
                            }
                        }
                    })
                    project.tasks = newTasksList;
                }
            }
        }
        event.preventDefault();
    })
    return {openWindow};
})();
export {taskControl};