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

const formatCoordinate = (coord: readonly [number, number, string]): string => {
	const [latitude, longitude, locationName] = coord;
	return `Location: ${locationName} (${latitude}, ${longitude})`;
};

formatCoordinate([23.81, 90.41, "Dhaka"]);

const concatenateArrays = <T>(...array: T[][]): T[] => {
	return array.reduce((acc, curr) => acc.concat(curr), []);
};

concatenateArrays([1, 2], [3, 4], [5]);

interface Course {
	title: string;
	students: number;
	isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
	return courses.filter((courses) => courses.isPublished === true && courses.students >= minStudents);
};

const courses = [
	{ title: "TypeScript Mastery", students: 120, isPublished: true },
	{ title: "Draft Course", students: 200, isPublished: false },
	{ title: "Basic HTML", students: 45, isPublished: true },
	{ title: "Next.js Pro", students: 85, isPublished: true },
];

getPopularCourses(courses, 80);

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
	return items.map((item) => item[key]);
};

const users = [
	{ id: 1, name: "Rakib", role: "Admin" },
	{ id: 2, name: "Sadia", role: "Editor" },
	{ id: 3, name: "Tariq", role: "Subscriber" },
];

pluckValues(users, "name");
pluckValues(users, "id");

class Employee {
	constructor(
		protected name: string,
		private baseSalary: number,
	) {}

	getDetails(): string {
		return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
	}
}

class Manager extends Employee {
	constructor(
		name: string,
		baseSalary: number,
		private department: string,
	) {
		super(name, baseSalary);
	}

	getRoleInfo(): string {
		return `Manager of ${this.department}: ${this.name}`;
	}
}

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();

const employee = new Employee("Raj", 6000);
employee.getDetails();

const validateAgeAsync = async (age: number): Promise<string> => {
	if (age >= 18) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve("Access Granted");
			}, 1000);
		});
	} else {
		throw new Error("Access Denied: Must be 18 or older");
	}
};
