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
squares.forEach(square => square.addEventListener('mouseover', function(e) {
    this.style.backgroundColor = 'black'}))