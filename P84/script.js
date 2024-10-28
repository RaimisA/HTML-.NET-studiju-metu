const changeLi = () => {
//     const li =document.getElementsByTagName('li');
//     li[0].innerHTML = `I changed the first element`;
const ul = document.getElementsByTagName('ul')[1];
console.log(ul);
const li = ul.getElementsByTagName('li');
//kitas variantas
const li2=document.getElementsByTagName('ul')[1]
.getElementsByTagName('li');
li[0].innerHTML = `I changed the first element`;

console.log(li.length);
};

const changeCoffee = () => {
    const coffeeLi = document.getElementsByClassName('coffee')[0];
    coffeeLi.innerHTML = `Hot chocolate`;
}

const changeMilk = () => {
    const milkLi = document.getElementsByClassName('milk')[0];
    milkLi.innerHTML = `Almond drink`;
}

const changeWaterBgColor = () => {
    const waterLi = document.getElementsByClassName('water')[0];
    waterLi.style.backgroundColor = 'blue';
}

changeStyleOfTea = () => {
    const ul = document.querySelector(`#tea_types`);
    const list_of_li = ul.children;
    for (let li of list_of_li) {
        li.style.margin = '5px';
        li.style.padding = '10px';
        switch (li.innerHTML) {
            case 'White':
                li.style.backgroundColor = 'lightgreen';
                break;
            case 'Black':
                li.style.backgroundColor = 'lightblue';
                break;
            case 'Herbal':
                li.style.backgroundColor = 'lightgrey';
                break;
        }
    }
}

readInputs = () => {
    const inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        console.log(input.value);
    }
}


changePFirst = () => {
    const p = document.querySelector('#p_first');
    p.innerHTML = 'I changed the first paragraph';
}

changePSecond = () => {
    const p = document.querySelector('.p_second');
    p.innerHTML = 'I changed the second paragraph';
}

changePThird = () => {
    const p = document.querySelectorAll('p')[2].textContent = 'I changed the third paragraph';
}