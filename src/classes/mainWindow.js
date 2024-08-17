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
}