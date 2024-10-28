const buttonPressedHandler = () => {
  console.log('Button pressed');
};

btn_addEventListener.addEventListener('click', function() {
    console.log('Mygtukas paspaustas');
});

btn_addEventListener.addEventListener('click', buttonPressedHandler);

btn_removeEventListener.addEventListener('click', function() {
    btn_addEventListener.removeEventListener('click', buttonPressedHandler);
    console.log('Listener removed');
});

const pEventHandler = () => {
    console.log('Paragraph clicked');
};

const pMouseOverHandler = (e) => {
    console.log('Mouse over paragraph', e);
};

p_event.addEventListener('click', pEventHandler);
p_event.addEventListener('mouseover', pMouseOverHandler);

//inline event assigment

myButton.onclick = () => {
    console.log('Button clicked');
}