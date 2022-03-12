function makeGrid() { // used: https://www.youtube.com/watch?v=23AGsRkghjo 
    let tbl = document.getElementById('sketchpad');

    for (let i = 1; i <= 16; i++) {
        let myRow = document.createElement('tr');
        myRow.id = 'row' + i;

        tbl.appendChild(myRow);

        for (let j = 1; j <= 16; j++) {
            let myCell = document.createElement('td');
            myRow.appendChild(myCell);
        }
    }
}
makeGrid();



const squares = document.querySelectorAll('td');
const colorPicker = document.querySelector('.color-picker');
let color = 'black';
colorPicker.addEventListener('input', function () {
    color = colorPicker.value;
});

// turns on sketch pad
function colorMode() {
    squares.forEach(square => square.addEventListener('mouseover', function () {
        this.style.backgroundColor = color;
    }));
}

// when colorBtn clicked, turn on sketch pad
const colorBtn = document.querySelector('.color-btn');
colorBtn.addEventListener('click', function () {
    colorMode();
});

// turns on eraser
function eraserMode() {
    squares.forEach(square => square.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'white';
    }));
}

// when eraserBtn clicked, turn on eraser
const eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', function () {
    eraserMode();
});

const clear = document.querySelector('.clear-btn');
clear.addEventListener('click', function () {
    squares.forEach(square => square.style.backgroundColor = 'white');
});

// turns on rainbowMode
function rainbowMode() {
    squares.forEach(square => square.addEventListener('mouseover', function () {
        this.style.backgroundColor = randomRGB();
    }));
}

// when rainbowBtn clicked, turn on rainbowMode
const rainbowBtn = document.querySelector('.rainbow-btn');
rainbowBtn.addEventListener('click', function () {
    rainbowMode();
});

const toggles = document.querySelectorAll('.toggle');

function removeToggle() { //removes toggle-on for all toggles 
    toggles.forEach(toggle => toggle.classList.remove('toggle-on'));
}

// remove existing toggle-on & apply toggle-on to 
// single toggle such that only 1 toggle at a time
toggles.forEach(toggle => toggle.addEventListener('click', function () {
    removeToggle();
    toggle.classList.add('toggle-on');
}));


function randomRGB() {
    let firstRGB = Math.floor(Math.random() * 256);
    let secondRGB = Math.floor(Math.random() * 256);
    let thirdRGB = Math.floor(Math.random() * 256);
    return `rgb(${firstRGB},${secondRGB},${thirdRGB})`;
}
