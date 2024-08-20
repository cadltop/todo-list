import { data } from "./data";
import { compareAsc } from 'date-fns';

export const dataHandler = {
    saveTask(task, project) {
        project.tasks.push(task);
        this.sortTasks(project);
    },
    deleteTask(taskTitle, project) {
        for(let t = 0; t < project.tasks.length; t++) {
            if(project.tasks[t].title === taskTitle){
                delete project.tasks[t];
                project.tasks = project.tasks.filter((value) => {
                    return value !== undefined;
                })                
            }
        }
        data.updateStorage(data.projects);
    },
    sortTasks(project) {
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
        data.updateStorage(data.projects);
    },
    getAllTasks() {
        return data.projects[0].tasks;
    },
    saveProject(project) {
        switch(project.name){
            case 'All Tasks':
                if(data.projects[0]) {
                    break;
                }
            default:
                data.projects.push(project);
                data.updateStorage(data.projects);
                break;
        }
    },
    deleteProject(projectName) {
        for(let p = 1; p < data.projects.length; p++) {
            if(data.projects[p].name === projectName){
                delete data.projects[p];
                const newArray = data.projects.filter((value) => {
                    return value !== undefined;
                })
                this.updateProjects(newArray) ;
                break;
            }
        }
        data.updateStorage(data.projects);
    },
    changeProjectName(project, newName) {
        project.name = newName;
        data.updateStorage(data.projects);
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