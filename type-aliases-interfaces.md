# Type Aliases vs Interfaces in TypeScript: Key Differences and When to Use Them

## Introduction

In TypeScript both `interface` and `type` aliases are used to define custom types and also structure of the data. Initially, they may seem almost the same. Although, they have some crucial differences in how they work, particularly when it is about extending types, defining more complex structures and combining declarations.

## Understanding the Differences

### Interface

It is used mainly to understand the shape of the object,

```ts
interface User {
	id: number;
	name: string;
	email: string;
}
```

### Type aliases

```ts
type User = {
	id: number;
	name: string;
	email: string;
};
```

Although both approaches work perfectly, type aliases are more flexible because they can represent unions, intersections, primitive types, and tuples.

```ts
type Status = "success" | "error" | "loading";
type ID = string | number;
```

Something similar can be achieved by using type aliases

```ts
type Admin = User & {
	role: string;
};
```

One core difference between them is, `declaration merging`. TypeScript allows multiple interfaces with the same name to merge automatically, while duplicate type alias declarations produce an error.

## When Should You Choose One?

Generally I prefer to use interface when defining shape of objects and especially API models. On the other hand, for unions, conditional types, or more complex kinds of combinations, type aliases are better.

## Conclusion

Both of them are useful tools in the TypeScript ecosystem. The choice depends on the problem that needs to be solved. So, understanding their differences helps to write a way of cleaner, more maintainable code.
