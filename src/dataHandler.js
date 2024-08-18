import { data } from "./data";
import { compareAsc } from 'date-fns';
export const dataHandler = {
    saveTask(task, project) {
        project.tasks.push(task);
        project.tasks = (function(){
            let tasksDates = project.tasks.map(value => {
                return value.dueDate;
            }).sort(compareAsc);
            return tasksDates.map(value => {
                for(let task of project.tasks) {
                    if(task.dueDate === value){
                        return task;
                    }
                }
            })
        })();
    },
    deleteTask(taskTitle, project) {
        for(let t = 0; t < project.tasks.length; t++) {
            if(project.tasks[t].title === taskTitle){
                delete project.tasks[t];
                projects.tasks = project.tasks.filter((value) => {
                    return value !== undefined;
                })                
            }
        }
    },
    getAllTasks() {
        return data.projects[0].tasks;
    },
    getAllProjects() {
        return data.projects;
    },
    updateProjects(projects) {
        data.newProjects = projects;
    },
    getProject(projectName) {
        return data.projects.find((value) => {
            if(value.name === projectName) return value;
        })
    }
}