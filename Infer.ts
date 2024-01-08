type InferValueFromColor <Color extends string> = Color extends `${infer N}-${infer C}-${infer T}` ? return {namespace: N, color:C, tone:T} : never;

const example = InferValueFromColor<'text-green-300'>
// {namespace: 'text', color:'green', tone: '300'}
