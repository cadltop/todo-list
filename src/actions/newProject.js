import './actions.css';
export function setNewProject(){
    const header = document.querySelector('h1');
    header.innerHTML = 'New Project';
    
    const form = document.createElement('form');

    const nameLabel = makeLabel('Name');
    const nameInput = makeInput('input', 'name', 'text');

    const mainSection = document.querySelector('main');
    mainSection.append(form);

    form.append(nameLabel, nameInput);

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
}