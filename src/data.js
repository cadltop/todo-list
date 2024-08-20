import { Project } from './classes/project.js';
export const data = {
    projects: [new Project('All Tasks')],
    set newProjects(project) {
        this.projects = project;
    }
}