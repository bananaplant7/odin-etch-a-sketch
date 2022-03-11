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

const clear = document.querySelector('.clear-btn');
clear.addEventListener('click', function () {
    squares.forEach(square => square.style.backgroundColor = '#FBF8F1');
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

