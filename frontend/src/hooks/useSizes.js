import { useEffect, useState } from "react";

export default function useSizes() {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    async function fetchSizes() {
      const p = await fetch("/categories");
      const res = await p.json();

      setSizes(res.map((c) => c.size));
    }
    fetchSizes();
  }, []);

  return { sizes };
}
