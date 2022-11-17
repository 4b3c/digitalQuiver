//make the text larger than normal so you can see it better
textSize(40);
//make four arrays containing each horizontal row of numbers
var row_0 = [0, 0, 0, 0];
var row_1 = [0, 0, 0, 0];
var row_2 = [0, 0, 0, 0];
var row_3 = [0, 0, 0, 0];
//put the four rows in a row so that its like a grid
var array = [row_0, row_1, row_2, row_3];
//declare the variable that we will use to add a new number each round
var new_number = 0;
//declare the variables we will use to acces the "grid"
var hor = 0;
var ver = 0;
//use this variable so the loop can run multiple times instead of once per turn
var next_turn = true;

//create a function to draw the squares and numbers, to use later
var draw_screen = function() {
    //color the background so it isn't just white
    background(210);
    //go through the four vertical rows
    for (var j = 0; j < 4; j+=1) {
        //go through the four horizontal rows
        for (var i = 0; i < 4; i+=1) {
            //color the squares
            fill(200, 180, 240);
            //draw the square at whatever position we are doing
            rect(10 + i * 100, 10 + j * 100, 80, 80);
            //if the number in the position we are looking at isn't zero, draw it
            if (array[j][i] !== 0) {
                //make it black
                fill(0);
                //draw the numbers using i and j to correctly position them
                text(array[j][i], 39 + i * 100, 64 + j * 100);
            }
        }
    }
};

draw = function() {
    //if we're good to add a new number
    if (next_turn === true && keyIsPressed === false) {
        //generate either a 2 or a 4
        new_number = round(random(1, 2));
        new_number = new_number * 2;
        
        //determine a random square to place the new number
        hor = round(random(0, 3));
        ver = round(random(0, 3));
        
        //if the random place we picked is okay, place it there
        if (array[ver][hor] === 0) {
            array[ver][hor] = new_number;
        //otherwise find a new place to put it
        } else {
            for (var j = 0; j < 4; j+=1) {
                for (var i = 0; i < 4; i+=1) {
                    if (array[j][i] === 0) {
                        array[j][i] = new_number;
                        i = 4;
                        j = 4;
                    } else {
                        //if every square is filled, the game is over
                    }
                }
            }
        }
        
        
        next_turn = false;
    }
    
    //All the arrow keys do different things
    if (keyIsPressed && keyCode === UP) {
        for (var j = 1; j < 4; j+=1) {
            for (var i = 0; i < 4; i+=1) {
                //if we hit a number (that isn't zero)
                if (array[j][i] !== 0) {
                    //go through the places they could move from farthest to closest
                    for (var r = j; r > 0; r-=1) {
                        if (array[r - 1][i] === 0) {
                            array[r - 1][i] = array[r][i];
                            array[r][i] = 0;
                        } else if (array[r - 1][i] === array[r][i]) {
                            array[r - 1][i] = array[r][i] * 2;
                            array[r][i] = 0;
                        }
                    }
                }
            }
        }
        next_turn = true;
    }
    if (keyIsPressed && keyCode === DOWN) {
        for (var j = 2; j > -1; j-=1) {
            for (var i = 0; i < 4; i+=1) {
                //if we hit a number (that isn't zero)
                if (array[j][i] !== 0) {
                    //go through the places they could move from farthest to closest
                    for (var r = j; r < 3; r+=1) {
                        if (array[r + 1][i] === 0) {
                            array[r + 1][i] = array[r][i];
                            array[r][i] = 0;
                        } else if (array[r + 1][i] === array[r][i]) {
                            array[r + 1][i] = array[r][i] * 2;
                            array[r][i] = 0;
                        }
                    }
                }
            }
        }
        next_turn = true;
    }
    if (keyIsPressed && keyCode === LEFT) {
        for (var i = 1; i < 4; i+=1) {
            for (var j = 0; j < 4; j+=1) {
                //if we hit a number (that isn't zero)
                if (array[j][i] !== 0) {
                    //go through the places they could move from farthest to closest
                    for (var r = i; r > 0; r-=1) {
                        if (array[j][r - 1] === 0) {
                            array[j][r - 1] = array[r][i];
                            array[j][r] = 0;
                        } else if (array[j][r - 1] === array[j][r]) {
                            array[j][r - 1] = array[j][r] * 2;
                            array[j][r] = 0;
                        }
                    }
                }
            }
        }
        next_turn = true;
    }
    if (keyIsPressed && keyCode === RIGHT) {
        next_turn = true;
    }
    
    draw_screen();
};