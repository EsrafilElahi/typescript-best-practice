type RGB = [red: number, green: number, blue: number];
type Color = { value: RGB | string };

const myColor: Color = { value: 'red' };
// type : {value: RGB | string}

const myColor2 = { value: 'red' } satisfies Color;
// type : {value: string}
