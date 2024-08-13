import { Project } from './classes/project.js';

const data = {
    projects: [new Project('All Tasks')],
    set newProjects(project) {
        this.projects = project;
    }
}
export {data};