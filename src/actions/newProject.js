import './actions.css';
import { projects } from '../data.js';

const newProject = (function() {
    const form = document.createElement('form');

    const nameLabel = makeLabel('Name');
    const nameInput = makeInput('input', 'name', 'text');

    const tasksLabel = makeLabel('Tasks');
    let tasksContainer;

    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.innerHTML = 'Save';

    const renderWindow = function(){
        const createTasksContainer = makeInput('div', 'tasks', undefined);
        tasksContainer = createTasksContainer;

        const header = document.querySelector('h1');
        header.innerHTML = 'New Project';
        const mainSection = document.querySelector('main');
        mainSection.append(form);

        form.append(nameLabel, nameInput);
        form.append(tasksLabel, tasksContainer);
        form.append(saveButton);
    }

    function makeLabel(forVal) {
        const label = document.createElement('label');
        label.htmlFor = forVal.toLowerCase();
        label.innerHTML = forVal;
        return label;
    }
    function makeInput(element, idVal, typeVal){
        const input = document.createElement(`${element}`);
        input.id = idVal;
        if(typeVal) input.type = typeVal;
        if(idVal === 'tasks') {
            const noneCheckBox = makeCheckBox('None');
            input.append(noneCheckBox.checkBoxInput, noneCheckBox.checkBoxLabel);
            const tasks = projects[0].tasks;
            for(let task of tasks) {
                const checkBox = makeCheckBox(`${task.title}`);
                input.append(checkBox.checkBoxInput, checkBox.checkBoxLabel);
            }
        }
        function makeCheckBox(idVal){
            const checkBoxInput = document.createElement('input');
            checkBoxInput.type = "checkbox";
            let idNew = (idVal.match(' ') !== null) ? idVal.replace(' ', '-'): idVal;
            checkBoxInput.id = idNew.toLowerCase();
            const checkBoxLabel = makeLabel(idVal);

            return {checkBoxInput, checkBoxLabel};
        }
        return input;
    }
    return {nameInput, tasksContainer, saveButton, renderWindow}
})();

export {newProject};