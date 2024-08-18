import { Form } from "./form";
export class ExtendedForm extends Form {
    constructor() {
        super();
    }
    makeCheckBoxList(listDiv, listItems) {
        let inputList = [];
        for(let item of listItems) {
            if(item !== listItems[0] && item) {
                const checkBox = this.makeCheckBox(`${item.name}`);
                listDiv.append(checkBox.input, checkBox.label);
                inputList.push(checkBox.input);
            }
        }
        return inputList;
    }
    makeTextarea(id) {
        const textarea = document.createElement('textarea');
        textarea.id = this.replaceSpace(id);
        return textarea;
    }
    makeSelect(id) {
        const select = document.createElement('select');
        select.id = this.replaceSpace(id);
        return select;
    }
    makeOption(value) {
        const option = document.createElement('option');
        option.value = this.replaceSpace(value);
        option.innerHTML = value;
        return option;
    }
}