import { mainWindow } from "./mainWindow.js";
export class Form extends mainWindow {
    constructor(){
        super('form');
    }

    makeLabel(text){
        const label = document.createElement('label');
        label.htmlFor = text.toLowerCase();
        label.innerHTML = text;
        return label;
    }
    makeInput(id, type){
        const input = document.createElement('input');
        input.id = this.setId(id);
        input.type = type;
        return input;
    }
    makeDiv(id){
        const div = document.createElement('div');
        div.id = this.setId(id);
        return div;
    }
    emptyDiv(div) {
        while(div.lastChild){
            div.lastChild.remove();
        }
    }
    makeButton(text, type){
        const button = document.createElement('button');
        button.innerHTML = text;
        button.type = type;
        return button;
    }
    makeCheckBox(id){
        const input = this.makeInput(id, 'checkbox');
        const label = this.makeLabel(id);
        return {input, label};
    }
    makeCheckBoxList(listDiv, listItems){
        let inputList = [];
        for(let item of listItems) {
            const checkBox = this.makeCheckBox(`${item.title}`);
            listDiv.append(checkBox.input, checkBox.label);
            inputList.push(checkBox.input);
        }
        return inputList;
    }
}