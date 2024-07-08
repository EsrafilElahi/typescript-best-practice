type Letters = "a" | "b" | "c";

type RemoveC<T> = T extends "c" ? never : T;

type WithoutC = RemoveC<Letters>

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
 
