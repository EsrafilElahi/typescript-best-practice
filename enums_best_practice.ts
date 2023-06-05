import React, { useState } from "react";
import { GenericSelect } from "./select";
import {
  Book,
  Laptop,
  Movie,
  Phone,
  books,
  laptops,
  movies,
  phones,
  isBook,
  isMovie,
  isLaptop,
  isPhone,
  DataTypes
} from "./data";

enum Tabs {
  "BOOKS" = "Books",
  "MOVIES" = "Movies",
  "LAPTOPS" = "Laptops",
  "PHONES" = "Phones"
}

const valueShouldBeString = (value: string) => value;

const formatLabel = (value: DataTypes) => {
  if (isBook(value)) return `${value.title}: ${value.author}`;
  if (isMovie(value)) return `${value.title}: ${value.releaseDate}`;
  if (isLaptop(value)) return value.model;
  if (isPhone(value)) return `${value.model}: ${value.manufacture}`;

  return valueShouldBeString(value);
};

const confirmImpossibleState = (tab: never) => {
  throw new Error(`Reacing an impossible state because of ${tab}`);
};

const getSelect = (tab: Tabs) => {
  switch (tab) {
    case Tabs.BOOKS:
      return (
        <GenericSelect<Book>
          onChange={(value) => console.info(value)}
          values={books}
          formatLabel={formatLabel}
        />
      );
    case Tabs.MOVIES:
      return (
        <GenericSelect<Movie>
          onChange={(value) => console.info(value)}
          values={movies}
          formatLabel={formatLabel}
        />
      );
    case Tabs.LAPTOPS:
      return (
        <GenericSelect<Laptop>
          onChange={(value) => console.info(value)}
          values={laptops}
          formatLabel={formatLabel}
        />
      );
    case Tabs.PHONES:
      return (
        <GenericSelect<Phone>
          onChange={(value) => console.info(value)}
          values={phones}
          formatLabel={formatLabel}
        />
      );
    default:
      return confirmImpossibleState(tab);
  }
};

export const TabsComponent = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.BOOKS);

  const select = getSelect(tab);

  return (
    <>
      Select category:
      <br />
      <GenericSelect<Tabs>
        onChange={(value) => setTab(value)}
        values={Object.values(Tabs)}
        formatLabel={formatLabel}
      />
      <br />
      <br />
      List of items:
      <br />
      {select}
    </>
  );
};
