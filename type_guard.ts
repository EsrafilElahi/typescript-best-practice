type Base = { id: string } | string;

const getStringFromValue = <TValue extends Base>(value: TValue) => {
  if (typeof value === 'string') {
    // here "value" will be the type of "string"
    return value;
  }

  // here "value" will be the type of "NOT string", in our case { id: string }
  return value.id;
};