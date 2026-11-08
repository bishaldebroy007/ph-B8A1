// PROBLEM 1

const multiplyValue = (value: number, multiplier?: number): number => {
	if (multiplier === undefined) {
		return value * 2;
	} else {
		return value * multiplier;
	}
};

// console.log(multiplyValue(5));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));

// ----------------------------------------------------------------------

// PROBLEM 2
