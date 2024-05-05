type Person = PersonA | PersonB;

interface PersonA {
  type: 'A';
  name: string;
  age: number;
}

interface PersonB {
  type: 'B';
  name: string;
  city: string;
  isAdmin: boolean;
}

const people: Person[] = [
  { type: 'A', name: 'Alice', age: 25 },
  { type: 'B', name: 'Bob', city: 'London', isAdmin: true },
  { type: 'A', name: 'Charlie', age: 30 }, 
];

// Example 1: Filter PersonA objects
const personAs: PersonA[] = people.filter((person): person is PersonA => person.type === 'A');

// Example 2: Filter PersonB objects
const personBs: PersonB[] = people.filter((person): person is PersonB => person.type === 'B');

console.log(personAs);
console.log(personBs);
