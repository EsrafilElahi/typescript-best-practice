type MyType<T> = T extends infer R ? R : never;
type T1 = MyType<{ b: string }> // T1 is { b: string; }
type T2 = MyType<{}> // T2 is { }

// infer R ---> points to T => depends to T

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