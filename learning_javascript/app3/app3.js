const { performance } = require('perf_hooks');



function discrim_calc (pn_par_a, pn_b, pn_c){		//ax^2+bx+c=0
	let vn_discrim = (pn_b)**2 - (4 * pn_par_a * pn_c);		// формула дискриминанта D = b^2-4ac
	return vn_discrim;
}

//console.log(" ddiscrim_calc(-1,-2, 15) = " + discrim_calc(-1,-2, 15))
//console.log(x=(-8)**2) проверка расчета возведения pn_param2 параметра в квадрат "b^2"
//console.log(x= 4*1*-12) проверка расчета умножения 1 и 3 параметров на 4 "4ас""


function quadra (pn_a, pn_b, pn_c){

	let vo_res = {root_1:null, 
				  root_2:null,
				  msg:null}; 

	let vn_discrim = discrim_calc (pn_a, pn_b, pn_c);

	if (vn_discrim < 0) {
		vo_res.msg = "Действительных корней нет";
		return vo_res;
	}
	else if (vn_discrim === 0){
		vo_res.root_1 = (-pn_b) / (2 * pn_a);
		return vo_res;
	}
	else {
		vo_res.root_1 = (-pn_b + Math.sqrt(vn_discrim)) / (2 * pn_a);
		vo_res.root_2 = (-pn_b - Math.sqrt(vn_discrim)) / (2 * pn_a);
		return vo_res;
	}

}



console.log('quadra (-1, -2, 15) = ', quadra(-1, -2, 15));
console.log('quadra (5, 3, 7) = ', quadra(5, 3, 7));
console.log('quadra (1, 12, 36) = ', quadra(1, 12, 36));


let t_start = performance.now();
quadra(-1, -2, 15);
let t_end = performance.now();

console.log('time1 = ', t_end - t_start);





function quadra2 (pn_a, pn_b, pn_c){

	let vn_discrim = discrim_calc (pn_a, pn_b, pn_c);

	if (vn_discrim > 0){
		vn_root_1 = (-pn_b + Math.sqrt(vn_discrim)) / (2 * pn_a);  
		vn_root_2 = (-pn_b - Math.sqrt(vn_discrim)) / (2 * pn_a);  
		return {vn_root_1, vn_root_2, msg: null}; 
	} else

	if (vn_discrim === 0){
		vn_root_1 = -pn_b/ (2 * pn_a);  
		return {vn_root_1, vn_root_2: null, msg: null}; 
	} else

	if (vn_discrim < 0){
		return {vn_root_1: null, vn_root_2: null, msg: "Действительных корней нет"}; 
	}	
}

console.log('quadra2 (-1, -2, 15) = ', quadra2(-1, -2, 15));
console.log('quadra2 (5, 3, 7) = ', quadra2(5, 3, 7));
console.log('quadra2 (1, 12, 36) = ', quadra2(1, 12, 36));


let t_start2 = performance.now();
quadra2(-1, -2, 15);
let t_end2 = performance.now();

console.log('time2 = ', t_end2 - t_start2);


/*let t = performance.now(quadra (-1, -2, 15));
let t2 = performance.now(quadra2 (-1, -2, 15));
console.log("quadra ", t);
console.log("quadra2 ", t2);
*/




//console.log(quadra (vn_root_1, vn_root_2, msg))
//console.log(Math.sqrt(-1))  //ответ 3 расчет квадратного корня из 9=3, из-1= NaN




