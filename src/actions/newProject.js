import './actions.css';
import { projects } from '../data.js';

const newProject = (function() {
    const form = document.createElement('form');

    const nameLabel = makeLabel('Name');
    const nameInput = makeInput('input', 'name', 'text');

    const tasksLabel = makeLabel('Tasks');
    let tasksSelect;

    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.innerHTML = 'Save';

    const renderWindow = function(){
        const createTasksSelect = makeInput('select', 'tasks', undefined);
        tasksSelect = createTasksSelect;
        const header = document.querySelector('h1');
        header.innerHTML = 'New Project';
        const mainSection = document.querySelector('main');
        mainSection.append(form);

        form.append(nameLabel, nameInput);
        form.append(tasksLabel, tasksSelect);
        form.append(saveButton);
    }

    function makeLabel(forVal) {
        const label = document.createElement('label');
        label.htmlFor = forVal.toLowerCase();
        label.innerHTML = `${forVal}:`
        return label;
    }
    function makeInput(element, idVal, typeVal){
        const input = document.createElement(`${element}`);
        input.id = idVal;
        if(typeVal) input.type = typeVal;
        if(idVal === 'tasks') {
            const noneOption = makeOption('None');
            input.append(noneOption);
            input.multiple = true;
            const tasks = projects[0].tasks;
            for(let task of tasks) {
                const option = makeOption(`${task.title}`);
                input.append(option);
            }
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
    return {nameInput, tasksSelect, saveButton, renderWindow}
})();

export {newProject};