import './nt.css';
export function setNewTask(){
    const mainSection = document.querySelector('main');
    const header = document.querySelector('h1');
    header.innerHTML = 'New Task';

    const form = document.createElement('form');
    
    const titleLabel = makeLabel('Title');
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    
    const descriptionLabel = makeLabel('Description');
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.id = 'description';

    const dueDateLabel = makeLabel('due-date');
    dueDateLabel.innerHTML = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'due-date';

    const priorityLabel = makeLabel('Priority');
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    
    const lowOption = makeOption('Low');
    const mediumOption = makeOption('Medium');
    const highOption = makeOption('High');

    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.innerHTML = 'Save';

    mainSection.append(form);
    form.append(titleLabel);
    form.append(titleInput);
    form.append(descriptionLabel);
    form.append(descriptionTextarea);
    form.append(dueDateLabel);
    form.append(dueDateInput);
    form.append(priorityLabel);
    form.append(prioritySelect);
    prioritySelect.append(lowOption);
    prioritySelect.append(mediumOption);
    prioritySelect.append(highOption);
    form.append(saveButton);

    function makeLabel(forVal) {
        const label = document.createElement('label');
        label.htmlFor = forVal.toLowerCase();
        label.innerHTML = `${forVal}:`
        return label;
    }
    function makeOption(valueVal){
        const option = document.createElement('option');
        option.value = valueVal.toLowerCase();
        option.innerHTML = `${valueVal}`;
        return option;
    }
}