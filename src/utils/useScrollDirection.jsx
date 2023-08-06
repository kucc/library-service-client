import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const threshold = 20;
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        setScrollDirection(scrollY > window.previousScrollY ? "down" : "up");
      }
      window.previousScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
