import React from "react";

type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType<T> = Exclude<ShapeType, T>;

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

type ItemProps = {
  // color: `${ThemeType}-${ColorType}`;
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
};

const Shape = (props:ItemProps) => {
  const chosenShape: ShapeType = "cube";
  const twoDShape: TwoDShapeType<typeof chosenShape> = "square";

  return <div>Shape</div>; 
};

export default Shape;


// use Shape component:
<Shape color="dark-blue"/>
<Shape color="light-yellow"/>

