import React from 'react';


interface TableProps<TItem> {
  items: TItem,
  renderItem: (item: TItem) => React.ReactNode
}

// get TItem type from where use this component
export function Table<TItem>(props: TableProps<TItem>) {
  return null
}

const App = () => {
  return (
    <div>

      <Table<{ id: number, name: string }> // define TItem here
        items= { [{ id: 1, name: 'joe' }] }
        renderItem={(item) => <div>{item}</div>}
      /> 

    < /div>
  )
}
