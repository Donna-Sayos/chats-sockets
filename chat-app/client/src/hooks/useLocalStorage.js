import { useEffect, useState } from "react"; // In React 17, you no longer need to import React;

// this file is so that the 'id' generated persists when the page refreshes or when we close our browser and come back;

const PREFIX = "chats-sockets"; // must be the EXACT name of the app;
// to organize data in localStorage; to know which application the info came from;

function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(prefixedKey);

    if (jsonVal != null) {
      return JSON.parse(jsonVal);
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // every time the key changes, this useEffect will override whatever saved data in the locaStorage;
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
