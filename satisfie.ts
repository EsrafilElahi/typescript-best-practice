type RGB = [red: number, green: number, blue: number];
type Color = { value: RGB | string };

const myColor: Color = { value: 'red' };
// type : {value: RGB | string}

const myColor2 = { value: 'red' } satisfies Color;
// type : {value: string}


type Setting = string | number | {[key]: string} | Setting[];
type Settings = Record<string, Settings>


// wrong way
const obj: Settings = {
  name: 'esrafil',
  id: 23,
  prop: {family: 'elahi'},
  arr: [12, 23]
}

// right way
const obj = {
  name: 'esrafil',
  id: 23,
  prop: {family: 'elahi'},
  arr: [12, 23]
} satisfies Settings;
