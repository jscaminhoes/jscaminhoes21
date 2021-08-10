import { createContext, useState } from 'react';

const InputValeuContext = createContext({});

export function InputValeuProvider({ children }) {
  const [valueInput, setValueInput] = useState('');

  return (
    <InputValeuContext.Provider
      value={{
        valueInput,
        setValueInput,
      }}
    >
      {children}
    </InputValeuContext.Provider>
  );
}

export const AuthConsumer = InputValeuContext.Consumer;

export default InputValeuContext;
