let items = [];

function updateOutput() {
    const output = document.getElementById('output');
    output.innerText = items.join(', ');
}

function btnPush() {
    const input = document.getElementById('textInput').value;
    if (input) {
        items.push(input);
        updateOutput();
    }
}

function btnPop() {
    items.pop();
    updateOutput();
}

function btnShift() {
    items.shift();
    updateOutput();
}

function btnUnshift() {
    const input = document.getElementById('textInput').value;
    if (input) {
        items.unshift(input);
        updateOutput();
    }
}