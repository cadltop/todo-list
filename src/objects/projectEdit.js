import '../actions/actions.css';
import { emptyMain } from '../index.js';

const projectEdit = (function() {
    const form = document.createElement('form');

    const nameLabel = makeLabel('Name');
    const nameInput = makeInput('input', 'name', 'text');

    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.innerHTML = 'Save';

    let nameInitial = '';
    const renderWindow = function(projectName) {
        const header = document.querySelector('h1');
        header.innerHTML = '';
        const mainSection = document.querySelector('main');
        emptyMain();
        nameInput.value = projectName;
        projectEdit.nameInitial = projectName
        mainSection.append(form);

        form.append(nameLabel, nameInput);
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
        return input;
    }
    return {nameInput, saveButton, renderWindow, nameInitial};
})();

export {projectEdit};