import { mainWindow } from "./mainWindow";
export class List extends mainWindow {
    constructor() {
        super('ul');
    }
    
    makeP(text, className) {
        const p = document.createElement('p');
        p.innerHTML = text;
        if(className) p.className = className;
        return p;
    }
    makeImg(src, alt) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        return img
    }
}