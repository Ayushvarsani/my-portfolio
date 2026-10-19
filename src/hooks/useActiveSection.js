import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + 140;
      let current = ids[0];
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.offsetTop <= marker) current = id;
      });
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [ids]);

  return active;
}
