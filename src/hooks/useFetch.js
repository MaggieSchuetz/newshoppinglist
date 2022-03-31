import { useEffect, useState } from "react";

export default function useFetch() {
  useEffect(() => {
    fetchShoppingList();
  }, []);

  const [allItemsData, setAllItemsData] = useState([]);
  const [hasError, setHasError] = useState(false);

  async function fetchShoppingList() {
    try {
      const response = await fetch("https://fetch-me.vercel.app/api/shopping/items");

      if (response.ok) {
        const results = await response.json();
        setAllItemsData(results.data);
        console.log(setAllItemsData);
        throw new Error("Error message");
      }
    } catch (error) {
      console.log(error.message);
      setHasError(true);
    }
  }
  return { hasError, allItemsData };
}
