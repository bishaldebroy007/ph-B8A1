// PROBLEM 1

const multiplyValue = (value: number, multiplier?: number): number => {
	if (multiplier === undefined) {
		return value * 2;
	} else {
		return value * multiplier;
	}
};

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);

// console.log(multiplyValue(5));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));

// ----------------------------------------------------------------------

// PROBLEM 2

type InputType = string | number | boolean;
type ReturnType = string | number;

const processInput = (input: InputType): ReturnType => {
	if (typeof input === "string") {
		return input.trim().toLowerCase();
	} else if (typeof input === "number") {
		return input * 10;
	} else {
		return input ? "Active" : "Inactive";
	}
};

processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

// ----------------------------------------------------------------------

// PROBLEM 3

const formatCoordinate = (coord: readonly [number, number, string]): string => {
	const [latitude, longitude, locationName] = coord;
	return `Location: ${locationName} (${latitude}, ${longitude})`;
};

formatCoordinate([23.81, 90.41, "Dhaka"]);

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

// ----------------------------------------------------------------------

// PROBLEM 4

const concatenateArrays = <T>(...array: T[][]): T[] => {
	return array.reduce((acc, curr) => acc.concat(curr), []);
};

concatenateArrays([1, 2], [3, 4], [5]);

// ------------------------------------------------------

// PROBLEM 5
