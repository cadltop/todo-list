export class mainWindow extends Document {
    #main = document.querySelector('main');
    #header = document.querySelector('h1');
    constructor(element){
        super();
        this.element = document.createElement(`${element}`);
    }
    setMainAndHeader(headerText) {
        this.#header.innerHTML = headerText;
        this.#main.append(this.element);
    }
    setId(id) {
        const newId =(id.match(' ') !== null) 
        ? id.replace(' ', '-'): id;
        return newId;
    }
}