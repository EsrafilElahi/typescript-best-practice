
interface IDetails {
  address: string;
}

function myFunc<Type extends IDetails>(arg: Type): Type {
  console.log(arg.address); // Now we know it has a .address property, so no more error
  return arg;
}

myFunc(true); // error: Argument of type 'boolean' is not assignable to parameter of type 'IDetails'

// ====================================================================================

const ObjectKeys1 = <T extends {}>(obj: T): Array<keyof T> => {
  return Object.keys(obj) // Error: Type 'string[]' is not assignable to type '(keyof T)[]'.
  // Array<keyof T> => ["id", "email"]
  // Object.keys(obj) => ["id", "email"] --> string[]
}

const ObjectKeys2 = <T extends {}>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>
}

const result = ObjectKeys2({
  id: 6,
  email: "me@gmail.com"
})

// ====================================================================================

function getProperty1<T>(obj: T, key: keyof T) {
  return obj[key];
}

let obj1 = { a: 1, b: "b", c: true, d: 4 };
getProperty1(obj1, "a") // return type: string | number | boolean


function getProperty2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let obj2 = { a: 1, b: "b", c: true, d: 4 };
getProperty2(obj2, "a") // return type: number 

// ====================================================================================

function test<T>(): void {
  console.log('test fn')
}

const makeSet1 = <T>() => { // T not defined => it's unknown type
  return test<T>()
}
const mySet1 = makeSet1() // makeSet1: <unknown>() => void ----------> defaultly is unknown because it's doesn't has default type


const makeSet2 = <T = number>() => { // T is number type defaultly
  return test<T>()
}
const mySet2 = makeSet2() // makeSet2: <number>() => void ----------> defaultly is <number>
const mySet3 = makeSet2<string>() // makeSet2: <string>() => void ----------> set <string>

// ====================================================================================

type Base = {
  id: string;
  title: string;
};

type GenericSelectProps<TValue> = {
  values: TValue[];
  onChange: (value: TValue) => void;
};

export const GenericSelect = <TValue extends Base>({ values, onChange }: GenericSelectProps<TValue>) => {
  const onSelectChange = (e) => {
    const val = values.find((value) => value.id === e.target.value);

    if (val) onChange(val);
  };

  return (
    <select onChange={onSelectChange}>
      {values.map((value) => (
        <option key={value.id} value={value.id}>
          {value.title}
        </option>
      ))}
    </select>
  );
};

// This select is a "Book" type, so the value will be "Book" and only "Book"
<GenericSelect<Book> onChange={(value) => console.log(value.author)} values={books} />

// This select is a "Movie" type, so the value will be "Movie" and only "Movie"
<GenericSelect<Movie> onChange={(value) => console.log(value.releaseDate)} values={movies} />


export const AmazonCloneWithState = () => {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  return (
    <>
      <GenericSelect<Book> onChange={(value) => setMovie(value)} values={booksValues} />
      <GenericSelect<Movie> onChange={(value) => setBook(value)} values={moviesValues} />
    </>
  );
};