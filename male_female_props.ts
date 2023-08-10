type WrongProps = {
  name: string,
  gender: "male" | "female",
  salary?: number,
  weght?: number
}

type RightProps = { name: string } & ( MaleProps | FemaleProps );

type MaleProps = {
  gender: "male",
  salary: number
}

type FemaleProps = {
  gender: "female",
  weight: number
}

const Child = (props: RightProps) => {
  if(props.gender === 'female'){
    console.log(props.weight);
  } else if (props.gender === 'male'){
    console.log(props.salary)
  }

  return <span> child compo </span>
}

const App () => {
  return <Child name="esrafil" gender="male" salary={40} />
}
