import { data } from "./data";

export const dataHandler = {
    getAllTasks() {
        return data.projects[0].tasks;
    },
    getAllProjects() {
        return data.projects;
    },
    updateProjects(project){
        data.newProjects = project;
    }
}
