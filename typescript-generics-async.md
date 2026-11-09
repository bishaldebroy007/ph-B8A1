# TypeScript Generics with Asynchronous `Promise<T>` Responses

## Introduction

Maintaining type safety in modern asynchronous Typescript (Javascript) is very difficult especially in large code bases. Because, the type system in Typescript exists only during compile time. Also, dealing with data whose exact type cannot be known in advance may also make the code base complicated. That's where Generics comes into play. This is very common while handling async operations and fetching data from an API. It helps by giving a chance to reuse functions and components that work with different data types while keeping it type safe. For instance, `Promise<T>`. It basically represents the type of value an asynchronous operation will eventually return.

## Understanding Generics and `Promise<T>`

Primarily Generics allows developers to create flexible functions without sacrificing type checking of TypeScript. So, instead of defining functions for every data separately, developers can simply use a generic type parameter such as `T`. Here `T` represents the type of data passed to the function.

```ts
const identity = <T>(value: T): T => {
	return value;
};
const name = identity<string>("Bishal");
const age = identity<number>(26);
```

A similar kind of concept applies to asynchronous operations. A `Promise<T>` tells TypeScript what type of value will be available when the promise resolves.

**Now let's consider an API request:**

```ts
interface User {
	id: number;
	name: string;
}

async function getUser(): Promise<User> {
	const response = await fetch("/api/user");
	const user: User = await response.json();
	return user;
}
```

Here, `Promise<User>` indicates that the function eventually returns a User object. When we call `getUser()`, TypeScript knows that the resolved value has the User structure.

**Reusable asynchronous functions can also be created:**

```ts
async function fetchData<T>(url: string): Promise<T> {
	const response = await fetch(url);
	return response.json() as Promise<T>;
} // the same function can fetch users, products, or other data types by simply changing T.
const user = fetchData<User>("/api/user");
```

## Conclusion

From the code examples it can be seen that, Generics make TypeScript code more reusable and easier to maintain. Also while combined with `Promise<T>`, they provide a clear information of type for asynchronous operations. It eventually reduces very common type related mistakes in large code bases.
