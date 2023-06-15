import react, { useState } from 'react';


const useHome = () => {
  const [home, setHome] = useState(0)

  return [home, setHome] as const // fixes state type and onChange event type
}