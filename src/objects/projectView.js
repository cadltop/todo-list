import './projectView.css';
import {data} from '../data.js';
import { taskEdit } from './taskEdit.js';

const projectView = (function(){
    const list = document.createElement('ul');

    const renderWindow = function(projectName) {
        const project = (function(){
            let project;
            data.projects.forEach((value) => {
                if(value.name === projectName) project = value;
            });
            return project;
        })();
        while(list.lastChild){
            list.removeChild(list.lastChild);
        }
        const itemsAmmount = project.tasks.length;
        for(let i = 0; i < itemsAmmount; i++) {
            const listItem = document.createElement('li');
            switch(project.tasks[i].priority) {
                case 'low':
                    listItem.style.backgroundColor = '#baffac';
                    break;
                case 'medium':
                    listItem.style.backgroundColor = '#fffeac';
                    break;
                case 'high':
                    listItem.style.backgroundColor = '#ffacac';
                    break;
            }

            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            if(project.tasks[i].checked) checkBox.checked = true;
            checkBox.addEventListener('click', () => {
                if(checkBox.checked) {
                    project.tasks[i].checked = true;
                } else {
                    project.tasks[i].checked = false;
                }
            })

            const textDiv = makeDiv('text');

            const titleDiv = makeDiv('title');
            const titleP = makeP(project.tasks[i].title, undefined);
            const titleImg = makeImg('../res/icons/text-box.svg', 'tasks icon');

            const dueDateP = makeP(project.tasks[i].dueDate, 'due-date');

            const optionsDiv = makeDiv('options');
            const editImg = makeImg('../res/icons/pencil-box.svg', 'edit icon');
            const deleteImg = makeImg('../res/icons/file-excel-box.svg', 'delete icon');

            editImg.addEventListener('click', () => viewInfo());
            deleteImg.addEventListener('click', () => {
                if(projectName === 'All Tasks'){
                    for(let p = 1; p < data.projects.length; p++){
                        for(let t = 0; t < data.projects[p].tasks.length; t++) {
                            if(data.projects[p].tasks[t].title === project.tasks[i].title){
                                delete data.projects[p].tasks[t];
                                const newtasks = data.projects[p].tasks.filter((value) => {
                                    return value !== undefined;
                                })
                                data.projects[p].tasks = newtasks;                
                            }
                        }
                    }
                }
                delete project.tasks[i];
                const newtasks = project.tasks.filter((value) => {
                    return value !== undefined;
                })
                project.tasks = newtasks;
                list.removeChild(listItem);
            })
            function viewInfo(){
                taskEdit.renderWindow(project.tasks[i].title, project.tasks[i].description, project.tasks[i].dueDate, project.tasks[i].priority);
            }

            listItem.append(checkBox);
            titleDiv.append(titleP, titleImg);
            textDiv.append(titleDiv, dueDateP);
            listItem.append(textDiv);
            optionsDiv.append(editImg, deleteImg);
            listItem.append(optionsDiv);
            list.append(listItem);
        }
        const header = document.querySelector('h1');
        header.innerHTML = projectName;
        const mainSection = document.querySelector('main');

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