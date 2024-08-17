import '../actions/actions.css';
import { Form } from '../classes/form.js';

export const projectEdit = (function() {
    const form = new Form();
    
    const nameLabel = form.makeLabel('Name');
    const nameInput = form.makeInput('name', 'text');
    let nameInitial = '';

    const saveButton = form.makeButton('Save', 'submit');

    const renderWindow = function(projectName) {
        nameInput.value = projectName;
        projectEdit.nameInitial = projectName

        form.clearMainAndHeader();
        form.element.append(nameLabel, nameInput);
        form.element.append(saveButton);
        form.setMainAndHeader('');
    }

    return {nameInput, saveButton, renderWindow, nameInitial};
})();