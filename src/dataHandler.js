import { data } from "./data";
export const dataHandler = {
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