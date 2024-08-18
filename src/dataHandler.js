import { data } from "./data";
export const dataHandler = {
    deleteTask(taskTitle, project){
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