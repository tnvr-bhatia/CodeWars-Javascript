function digPow(n, p) {
	const sum = n
		.toString()
		.split("")
		.reduce((s, c, idx) => {
			return s + Math.pow(c, p + idx);
		}, 0);

	return sum % n ? -1 : sum / n;
}
