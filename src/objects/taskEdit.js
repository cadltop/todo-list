import '../actions/actions.css';
import { ExtendedForm } from '../classes/extendedForm.js';

export const taskEdit = (function() {
    const form = new ExtendedForm();
    
    const titleLabel = form.makeLabel('Title');
    const titleInput = form.makeInput('title', 'text');
    let titleInitial = '';
    
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

    const saveButton = form.makeButton('Save', 'submit');
    
    const renderWindow = function(taskTitle, taskDescription, taskDueDate, taskPriority) {
        titleInput.value = taskTitle;
        taskEdit.titleInitial = taskTitle;
        descriptionTextarea.value = taskDescription;
        dueDateInput.value = taskDueDate;

        const priorityOptions = prioritySelect.children;
        for(let option of priorityOptions) {
            if(option.value === taskPriority) option.selected = true;
        }

        form.clearMainAndHeader();
        form.element.append(titleLabel, titleInput);
        form.element.append(descriptionLabel, descriptionTextarea);
        form.element.append(dueDateLabel, dueDateInput);
        form.element.append(priorityLabel, prioritySelect);
        form.element.append(saveButton);
        form.setMainAndHeader('');
    }
    
    return {titleInput, descriptionTextarea, dueDateInput, 
        prioritySelect, saveButton, renderWindow, titleInitial};
})();