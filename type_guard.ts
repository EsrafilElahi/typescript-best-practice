type Base = { id: string } | string;

const getStringFromValue = <TValue extends Base>(value: TValue) => {
  if (typeof value === 'string') {
    // here "value" will be the type of "string"
    return value;
  }

  // here "value" will be the type of "NOT string", in our case { id: string }
  return value.id;
};


// ==========================================================================================

type Base = { id: string } | string;

type GenericSelectProps<TValue> = {
  formatLabel: (value: TValue) => string;
  onChange: (value: TValue) => void;
  values: TValue[];
};

const getStringFromValue = <TValue extends Base>(value: TValue) => {
  if (typeof value === 'string') return value;

  return value.id;
};

export const GenericSelect = <TValue extends Base>(props: GenericSelectProps<TValue>) => {
  const { values, onChange, formatLabel } = props;

  const onSelectChange = (e) => {
    const val = values.find((value) => getStringFromValue(value) === e.target.value);

    if (val) onChange(val);
  };

  return (
    <select onChange= { onSelectChange } >
    {
      values.map((value) => (
        <option key= { getStringFromValue(value) } value = { getStringFromValue(value) } >
        { formatLabel(value) }
        < /option>
      ))
    }
    < /select>
  );
};


// usage
const tabs = ['Books', 'Movies', 'Laptops'];

const getSelect = (tab: string) => {
  switch (tab) {
    case 'Books':
      return <GenericSelect<Book> onChange={ (value) => console.info(value) } values = { books } />;
    case 'Movies':
      return <GenericSelect<Movie> onChange={ (value) => console.info(value) } values = { movies } />;
    case 'Laptops':
      return <GenericSelect<Laptop> onChange={ (value) => console.info(value) } values = { laptops } />;
  }
}

const Tabs = () => {
  const [tab, setTab] = useState<string>(tabs[0]);

  const select = getSelect(tab);


  return (
    <>
    <GenericSelect<string> onChange= {(value) => setTab(value)} values = { tabs } />
      { select }
      < />
  );
};

// =============================================================================================

const allTabs = ['Books', 'Movies', 'Laptops'];

type Tabs = typeof allTabs;
// Tabs will be string[];

const allTabs2 = ['Books', 'Movies', 'Laptops'] as const;
// readonly ["Books", "Movies", "Laptops"]


const allTabs3 = ['Books', 'Movies', 'Laptops'] as const;
type TabsV = typeof allTabs3[number];
// "Books" | "Movies" | "Laptops"

// =============================================================================================

type T = { id: string };
type Base = T | string;

export const isStringValue = <TValue extends T>(value: TValue | string): value is string => {
  return typeof value === 'string';
};

const getStringFromValue = <TValue extends Base>(value: TValue) => {
  if (isStringValue(value)) {
    // do something with the string
  }

  // do something with the object
};