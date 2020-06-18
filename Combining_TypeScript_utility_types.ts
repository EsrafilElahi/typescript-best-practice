interface User {
  id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}

// not reusable
type LoggedUser1 = Partial<User> & Required<Pick<User, 'id'>>;
type LoggedUser2 = Required<Pick<User, 'id'>> & Omit<User, 'id'>;


// reusable 
type RequireFields<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
const u2: RequireFields<User, 'id' | 'age'> = {
  id: 2,
  age: 32,
  firstname: 'Chris',
  lastname: 'Bongers',
};
 