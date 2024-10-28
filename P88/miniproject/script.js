const originalList = Array.from(document.querySelectorAll('#nameList li')).map(li => li.textContent);

function addIndex() {
    const listItems = Array.from(document.querySelectorAll('#nameList li'));
    listItems.map((li, index) => li.textContent = `#${index}: ${originalList[index]}`);
}

function resetList() {
    const listItems = Array.from(document.querySelectorAll('#nameList li'));
    listItems.map((li, index) => li.textContent = originalList[index]);
}

function toUpperCase() {
    const listItems = Array.from(document.querySelectorAll('#nameList li'));
    listItems.map((li, index) => li.textContent = originalList[index].toUpperCase());
}

function addLength() {
    const listItems = Array.from(document.querySelectorAll('#nameList li'));
    listItems.map((li, index) => li.textContent = `${originalList[index]} (${originalList[index].length} raidės)`);
}

function toInitials() {
    const listItems = Array.from(document.querySelectorAll('#nameList li'));
    listItems.map((li, index) => {
        const initials = originalList[index].split(' ').map(name => name[0]).join('. ') + '.';
        li.textContent = initials;
    });
}