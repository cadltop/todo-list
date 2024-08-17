import './actions.css';
import { Form } from '../classes/form.js';
import { dataHandler } from '../dataHandler';

export const newProject = (function() {
    const form = new Form();
    
    const nameLabel = form.makeLabel('Name');
    const nameInput = form.makeInput('name', 'text');

    const tasksLabel = form.makeLabel('Tasks');
    const tasksDiv = form.makeDiv('tasks');
    let tasksInputs = [];

    const saveButton = form.makeButton('Save', 'submit');

    const renderWindow = function() {
        form.clearMainAndHeader();
        const tasks = dataHandler.getAllTasks();
        form.emptyDiv(tasksDiv);
        tasksInputs = form.makeCheckBoxList(tasksDiv, tasks);

        form.element.append(nameLabel, nameInput);
        if(tasks.length) form.element.append(tasksLabel, tasksDiv);
        form.element.append(saveButton);
        form.setMainAndHeader('New Project');
    }

    return {nameInput, tasksInputs, saveButton, renderWindow}
})();