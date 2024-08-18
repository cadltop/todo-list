import { mainWindow } from "./mainWindow.js";
export class Form extends mainWindow {
    constructor() {
        super('form');
    }

    makeLabel(text) {
        const label = document.createElement('label');
        label.htmlFor = this.replaceSpace(text);
        label.innerHTML = text;
        return label;
    }
    makeButton(text, type) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.type = type;
        return button;
    }
    makeCheckBox(id) {
        const input = this.makeInput(id, 'checkbox');
        const label = this.makeLabel(id);
        return {input, label};
    }
    makeCheckBoxList(listDiv, listItems) {
        let inputList = [];
        for(let item of listItems) {
            if(item){
                const checkBox = this.makeCheckBox(`${item.title}`);
                listDiv.append(checkBox.input, checkBox.label);
                inputList.push(checkBox.input);
            }

        }
        return inputList;
    }
}