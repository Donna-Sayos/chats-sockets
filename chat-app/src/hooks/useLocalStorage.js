import React, { useEffect, useState } from "react";

// this file is so that the 'id' generated persists when the page refreshes or when we close our browser and come back;

const PREFIX = "chat-app"; // to organize data in localStorage; to know which info is from what app;

function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(prefixedKey);

    if (jsonVal !== null) return JSON.parse(jsonVal);
  });
};

export default useLocalStorage;
