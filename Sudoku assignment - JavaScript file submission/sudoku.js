//TASK ONE

function makeRows(row) {
	var puzzle = [];
    for(var i =0; i<=3 ;i++)
    { 
      puzzle.push(row.slice()); 
    }
return puzzle
    
} 
//var row = [1, 2, 3, 4]; 
//console.log(makeRows(row));

//var row = [1, 2, 3, 4];
//var puzzle = makeRows(row);
//console.log(visPuzzle(puzzle));

//TASK TWO
// this is the constructor of the queue data structure
function Queue() {
	this.arr = [];
	this.head = function() {
		return this.arr[0];
	};
	this.dequeue = function() {
		if (this.arr.length == 0) {
			return "Queue underflow!";
		} else {
			return this.arr.shift();
		}
	};
	this.enqueue = function(o) {
		this.arr.push(o);
	};
	this.isEmpty = function() {
			return this.arr.length == 0;
	};
}

function permuteRow(row, p) {
  var queue = new Queue;
  var n = row.length;
  var array = new Array;
  for(var i = 0;i<n; i++ )
      {
          queue.enqueue(row[i]);
      }
      while(p!=0)
      {
      queue.enqueue(queue.head());
      queue.dequeue();
      p--;
      }
  while(!(queue.isEmpty()))
  {
    array.push(queue.head());
    queue.dequeue();
  }
    return array;
}


//var row = [1, 2, 3, 4];
//console.log(permuteRow(row, 2));

//TASK THREE

function permutePuzzle(puzzle, p, q, r) {
 var array = new Array;
    
  array.push(puzzle[1].slice());
  array.push(permuteRow(puzzle[1],p).slice());
  array.push(permuteRow(puzzle[2],q).slice());
  array.push(permuteRow(puzzle[3],r).slice());
  
return array;
}

//var row = [1, 2, 3, 4];
//var puzzle = makeRows(row); 
//console.log(permutePuzzle(puzzle , 1, 2, 3));

//TASK FOUR

function linearSearch(array, item) {
	var n = array.length;
	for (var i = 0; i < n; i++) {
		if (array[i] == item) {
			return true;
		}
 	}
	return false;
}

function checkColumn(puzzle, j) {
    var check = [];
    for(var i =0;i<=3;i++)
    {
        check[i] = puzzle[i][j]
    }
    for(var k=1; k<=4;k++)
    {
        if(!linearSearch(check,k))
        {
            return false;
        }
    }
    return true;
}

//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]]; 
//console.log(checkColumn(puzzle , 1));
//puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [2, 3, 4, 1], [4, 1, 2, 3]]; 
//console.log(checkColumn(puzzle , 2));

//TASK FIVE

function colCheck(puzzle) {
var Array5 =[];
    for(var i=0; i<=3;i++)
    {
        Array5[i]==puzzle[i][j]
    }
    for(var j=1;j<4;j++)
    {
        if(!checkColumn(puzzle,j))
        {
            return false;
        }
    }
    return true;
}


//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]]; 
//console.log(colCheck(puzzle));
//puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [2, 3, 4, 1], [4, 1, 2, 3]]; 
//console.log(colCheck(puzzle));
//TASK SIX

function makeGrid(puzzle, row1, row2, col1, col2) {
	//this copies all elements in a grid from co-ordinates (row1, col1) to (row2,col2) to an array
	var array = [];
	for (var i = row1; i <= row2; i++) {
		for (var j = col1; j <= col2; j++) {
			array.push(puzzle[i][j]); 
		}
	}
	return array;
}


function checkGrid(puzzle, row1, row2, col1, col2) {
var array2 = [];
    
array2.push(makeGrid(puzzle, row1, row2, col1, col2))
    
    for(var j=1; j<=4;j++)
    {
        if(!linearSearch(array2[0],j))
        {
            return false;
        }
    }
    return true;
    

}


//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]]; 
//console.log(checkGrid(puzzle , 0, 1, 2, 3));
//puzzle = [[1, 2, 3, 4], [3, 4, 1, 2], [4, 1, 2, 3], [4, 1, 2, 3]]; 
//console.log(checkGrid(puzzle , 0, 1, 0, 1));
//TASK SEVEN

function checkGrids(puzzle) {
    for(var i=0; i<=3;i=i+2)
    {
        for(var k=0;k<=3;k=k+2)
        {
            for(var j=1;j<=4;j++)
            {
                if(!checkGrid(puzzle,i,i+1,k,k+1,j))
                {
                return false;
                }
            }
            
        }
        return true;
    }
}
    
//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]]; 
//console.log(checkGrids(puzzle));
//puzzle = [[1, 2, 3, 4], [3, 4, 1, 2], [4, 1, 2, 3], [2, 3, 4, 1],]; 
//console.log(checkGrids(puzzle));

//TASK EIGHT

function makeSolution(row) {
   var array3 = permutePuzzle(makeRows(row),2,3,1)
    if(!checkGrid(array3)&&!colCheck(array3))
    {
        return false;
    }
    return array3;

}
//var row = [1, 2, 3, 4]; 
//console.log(makeSolution(row));

// TASK NINE

// a function to randomly select n (row,column) entries of a 2d array with size columns and size rows, where size is assumed to be an integer and n is also assumed to be an integer
function entriesToDel(n) {
	if (n <= 16) {
		// this creates an array of all the rows and column indices
		var array = [];
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				array[j+(4 * i)] = [i,j];
			}
		}
		// this creates a new array, called array2 to store randomly chose elements of the array that will be removed, and then removes those elements from array
		var num = 16;
		var array2 = [];
		for (var i = 0; i < n; i++) {
			var x = Math.round( (num - i - 1) * Math.random() );
			array2[i] = array[x];
			array.splice(x,1);
		}
		return array2;
	}
	return "Number of elements to delete exceeds size of array!";
}
//console.log(entriesToDel(5));

function genPuzzle(row, n) {
var a = entriesToDel(n)
var k = makeSolution(row)
for(var i =0;i<a.length; i++)
{
var row = a[i][0];
    var col = a[i][1];
    k[row][col]= " ";
    
}
  return k;
}
//var row = [1, 2, 3, 4]; 
//console.log(genPuzzle(row, 5));

// The following function is used to visualise the puzzles

function visPuzzle(puzzle) {
	var viz = "";

	for (var i = 0; i < puzzle.length; i++) {
		for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "----";
		}
		viz = viz + "-\n";
		for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "| " + puzzle[i][j] + " ";
		}
		viz = viz + "| " + "\n";
	}
	for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "----";
	}
	viz = viz + "-";

	return viz;
}








// DO NOT DELETE BELOW THIS LINE OR NOTHING WILL WORK AND YOU MAY GET NO MARKS

module.exports = {makeRows : makeRows, makeSolution : makeSolution, genPuzzle : genPuzzle, checkGrid : checkGrid, checkGrids : checkGrids, colCheck : colCheck, checkColumn : checkColumn, permuteRow : permuteRow, permutePuzzle : permutePuzzle}

function createPuzzle() {
	function swap(array, i, j) {
		var x = array[i];
		array[i] = array[j];
		array[j] = x;
		return array;
	}
	var row = [2,3,1,4];
	var rand = [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())]
	if (rand[0]==1) {
		swap(row,0,1);
	}
	if (rand[1]==1) {
		swap(row,1,2);
	}
	if (rand[2]==1) {
		swap(row,2,3);
	}
	if (rand[3]==1) {
		swap(row,0,3);
	}
	var puzzle = genPuzzle(row,3 + Math.round(7*Math.random()));
	var string = "";
	for (var i = 0; i < 4; i++) {
		string += "<tr>";
		for (var j = 0; j < 4; j++) {
  		string += "<td>" + puzzle[i][j] + "</td>";
		}
		string += "</tr>";
	}
	document.getElementById("1").innerHTML = string
}