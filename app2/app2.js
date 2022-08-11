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

//пока параметр меньше 5 будет выполняться  КАКОЕ-то условие





