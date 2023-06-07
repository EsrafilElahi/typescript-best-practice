
export const StatusArray = [
  'NOT_STARTED',
  'ACTIVE',
  'COMPLETED',
  'SUBMITTING',
  'VIEWING_ANSWERS'
] as const;

export type Status = typeof StatusArray[number];
// "NOT_STARTED" | "ACTIVE" | "COMPLETED" | "SUBMITTING" | "VIEWING_ANSWERS"


// ========================================================================================

type map1 = {
  [key: string]: string
}

type map2 = Record<string, string>

const map3 = new Map<string, string>()

// ========================================================================================

interface IPerson {
  address?: {
    city?: string
  }
}

const person: IPerson = {}

const city1 = person.address.city // error
const city2 = person.address?.city // ? optional chaining
const city3 = person.address!.city // ! undefined chaining

// ========================================================================================

interface IPerson {
  name: string,
  age: number
}

// mapped type custom partial-type
type IPartialPerson<T> = {
  [P in keyof T]?: T[P] | undefined
}

type IRecordPerson<K extends string | number, T> = {
  [P in K]: T
}

const person2: Partial<IPerson> | Record<string, string | number> = {}
const person3: IPartialPerson<IPerson> | IRecordPerson<string, IPerson> = {}

// ========================================================================================

const article = {
  title: 'elem.js',
  id: 23,
  author: 'messi'
}

type ArticleType = typeof article
// {
//   title: string,
//  id: number,
//  author: string
// }

type ArticleKeys = keyof ArticleType
// "title" | "id" | "author"

// ========================================================================================

const getData1 = (): Promise<JSON> => {
  return fetch("api/data").then(res => res.json())
}

const getData2 = (): Promise<any> => {
  return fetch("api/data").then(res => res.json())
}



interface User {
  id: number;
  firstName: string;
}

// @ts-ignore
axios.get<User[]>('http://localhost:8080/admin/users')
  .then(response => {
    console.log(response.data);
    // @ts-ignore
    setUserList(response.data);
  });

// ========================================================================================



// ========================================================================================