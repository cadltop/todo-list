import {projects} from '../data.js';
const projectView = (function(){
    const list = document.createElement('ul');

    const renderWindow = function() {
        while(list.lastChild){
            list.removeChild(list.lastChild);
        }
        const itemsAmmount = projects[0].tasks.length;
        for(let i = 0; i < itemsAmmount; i++) {
            const listItem = document.createElement('li');

            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';

            const textDiv = makeDiv('text');

            const titleDiv = makeDiv('title');
            const titleP = makeP(projects[0].tasks[i].title, undefined);
            const titleImg = makeImg('../res/icons/text-box.svg', 'tasks icon');

            const dueDateP = makeP(projects[0].tasks[i].dueDate, 'due-date');

            const optionsDiv = makeDiv('options');
            const editImg = makeImg('../res/icons/pencil-box.svg', 'edit icon');
            const deleteImg = makeImg('../res/icons/file-excel-box.svg', 'delete icon');

            listItem.append(checkBox);
            titleDiv.append(titleP, titleImg);
            textDiv.append(titleDiv, dueDateP);
            listItem.append(textDiv);
            optionsDiv.append(editImg, deleteImg);
            listItem.append(optionsDiv);
            list.append(listItem);
        }
        const header = document.querySelector('h1');
        header.innerHTML = 'All Tasks';
        const mainSection = document.querySelector('main');
        mainSection.append(list);

        if(itemsAmmount > 0) mainSection.append(list);
    }
    
    function makeDiv(classVal) {
        const div = document.createElement('div');
        div.classList.add(classVal);
        return div;
    }
    function makeP(text, classVal) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        if(classVal) paragraph.classList.add = classVal;
        return paragraph
    }
    function makeImg(srcVal, altVal) {
        const image = document.createElement('img');
        image.src = srcVal;
        image.alt = altVal;
        return image
    }
    
    return {renderWindow};
})();
export {projectView};