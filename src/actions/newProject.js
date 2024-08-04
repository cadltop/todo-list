import './actions.css';
import { projects } from '../data.js';

const newProject = (function() {
    const form = document.createElement('form');

    const nameLabel = makeLabel('Name');
    const nameInput = makeInput('input', 'name', 'text');

    const tasksLabel = makeLabel('Tasks');
    const tasksContainer = makeInput('div', 'tasks', undefined);
    let tasksInputs = [];

    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.innerHTML = 'Save';

    const renderWindow = function() {
        const tasks = projects[0].tasks;
        while(tasksContainer.lastChild.htmlFor !== 'none'){
            tasksContainer.removeChild(tasksContainer.lastChild);
        }
        for(let task of tasks) {
            const checkBox = makeCheckBox(`${task.title}`);
            tasksContainer.append(checkBox.input, checkBox.label);
        }
        for(let child of tasksContainer.children){
            if(child.tagName.toLowerCase() === 'input') {
                tasksInputs.push(child);
            }
        }

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
            input.append(noneCheckBox.input, noneCheckBox.label);
        }
        return input;
    }
    function makeCheckBox(idVal){
        const input = document.createElement('input');
        input.type = "checkbox";
        let idNew = (idVal.match(' ') !== null) ? idVal.replace(' ', '-'): idVal;
        input.id = idNew.toLowerCase();
        const label = makeLabel(idNew);
        return {input, label};
    }
    return {nameInput, tasksInputs, saveButton, renderWindow}
})();

export {newProject};