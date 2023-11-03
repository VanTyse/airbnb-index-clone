import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "../../assets/icons/Icon";

export default function () {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [onScrollEndOffset, setOnScrollEndOffset] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const scrollContainerWidth = useMemo(() => {
    if (!scrollContainerRef.current) return 0;
    const scrollContainer = scrollContainerRef.current;
    return scrollContainer.offsetWidth;
  }, [scrollContainerRef.current]);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const scrollContainer = scrollContainerRef.current;
    setMaxScroll(scrollContainer.scrollWidth - scrollContainerWidth);
  }, [scrollContainerRef.current, scrollContainerRef]);

  const scrollListener = (e: Event) => {
    const element = e.target as HTMLDivElement;
    setOnScrollEndOffset(element.scrollLeft);
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scrollend", scrollListener);

    return () =>
      scrollContainer.removeEventListener("scrollend", scrollListener);
  }, [scrollContainerRef.current]);

  useEffect(() => {
    if (scrollContainerWidth === 0 || onScrollEndOffset === 0) return;
    const scrollContainer = scrollContainerRef.current;
    const scrollRatio = onScrollEndOffset / scrollContainerWidth;
    const decimal = scrollRatio - Math.floor(scrollRatio);
    const skipCount =
      decimal > 0.5 ? Math.floor(scrollRatio) + 1 : Math.floor(scrollRatio);

    setCurrentImage(skipCount);
    scrollContainer?.scroll({
      left: skipCount * scrollContainerWidth,
      behavior: "smooth",
    });
  }, [scrollContainerRef.current, onScrollEndOffset]);

  useEffect(() => {}, [scrollContainerRef.current]);

  const showRightBtn = useMemo(() => {
    if (!maxScroll) return false;
    return (currentImage * scrollContainerWidth) / maxScroll < 0.9;
  }, [currentImage, maxScroll]);

  // const showLeftBtn = useMemo(() => {
  //   if (!scrollOffset) return false;

  //   return scrollOffset / maxScroll > 0.01;
  // }, [scrollOffset, maxScroll]);

  const showLefttBtn = useMemo(() => {
    if (!maxScroll) return false;
    return (currentImage * scrollContainerWidth) / maxScroll > 0.1;
  }, [currentImage, maxScroll]);

  const moveLeft = () => {
    scrollContainerRef?.current?.scrollBy({
      left: scrollContainerWidth,
      behavior: "smooth",
    });
  };

  const moveRight = () => {
    scrollContainerRef?.current?.scrollBy({
      left: -scrollContainerWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      <LeftButton onClick={moveRight} show={showLefttBtn} />
      <div
        className="flex w-72 h-72 gap-0 overflow-auto scrollbar-none"
        ref={scrollContainerRef}
      >
        {Array(10)
          .fill(0)
          .map((y, index) => (
            <div
              className={`border bg-green-400 rounded-2xl h-72 min-w-[18rem] flex items-center justify-center`}
            >
              {y + index}
            </div>
          ))}
      </div>
      <PositionIndicators currentPosition={currentImage} itemsLength={10} />
      <RightButton onClick={moveLeft} show={showRightBtn} />
    </div>
  );
}

const PositionIndicators = ({
  currentPosition,
  itemsLength,
}: {
  currentPosition: number;
  itemsLength: number;
}) => {
  const indicatorsContainerRef = useRef<HTMLDivElement>(null);

  const indicatorsContainerWidth = useMemo(() => {
    if (!indicatorsContainerRef.current) return 0;
    const indicatorsContainer = indicatorsContainerRef.current;
    return indicatorsContainer.scrollWidth;
  }, [indicatorsContainerRef.current]);

  useEffect(() => {
    if (!indicatorsContainerRef.current) return;
    const indicatorsContainer = indicatorsContainerRef.current;
    scroll(indicatorsContainer, currentPosition);
  }, [indicatorsContainerRef.current, currentPosition]);

  const scroll = (
    scrollContainer: HTMLDivElement,
    position: number,
    indicatorWidth = 12
  ) => {
    if (position > 2)
      scrollContainer.scroll({
        left: (position - 2) * indicatorWidth,
        behavior: "smooth",
      });
  };
  return (
    <div
      className="absolute z-10 bottom-5 left-1/2 -translate-x-1/2 
        flex items-center max-w-[60px] overflow-auto scrollbar-none "
      ref={indicatorsContainerRef}
    >
      {Array(itemsLength)
        .fill(0)
        .map((y, index) => (
          <PositionIndicator
            position={y + index}
            currentPosition={currentPosition}
          />
        ))}
    </div>
  );
};

const PositionIndicator = ({
  position,
  currentPosition,
}: {
  position: number;
  currentPosition: number;
}) => {
  return (
    <div className="min-w-[12px] flex justify-center">
      <div
        className={`border ${
          currentPosition === position
            ? "bg-white p-[2px]"
            : "bg-vantyse-grey-2"
        } w-[4px] h-1 flex items-center justify-center rounded-full`}
      ></div>
    </div>
  );
};

const LeftButton = ({
  onClick,
  show,
}: {
  show: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`absolute z-10 left-2 top-1/2 -translate-y-1/2 group-hover:flex hidden 
      justify-center items-center ${!show && "!hidden"}`}
    >
      <div
        className={`w-8 h-8 bg-white opacity-90 cursor-pointer flex items-center justify-center border
        border-vantyse-grey-2 rounded-full hover:shadow-md `}
        onClick={onClick}
      >
        <Icon name="ChevronLeft" />
      </div>
    </div>
  );
};

const RightButton = ({
  onClick,
  show,
}: {
  show: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`absolute z-10 right-2 top-1/2 -translate-y-1/2  group-hover:flex hidden
      p-2 justify-center items-center ${!show && "!hidden"}`}
    >
      <div
        className={`w-8 h-8  bg-white opacity-90 cursor-pointer flex items-center justify-center border
        border-vantyse-grey-2 rounded-full hover:shadow-md `}
        onClick={onClick}
      >
        <Icon name="ChevronRight" />
      </div>
    </div>
  );
};
