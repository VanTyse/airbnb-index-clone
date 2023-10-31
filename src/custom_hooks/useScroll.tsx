import { useState, useEffect } from "react";

export default function useScroll() {
  const [previousScrollOffset, setPreviousScrollOffset] = useState(
    getScrollOffset()
  );
  const [currentScrollOffset, setCurrentScrollOffset] = useState(
    getScrollOffset()
  );
  const [scrollDirection, setScrollDirection] = useState<{
    direction: string | null;
  }>({ direction: null });

  const scrollListener = () => {
    setCurrentScrollOffset(getScrollOffset());
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    if (previousScrollOffset < currentScrollOffset) {
      setScrollDirection({ direction: "down" });
    } else {
      setScrollDirection({ direction: "up" });
    }
    setPreviousScrollOffset(currentScrollOffset);
  }, [currentScrollOffset]);

  return [scrollDirection, currentScrollOffset];
}

const getScrollOffset = () => {
  return (
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY
  );
};
