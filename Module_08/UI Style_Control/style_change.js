console.log("working")
let myTimeout;
function styleOn() {
    console.log("ON function started");
    const element = document.getElementById("target");
    element.className = 'on';
    element.innerHTML = "I AM NOW ON";
    clearTimeout(myTimeout);
}

function styleOff() {
    console.log("OFF function started");
    const element = document.getElementById("target");
    element.className = 'off';
    element.innerHTML = "I AM NOW OFF";
    clearTimeout(myTimeout);
}

function styleToggle() {
    const element = document.getElementById("target");
    if (element.className == 'on') {
        styleOff();
    } else {
        styleOn();
    }
    myTimeout = setTimeout(styleToggle,1500);
}