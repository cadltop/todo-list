import { newTask } from '../actions/newTask.js';
import { Task } from '../classes/task.js';
import { data } from '../data.js';
import { taskEdit } from '../objects/taskEdit.js';
import { compareAsc } from 'date-fns';

const taskControl = (function(){
    const openWindow = newTask.renderWindow;
    newTask.saveButton.addEventListener('click', (event) => {
        const title = newTask.titleInput.value;
        const description = newTask.descriptionTextarea.value;
        const dueDate = newTask.dueDateInput.value;
        const priority = newTask.prioritySelect.value;
        const projectsInputs = newTask.projectsInputs;

        if(title.length !== 0 && dueDate.length !== 0) {
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
            let tasksDates = data.projects[0].tasks.map(value => {
                const date = value.dueDate;
                return date;
            }).sort(compareAsc);
            let newTasksList = tasksDates.map(value => {
                for(let task of data.projects[0].tasks) {
                    if(task.dueDate === value){
                        return task;
                    }
                }
            })
            data.projects[0].tasks = newTasksList;

            for(let p in newTask){
                if(p === 'prioritySelect') {
                    newTask[p].children[0].selected = true;
                    break;
                } else {
                    newTask[p].value = '';
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
            for(let project of data.projects){
                for(let task of project.tasks) {
                    if(task.title === taskEdit.titleInitial){
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
        } else {
            alert('Give your task a title and/or a due date.');
        }
        event.preventDefault();
    })

    return {openWindow};
})();
export {taskControl};