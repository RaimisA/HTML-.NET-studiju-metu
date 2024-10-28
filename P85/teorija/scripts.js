const divElement = document.createElement('div');
divElement.classList.add(`box`);

const inputElem = document.createElement('input');
inputElem.type = 'text';
inputElem.placeholder = "Write your name";
inputElem.id = 'input-name';

divElement.append(inputElem);

let boxElem = document.getElementById('box-1');

boxElem.append(divElement);

//-----------------------------------------------------

function onOffOnLoad () {
    let boxElem2 = document.getElementById('box-2');
    const light = sessionStorage.getItem('light');
    if (light === 'on') {
        boxElem2.classList.remove('on');
    } else {
        sessionStorage.add('on');
    }
};

function onOff () {
    const light = sessionStorage.getItem('light');
    if (light === 'on') {
        sessionStorage.removeItem('light');
    } else {
        sessionStorage.setItem('light', 'on');
    }
    let boxElem2 = document.getElementById('box-2');
    boxElem2.classList.toggle('on');
};

onOffOnLoad ()

const btn = document.getElementById('on-off-btn');
btn.addEventListener(`click`, onOff);

