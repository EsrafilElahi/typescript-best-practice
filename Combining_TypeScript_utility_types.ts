interface User {
  id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}

type LoggedUser1 = Partial<User> & Required<Pick<User, 'id'>>;
type LoggedUser2 = Required<Pick<User, 'id'>> & Omit<User, 'id'>;


