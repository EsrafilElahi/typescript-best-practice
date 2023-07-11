const myObj = {
  a: 1,
  b: 2,
  c: 3
}
 
const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
}

objectKeys(myObj).forEach(item => {
  console.log(myObj[item]);
})


