let w;
let h;
function setup() {
	  createCanvas(400, 400);
	  background(90);
 	  w = width / 3;
	  h = h / 3;
	  strokeWeight(1);
	  line(w, 0, w, height);
	  line(w * 2, 0, w * 2, height);
	  line(0, h, width, h);
	  line(0, h * 2, width, h * 2);
}

function draw() {
	 
}
let board = [
	  ['', '', ''],
	  ['', '', ''],
	  ['', '', '']
];

let FirstPlayer = 'X'
let SecondPlayer = 'O'
let iPlayer;

function equals(a, b, c) {
	  if(a == b && b == c && a != '')
		    return 1;
}

function Winner(){
	  for(let i = 0;i<3;i++){
		      if(equals(board[i][0],board[i][1],board[i][2]))
			         iPlayer = board[i][0]; 
		    }
	  for (let i = 0; i < 3; i++) {
		      if (equals(board[0][i], board[1][i], board[2][i]))
			            iPlayer = board[0][i];
			          
		    }

  	 if (equals(board[0][0], board[1][1], board[2][2])) 
	         iPlayer = board[0][0];
         
	 if (equals(board[2][0], board[1][1], board[0][2])) 
	          iPlayer = board[2][0];
                 
 }
