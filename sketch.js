let board = [
	['', '', ''],
	['', '', ''],
	['', '', '']
];

let w;
let h;

let FirstPlayer = 'X';
let SecondPlayer = 'O';
let iPlayer = FirstPlayer;

function setup() {
	createCanvas(400, 400);
	w = width / 3;
	h = height / 3;
}
function equals(a, b, c) {
	if(a == b && b == c && a != '')
		return 1;
}

function checkWinner() {
	let winner = null;
	for (let i = 0; i < 3; i++) {
		if (equals(board[i][0], board[i][1], board[i][2])) {
			winner = board[i][0];
		}
	}
	for (let i = 0; i < 3; i++) {
		if (equals(board[0][i], board[1][i], board[2][i])) {
			winner = board[0][i];
		}
	}
	if (equals(board[0][0], board[1][1], board[2][2])) {
		winner = board[0][0];
	}
	if (equals(board[2][0], board[1][1], board[0][2])) {
		winner = board[2][0];
	}
}

function mousePressed() {
	if (iPlayer == FirstPlayer) {
		let i = floor(mouseX / w);
		let j = floor(mouseY / h);
		if (board[i][j] == '') {
			board[i][j] = FirstPlayer;
			iPlayer = SecondPlayer;
		}
	}else if (iPlayer==SecondPlayer){
		let i = floor(mouseX / w);
		let j = floor(mouseY / h);
		if (board[i][j] == '') {
			board[i][j] = SecondPlayer;
			iPlayer = FirstPlayer;
		}
	}
}

function draw() {
	background(80);
	strokeWeight(1);
	line(w, 0, w, height);
	line(w * 2, 0, w * 2, height);
	line(0, h, width, h);
	line(0, h * 2, width, h * 2);
	strokeWeight(3);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			let x = w * i + w / 2;
			let y = h * j + h / 2;
			let progress = board[i][j];
			let r = w / 3;
			if (progress == SecondPlayer) {
				noFill();
				ellipse(x, y, r * 2);
			} else if (progress == FirstPlayer) {
				line(x - r, y - r, x + r, y + r);
				line(x + r, y - r, x - r, y + r);
			}
	}
	}
	
}
