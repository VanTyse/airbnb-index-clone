import { useContext, useEffect, useMemo, useState } from "react";
import Icon from "../../assets/icons/Icon";
import { VISIT_OPTIONS, regions } from "../../lib/data";
import { VisitType, SVGPropTypes, region } from "../../lib/types";
import useScroll from "../../custom_hooks/useScroll";
import { SearchContext } from "../../context/SearchContext";
import NumberSelctor from "../NumberSelector/NumberSelector";

type LargeBarType = {
  selectedVisitOption: VisitType;
  setSelectedVisitOption: React.Dispatch<React.SetStateAction<VisitType>>;
  hideBar: boolean;
  forceShowBar: boolean;
};

type SmallBarType = {
  selectedVisitOption: VisitType;
  setSelectedVisitOption: React.Dispatch<React.SetStateAction<VisitType>>;
  showBar: boolean;
  forceHideBar: boolean;
  setForceShowLargeBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchBar({
  forceShowLargeBar,
  setForceShowLargeBar,
}: {
  forceShowLargeBar: boolean;
  setForceShowLargeBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectedVisitOption, setSelectedVisitOption] =
    useState<VisitType>("stays");

  const { scrollOffset } = useScroll();

  const hideLargeBar = useMemo(() => {
    if (forceShowLargeBar) return false;
    return scrollOffset && +scrollOffset > 50 ? true : false;
  }, [forceShowLargeBar, scrollOffset]);

  const showSmallBar = hideLargeBar;
  const forceHideSmallBar = forceShowLargeBar;

  return (
    <>
      <LargeBar
        hideBar={hideLargeBar}
        selectedVisitOption={selectedVisitOption}
        setSelectedVisitOption={setSelectedVisitOption}
        forceShowBar={forceShowLargeBar}
      />
      <SmallBar
        showBar={showSmallBar}
        selectedVisitOption={selectedVisitOption}
        setSelectedVisitOption={setSelectedVisitOption}
        forceHideBar={forceHideSmallBar}
        setForceShowLargeBar={setForceShowLargeBar}
      />
    </>
  );
}

const LargeBar = ({
  selectedVisitOption,
  setSelectedVisitOption,
  hideBar,
}: LargeBarType) => {
  const { data } = useContext(SearchContext);
  const [searchDetailToShow, setSearchDetailToShow] = useState<
    "region" | "people" | "date1" | "date2" | "date3" | null
  >(null);

  const showSearchDetail = (
    detail: "region" | "people" | "date1" | "date2" | "date3"
  ) => setSearchDetailToShow(detail);

  useEffect(() => {
    const listener = () => setSearchDetailToShow(null);
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, []);

  return (
    <div
      className={`absolute transition-[transform,_opacity] ease-out duration-[700] ${
        hideBar && "scale-50 -translate-y-[40px] !opacity-0"
      } left-1/2 -translate-x-1/2 top-7 w-full lg:max-w-[60%] opacity-100`}
    >
      <div className="basis-1/2 flex justify-center mb-6">
        <div className="flex gap-10 items-center">
          {VISIT_OPTIONS.map((option) => (
            <div
              className={`text-vantyse-grey-text capitalize hover:text-vantyse-grey-1 hover:cursor-pointer ${
                selectedVisitOption === option &&
                "text-vantyse-grey-1 font-semibold "
              }`}
              onClick={() => setSelectedVisitOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full rounded-full flex gap-1 border border-vantyse-grey-2  shadow-vantyse-grey ${
          searchDetailToShow && "bg-vantyse-grey-3"
        }`}
      >
        <div
          className={`group basis-1/3 cursor-pointer rounded-full py-3.5 pl-8 text-left 
          ${
            searchDetailToShow === "region"
              ? "bg-white shadow-sm"
              : "hover:bg-vantyse-grey-2"
          }
          `}
          onClick={() => showSearchDetail("region")}
        >
          <div>
            <h1 className="text-xs font-semibold text-vantyse-grey-1">Where</h1>
            <h3 className="text-sm text-vantyse-grey-text">
              Search destinations
            </h3>
          </div>
        </div>
        <div className="basis-1/3 flex gap-1">
          {selectedVisitOption !== "experiences" ? (
            <>
              <button
                className={`basis-1/2 group ${
                  searchDetailToShow === "date1"
                    ? "bg-white shadow-sm f"
                    : "hover:bg-vantyse-grey-2"
                } rounded-full py-3.5 text-left`}
                onClick={() => showSearchDetail("date1")}
              >
                <div
                  className={`border-x border-vantyse-grey-1/20 group-hover:border-none ${
                    searchDetailToShow === "date1" && "border-none"
                  } px-8`}
                >
                  <h1 className="text-xs font-semibold text-vantyse-grey-1">
                    Check in
                  </h1>
                  <h3 className="text-sm text-vantyse-grey-text">Add dates</h3>
                </div>
              </button>
              <button
                className={`basis-1/2 group ${
                  searchDetailToShow === "date2"
                    ? "bg-white shadow-sm"
                    : "hover:bg-vantyse-grey-2"
                } rounded-full py-3.5 text-left`}
                onClick={() => showSearchDetail("date2")}
              >
                <div
                  className={`border-r border-vantyse-grey-1/20 group-hover:border-none px-8 ${
                    searchDetailToShow === "date2" && "border-none"
                  }`}
                >
                  <h1 className="text-xs font-semibold text-vantyse-grey-1">
                    Check out
                  </h1>
                  <h3 className="text-sm text-vantyse-grey-text">Add dates</h3>
                </div>
              </button>
            </>
          ) : (
            <div
              className={`group w-full ${
                searchDetailToShow === "date3"
                  ? "bg-white shadow-sm"
                  : "hover:bg-vantyse-grey-2"
              } hover:cursor-pointer rounded-full py-3.5 text-left`}
              onClick={() => showSearchDetail("date3")}
            >
              <div
                className={`border-x border-vantyse-grey-1/20 group-hover:border-none ${
                  searchDetailToShow === "date3" && "border-none"
                } px-8 w-full`}
              >
                <h1 className="text-xs font-semibold text-vantyse-grey-1">
                  Date
                </h1>
                <h3 className="text-sm text-vantyse-grey-text">Add date</h3>
              </div>
            </div>
          )}
        </div>
        <div className="basis-1/3" onClick={() => showSearchDetail("people")}>
          <button
            className={`block w-full group hover:rounded-full py-3.5 text-left ${
              searchDetailToShow === "people"
                ? "bg-white shadow-sm rounded-full"
                : "hover:bg-vantyse-grey-2"
            }`}
          >
            <div className="px-8">
              <h1 className="text-xs font-semibold text-vantyse-grey-1">Who</h1>
              <h3 className="text-sm text-vantyse-grey-text">Add guests</h3>
            </div>
          </button>
          <SearchCircle onClick={() => null} width={20} height={20} />
        </div>
      </div>
      <Regions
        show={searchDetailToShow === "region"}
        onSelect={(value) => null}
      />
      <People show={searchDetailToShow === "people"} />
    </div>
  );
};

const SmallBar = ({ setForceShowLargeBar, showBar }: SmallBarType) => {
  return (
    <div
      className={`absolute left-1/2 ${
        showBar ? "translate-y-0 opacity-100 delay-[100ms]" : "opacity-0 h-0"
      }
        top-4 -translate-x-1/2 transition-all w-full lg:max-w-[30%] overflow-hidden rounded-full shadow-vantyse-grey`}
      onClick={(e) => {
        e.stopPropagation();
        setForceShowLargeBar(true);
      }}
    >
      <div className="relative w-full rounded-full flex gap-1 border border-vantyse-grey-2  shadow-vantyse-grey">
        <button className="group basis-1/3 rounded-full py-3.5 pl-8 text-left">
          <div>
            <h1 className="font-semibold text-vantyse-grey-1">Anywhere</h1>
          </div>
        </button>
        <div className="basis-1/3 flex gap-1">
          <button className=" py-3.5 text-left">
            <div className="border-x group-hover:border-none px-8">
              <h1 className="font-semibold text-vantyse-grey-1">Any week</h1>
            </div>
          </button>
        </div>
        <div className="basis-1/3">
          <button className="block w-full py-3.5 text-left">
            <div className="">
              <h3 className="text-vantyse-grey-text">Add guests</h3>
            </div>
          </button>
          <SearchCircle
            onClick={() => null}
            className="min-w-7 h-10 justify-center items-center flex p-2 right-1"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

const SearchCircle = ({
  onClick,
  height,
  width,
  className,
}: SVGPropTypes & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-vantyse-primary text-white flex items-center 
      ${className}`}
      onClick={(e) => {
        onClick(e), setActive((x) => !x);
      }}
    >
      <Icon name="Lens" width={width} height={height} color="white" />
      <p
        className={`text-sm transition-all duration-1000 max-w-0 overflow-x-hidden ${
          active && "max-w-full pl-4"
        }`}
      >
        Search
      </p>
    </button>
  );
};

const Regions = ({
  show,
}: {
  show: boolean;
  onSelect: (value: region) => void;
}) => {
  return (
    <div
      className={`bg-white rounded-3xl p-8 py-10 shadow-md w-1/2 mt-3.5 ${
        show ? "block" : "hidden"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-vantyse-grey-1 font-bold mb-9">Search by region</h1>
      <div className="grid grid-cols-3 gap-y-6 gap-x-4">
        {regions.map((regionObj) => {
          return (
            <div className="group hover:cursor-pointer">
              <img
                src={regionObj.image}
                alt=""
                className="block mb-2 border rounded-lg group-hover:border-vantyse-grey-1"
              />
              <p>{regionObj.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const People = ({ show }: { show: boolean }) => {
  const {
    data: { people },
  } = useContext(SearchContext);
  return (
    <div
      className={`absolute z-10 right-0 bg-white rounded-3xl p-8 py-10 shadow-md w-1/2 translate-y-[13.5px] ${
        show ? "block" : "hidden"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between pb-6 border-b">
        <div>
          <h1 className="font-semibold text-vantyse-grey-1">Adults</h1>
          <h3>Ages 13 and above</h3>
        </div>
        <div>
          <NumberSelctor value={people.adults} onChange={(value) => null} />
        </div>
      </div>
      <div className="flex items-center justify-between py-6 border-b">
        <div>
          <h1 className="font-semibold text-vantyse-grey-1">Adults</h1>
          <h3>Ages 13 and above</h3>
        </div>
        <div>
          <NumberSelctor value={people.adults} onChange={(value) => null} />
        </div>
      </div>
      <div className="flex items-center justify-between py-6 border-b">
        <div>
          <h1 className="font-semibold text-vantyse-grey-1">Adults</h1>
          <h3>Ages 13 and above</h3>
        </div>
        <div>
          <NumberSelctor value={people.adults} onChange={(value) => null} />
        </div>
      </div>
      <div className="flex items-center justify-between pt-6">
        <div>
          <h1 className="font-semibold text-vantyse-grey-1">Adults</h1>
          <h3>Ages 13 and above</h3>
        </div>
        <div>
          <NumberSelctor value={people.adults} onChange={(value) => null} />
        </div>
      </div>
    </div>
  );
};
