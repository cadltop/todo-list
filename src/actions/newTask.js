import './actions.css';
import { data } from '../data.js';

const newTask = (function() {
    const form = document.createElement('form');
    
    const titleLabel = makeLabel('Title');
    const titleInput = makeInput('input', 'title', 'text');
    
    const descriptionLabel = makeLabel('Description');
    const descriptionTextarea = makeInput('textarea', 'description', undefined);

    const dueDateLabel = makeLabel('due-date');
    dueDateLabel.innerHTML = 'Due Date';
    const dueDateInput = makeInput('input', 'due-date', 'datetime-local');

    const priorityLabel = makeLabel('Priority');
    const prioritySelect = makeInput('select', 'priority', undefined);

    const projectLabel = makeLabel('Project');
    const projectsContainer = makeInput('div', 'projects', undefined);
    let projectsInputs = [];

    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.innerHTML = 'Save';
    
    const renderWindow = function() {
        while(projectsContainer.lastChild){
            projectsContainer.removeChild(projectsContainer.lastChild);
        }
        for(let project of data.projects) {
            if(project !== data.projects[0]) {
                const checkBox = makeCheckBox(`${project.name}`);
                projectsContainer.append(checkBox.input, checkBox.label);
            }
        }
        for(let child of projectsContainer.children){
            if(child.tagName.toLowerCase() === 'input') {
                projectsInputs.push(child);
            }
        }

        const header = document.querySelector('h1');
        header.innerHTML = 'New Task';
        const mainSection = document.querySelector('main');
        mainSection.append(form);

        form.append(titleLabel, titleInput);
        form.append(descriptionLabel, descriptionTextarea);
        form.append(dueDateLabel, dueDateInput);
        form.append(priorityLabel, prioritySelect);
        if(data.projects.length > 1) {form.append(projectLabel, projectsContainer)}
        form.append(saveButton);
    }
    function makeLabel(forVal) {
        const label = document.createElement('label');
        label.htmlFor = forVal.toLowerCase();
        label.innerHTML = `${forVal}`
        return label;
    }
    function makeInput(element, idVal, typeVal){
        const input = document.createElement(`${element}`);
        input.id = idVal;
        if(typeVal) input.type = typeVal;
        if(idVal === 'priority') {
            const options = [makeOption('Low'), makeOption('Medium'), makeOption('High')];
            input.append(options[0], options[1], options[2]);
        }
        function makeOption(valueVal){
            const option = document.createElement('option');
            let valueNew = (valueVal.match(' ') !== null) ? valueVal.replace(' ', '-'): valueVal;
            option.value = valueNew.toLowerCase();
            option.innerHTML = `${valueVal}`;
            return option;
        }
        return input;
    }
    function makeCheckBox(idVal){
        const input = document.createElement('input');
        input.type = "checkbox";
        let idNew = (idVal.match(' ') !== null) ? idVal.replace(' ', '-'): idVal;
        input.id = idNew.toLowerCase();
        const label = makeLabel(idVal);
        return {input, label};
    }

    return {titleInput, descriptionTextarea, dueDateInput, 
        prioritySelect, projectsInputs, saveButton, renderWindow};
})();
export {newTask}