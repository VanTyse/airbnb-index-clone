import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Icon from "../../assets/icons/Icon";

export default function () {
  const itemsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const itemsScrollWidth = useMemo(() => {
    if (!itemsRef.current) return 0;
    const item = itemsRef.current;
    return item.scrollWidth;
  }, [itemsRef.current]);

  const itemsContainerWidth = useMemo(() => {
    if (!itemsRef.current) return 0;
    const item = itemsRef.current;
    return item.offsetWidth;
  }, [itemsRef.current]);

  const maxScroll = useMemo(() => {
    if (!scrollContainerRef.current) return 0;
    const scrollContainer = scrollContainerRef.current;
    return scrollContainer.scrollWidth - itemsContainerWidth;
  }, [scrollContainerRef.current]);

  const getScrollOffset = useCallback(() => {
    return scrollContainerRef?.current?.scrollLeft;
  }, [scrollContainerRef.current]);

  const [scrollOffset, setScrollOffset] = useState(getScrollOffset() || 0);

  const scrollListener = () => {
    setScrollOffset((x) => {
      const offset = getScrollOffset();
      if (offset) return offset;
      else return 0;
    });
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", scrollListener);

    return () => scrollContainer.removeEventListener("scroll", scrollListener);
  }, [scrollContainerRef.current]);

  const offsetWidth = (itemsScrollWidth - itemsContainerWidth) / 7;

  const showRightBtn = useMemo(() => {
    if (!scrollOffset) return true;

    return scrollOffset / maxScroll < 0.99;
  }, [scrollOffset, maxScroll]);

  const showLeftBtn = useMemo(() => {
    if (!scrollOffset) return false;

    return scrollOffset / maxScroll > 0.01;
  }, [scrollOffset, maxScroll]);

  const moveLeft = () => {
    scrollContainerRef?.current?.scrollBy({
      left: offsetWidth,
      behavior: "smooth",
    });
  };

  const moveRight = () => {
    scrollContainerRef?.current?.scrollBy({
      left: -offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="basis-3/4 max-w-[70%] relative">
      <LeftButton onClick={moveRight} show={showLeftBtn} />
      <div
        className="py-7 overflow-auto scrollbar-none"
        ref={scrollContainerRef}
      >
        <div
          className={`flex gap-6 items-center transition-all duration-700`}
          ref={itemsRef}
        >
          {[100].map((x) => {
            const s = [];
            for (let i = 0; i < 100; i++) {
              s.push(i);
            }

            return s.map((y) => <div className="border">{y}</div>);
          })}
        </div>
      </div>
      <RightButton show={showRightBtn} onClick={moveLeft} />
    </div>
  );
}

const LeftButton = ({
  show,
  onClick,
}: {
  show: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`absolute z-10 left-0 top-1/2 -translate-y-1/2  bg-white 
      p-2 flex justify-center items-center ${show ? "flex" : "hidden"}`}
    >
      <div
        className={`w-8 h-8  bg-white cursor-pointer flex items-center justify-center border
        border-vantyse-grey-2 rounded-full hover:shadow-md `}
        onClick={onClick}
      >
        <Icon name="ChevronLeft" />
      </div>
    </div>
  );
};

const RightButton = ({
  show,
  onClick,
}: {
  show: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`absolute z-10 right-0 top-1/2 -translate-y-1/2  bg-white 
      p-2 flex justify-center items-center ${show ? "flex" : "hidden"}`}
    >
      <div
        className={`w-8 h-8  bg-white cursor-pointer flex items-center justify-center border
        border-vantyse-grey-2 rounded-full hover:shadow-md `}
        onClick={onClick}
      >
        <Icon name="ChevronRight" />
      </div>
    </div>
  );
};
