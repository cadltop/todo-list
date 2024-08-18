import './actions.css';
import { ExtendedForm } from '../classes/extendedForm.js';
import { dataHandler } from '../dataHandler';

export const newTask = (function() {
    const form = new ExtendedForm();
    
    const titleLabel = form.makeLabel('Title');
    const titleInput = form.makeInput('title', 'text');
    
    const descriptionLabel = form.makeLabel('Description');
    const descriptionTextarea = form.makeTextarea('description');

    const dueDateLabel = form.makeLabel('Due Date');
    const dueDateInput = form.makeInput('due date', 'datetime-local');

    const priorityLabel = form.makeLabel('Priority');
    const prioritySelect = form.makeSelect('priority');

    const lowOption = form.makeOption('Low');
    const mediumOption = form.makeOption('Medium');
    const highOption = form.makeOption('High');
    prioritySelect.append(lowOption, mediumOption, highOption);

    const projectsLabel = form.makeLabel('Projects');
    const projectsDiv = form.makeDiv('projects', undefined);
    let projectsInputs = [];

    const saveButton = form.makeButton('Save', 'submit');
    
    const renderWindow = function() {
        form.clearMainAndHeader();
        const projects = dataHandler.getAllProjects();
        form.emptyElement(projectsDiv);
        newTask.projectsInputs = form.makeCheckBoxList(projectsDiv, projects);

        form.element.append(titleLabel, titleInput);
        form.element.append(descriptionLabel, descriptionTextarea);
        form.element.append(dueDateLabel, dueDateInput);
        form.element.append(priorityLabel, prioritySelect);
        if(projectsInputs.length) form.element.append(projectsLabel, projectsDiv);
        form.element.append(saveButton);
        form.setMainAndHeader('New Task');
    }

    return {titleInput, descriptionTextarea, dueDateInput, 
        prioritySelect, projectsInputs, saveButton, renderWindow};
})();