const assert = require('assert');

/*let gn_var1 = 12;
let gn_var2 = 10;
console.log(a);*/
const N_PI = 3.14;



function summ (pn_par1, pn_par2){
	return pn_par1 + pn_par2;
}

function razn (pn_par1,pn_par2){
	return pn_par1 - pn_par2;
}

function umnozhenie (pn_par1, pn_par2){
	return pn_par1 * pn_par2;
}

function delen (pn_par1,pn_par2){
	return pn_par1 / pn_par2;
}


function stepen(pn_par1,pn_par2){
	return pn_par1 ** pn_par2;
}



function stepen2(pn_stepen,pn_num){
	// возводит в степень от 1 до 3 включ любое целое число
	if (pn_stepen == 1){
		 vn_stepenn = pn_num;
		return vn_stepenn;
} 	else 
	if (pn_stepen == 2){
		 vn_stepenn = pn_num * pn_num;
	return vn_stepenn;
} 	else 
	if (pn_stepen == 3){
		 vn_stepenn = pn_num * pn_num * pn_num;
	return vn_stepenn;
}	else 
  console.log('неправильно');
};



console.log("summ = " +summ (10, 3));
console.log("razn = " +razn (5,3));
console.log("umnozhenie = " +umnozhenie (2, 9));
console.log("delen = " +delen (10,2));
console.log("stepen = " +stepen (2,3));
console.log("stepen2 = " +stepen2 (3,2));



let indx = 0;
while(indx < 5){
	console.log("indx = " + indx);
	indx++;
};

console.log('the end');


function exp (pn_num, pn_stepen){
	if (pn_stepen === 0) {
			return 1;
	}; 
	
	if (pn_stepen < 0){
		vn_step_minus = y
	};
	


	let result = pn_num;
	for (let i = 1; i<pn_stepen; i++) {
		result = result * pn_num;			// это можно записать по другому result *= pn_num;
console.log("i =" + i, "pn_stepen = " + pn_stepen, "pn_num = " + pn_num, "result =", result);

/*if (pn_stepen < 0){
		let pn_stepen2 = -1 * pn_stepen
		for (let i = 1; i<pn_stepen2; i++) {
		result = 1/(result * pn_num);	
			};
		};
	};*/

return result;
}

	


//console.log(exp(5,-1));


	assert.equal(exp(2,0), 1);
	assert.equal(exp(2,1), 2);
	assert.equal(exp(2,2), 4);
	assert.equal(exp(2,3), 8);
	assert.equal(exp(2,4), 16);
	assert.equal(exp(2,5), 32);
	assert.equal(exp(2,10), 1024);
	assert.equal(exp(2,-1), 0.5);
	assert.equal(exp(2,-2), 0,25);
	assert.equal(exp(2,-3), 1/8); //0,125
	assert.equal(exp(2,-10), 0.0009765625);






	//console.log ("before ", "i =" + i, "pn_stepen = " + pn_stepen, "result =", result)



	/*function exponentiation(pn_num, pn_stepen){
	let vn_cur_stepen = 0;
	while (vn_cur_stepen <= pn_stepen){
		vn_exp = pn_num+1;
};
}*/
//пока параметр меньше 5 будет выполняться  КАКОЕ-то условие





