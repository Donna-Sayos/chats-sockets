import React, { useEffect, useState } from "react";

const PREFIX = "chat-app";

function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(prefixedKey);

    if (jsonVal !== null) return JSON.parse(jsonVal);
  });
}

export default useLocalStorage;
