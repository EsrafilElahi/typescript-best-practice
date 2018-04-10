// * usage in conditional types

type MyType<T> = T extends infer R ? R : never; // never is the type which doesn't exist
type T1 = MyType<{ b: string }> // T1 is { b: string; }
type T2 = MyType<{}> // T2 is { }

// infer R ---> points to T => depends to T

// =============================== 

type ArrayElementType<T> = T extends (infer E)[] ? E : T
type item1 = ArrayElementType<number[]> // type of item1 is 'number' --> E
type item2 = ArrayElementType<{name: string}> // type of item2 is {name: string} --> E

// =============================== 

type MyType2<T> = T extends R2 ? R2 : never; // error, R2 undeclared (undefined)

// ===============================

type R = { a: number }
type MyType3<T> = T extends R ? R : never; // compare T with type R
type T3 = MyType3<{ b: string }> // T3 is never


// ===============================

type R3 = { a: number }
type MyType4<T> = T extends infer R3 ? R3 : never;
type T4 = MyType4<{ b: string }> // { b: string; }

// ===============================

type GetFromDeepObj<T> = T extends { a: { b: { c: infer C } } } ? C : never

type GetType1 = { a: { b: { c: string } } }
type GetFromDeepObj_Example1 = GetFromDeepObj<GetType1>

type GetType2 = { a: { b: { c: number } } }
type GetFromDeepObj_Example2 = GetFromDeepObj<GetType2>
