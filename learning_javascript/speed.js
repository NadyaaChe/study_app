const {performance} = require('perf_hooks');


function speed_test(){

	let i = 0;
	let j = 0;
	let k = 0;
	let r = 0.0;
	const t0 = performance.now();
	while (i < 10000) {
		j = 0;
		while (j < 10000) {
			k = 0;
			while(k < 10){
				r = (r + (i * j + k)/100.0)/47.0;
				k++;
			}
			j++;
		}
		i++;
    }
    const t1 = performance.now();
    console.log('time = ', Math.round(t1-t0));
}

//speed_test();



function speed_test23(){
	let i = 0;
	let j = 0;
	while (i < 5) {
		j = 0;
		while (j < 5) {
			console.log('i = ', i, ' j = ', j)
			j++;
		}
		i++;
    }
}


//speed_test23();
function speed_test_for(){

	for(let i = 0; i < 5; i++){
		for(let j = 0; j < 5; j++){
			console.log('i = ', i, ' j = ', j)
		}
	}
}

const t0 = performance.now();
speed_test_for();
const t1 = performance.now();
console.log('time = ', Math.round(t1-t0));