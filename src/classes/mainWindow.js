export class mainWindow extends Document {
    #main = document.querySelector('main');
    #header = document.querySelector('h1');

    constructor(element) {
        super();
        this.element = document.createElement(`${element}`);
    }
    
    setMainAndHeader(headerText) {
        this.#header.innerHTML = headerText;
        this.#main.append(this.element);
    }
    clearMainAndHeader() {
        while(this.#main.lastChild !== this.#header){
            this.#main.lastChild.remove();
        }
        this.#header.innerHTML = '';
    }
    replaceSpace(string) {
        const newString = ((string.match(' ') !== null) 
        ? string.replace(' ', '-'): string).toLowerCase();
        return newString;
    }
    emptyElement(element) {
        while(element.lastChild){
            element.lastChild.remove();
        }
    }
    makeInput(id, type) {
        const input = document.createElement('input');
        if(id) input.id = this.replaceSpace(id);
        input.type = type;
        return input;
    }
    makeDiv(id, className) {
        const div = document.createElement('div');
        if(id) div.id = this.replaceSpace(id);
        if(className) div.className  = className;
        return div;
    }
}