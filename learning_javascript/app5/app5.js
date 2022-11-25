//const t = require('./fsim') 
//export function simple_num(n){}
 {simple_num} from "/home/sergey/projects/study_app/app5/fsim.js";


/*function simple_num(n) {
	for ( let i = 2; i < n; i++){
		if (n % i === 0) return false;
	};
	return true;
}
*/





const diapazon = 10;
for (let i = 2; i <= diapazon; i++){ 
	if (simple_num(i)){
		console.log(i);
	};
}

/*
let vasya = 55555;
console.log(t.simple_num(mngfghfchgcdgfxdfg)); //простое
console.log(t.simple_num(n)); // не простое
*/