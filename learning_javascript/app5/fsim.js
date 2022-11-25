function simple_num(n) {
	for ( let i = 2; i < n; i++){
		if (n % i === 0) return false;
	};
	return true;
}

