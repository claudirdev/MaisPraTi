/*------------------------------------------------------------------ 
File: src/hooks/useLocalStorage.js
Subject: Exercicio 5 - Consumo API com ReactJS - Formação +PraTI                      
Create: 21/08/25                                                   
Developer: Claudir Kraulich
-------------------------------------------------------------------*/
import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
