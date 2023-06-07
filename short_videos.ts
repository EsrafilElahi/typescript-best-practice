
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

const person2: Partial<IPerson> = {}
const person3: IPartialPerson<IPerson> = {}

// ========================================================================================



// ========================================================================================



// ========================================================================================



// ========================================================================================