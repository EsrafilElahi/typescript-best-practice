interface User {
  id: number;
  name: string;
  age: number;
}

// Using Pick and Omit
type UserPreview = Pick<User, 'name' | 'age'>; // { name: string; age: number }
type UserSensitive = Omit<User, 'age'>; // { id: number; name: string }

// Using Partial and Required
type PartialUser = Partial<User>; // All properties are optional
type RequiredUser = Required<User>; // All properties are required

// Using Readonly
type ReadonlyUser = Readonly<User>; // All properties are read-only
