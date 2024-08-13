import '../actions/actions.css';
import { emptyMain } from '../index.js';

const taskView = (function() {
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

    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.innerHTML = 'Save';
    
    let titleInitial = '';
    const renderWindow = function(taskTitle, taskDescription, taskDueDate, taskPriority) {
        const header = document.querySelector('h1');
        header.innerHTML = '';
        const mainSection = document.querySelector('main');
        emptyMain()
        titleInput.value = taskTitle;
        taskView.titleInitial = taskTitle;
        descriptionTextarea.value = taskDescription;
        dueDateInput.value = taskDueDate;
        const priorityOptions = prioritySelect.children;
        for(let option of priorityOptions) {
            if(option.value === taskPriority) option.selected = true;
        }
        mainSection.append(form);

        form.append(titleLabel, titleInput);
        form.append(descriptionLabel, descriptionTextarea);
        form.append(dueDateLabel, dueDateInput);
        form.append(priorityLabel, prioritySelect);
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
    return {titleInput, descriptionTextarea, dueDateInput, 
        prioritySelect, saveButton, renderWindow, titleInitial};
})();
export {taskView};