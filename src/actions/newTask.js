import './actions.css';
const newTask = (function() {
    const form = document.createElement('form');
    
    const titleLabel = makeLabel('Title');
    const titleInput = makeInput('input', 'title', 'text');
    
    const descriptionLabel = makeLabel('Description');
    const descriptionTextarea = makeInput('textarea', 'description', undefined);

    const dueDateLabel = makeLabel('due-date');
    dueDateLabel.innerHTML = 'Due Date:';
    const dueDateInput = makeInput('input', 'due-date', 'date');

    const priorityLabel = makeLabel('Priority');
    const prioritySelect = makeInput('select', 'priority', undefined);

    const projectLabel = makeLabel('Project');
    const projectSelect = makeInput('select', 'project', undefined);

    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.innerHTML = 'Save';
    
    const renderWindow = function() {
        const header = document.querySelector('h1');
        header.innerHTML = 'New Task';
        const mainSection = document.querySelector('main');
        mainSection.append(form);

        form.append(titleLabel, titleInput);
        form.append(descriptionLabel, descriptionTextarea);
        form.append(dueDateLabel, dueDateInput);
        form.append(priorityLabel, prioritySelect);
        form.append(projectLabel, projectSelect);
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
        switch(idVal) {
            case 'priority':
                const options = [makeOption('Low'), makeOption('Medium'), makeOption('High')];
                input.append(options[0], options[1], options[2]);
                break;
            case 'project':
                const projects = document.querySelectorAll('.project > p');
                for(let name of projects) {
                    const option = makeOption(`${name.innerHTML}`);
                    input.append(option);
                }
                break;
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
        prioritySelect, saveButton, renderWindow};
})();
export {newTask}