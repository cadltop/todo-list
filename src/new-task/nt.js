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


    mainSection.append(form);
    form.append(titleLabel);
    form.append(titleInput);
    form.append(descriptionLabel);
    form.append(descriptionTextarea);
    form.append(dueDateLabel);
    form.append(dueDateInput);

    function makeLabel(value) {
        const label = document.createElement('label');
        label.htmlFor = value.toLowerCase();
        label.innerHTML = `${value}:`
        return label;
    }
}