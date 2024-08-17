import { data } from "./data";

export const dataHandler = {
    getAllTasks() {
        return data.projects[0].tasks;
    },
    updateProjects(project){
        data.newProjects = project;
    }
}
