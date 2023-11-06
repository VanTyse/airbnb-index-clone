import { useContext, useEffect, useMemo, useState } from "react";
import Icon from "../../assets/icons/Icon";
import { VISIT_OPTIONS, regions } from "../../lib/data";
import { VisitType, SVGPropTypes, region } from "../../lib/types";
import useScroll from "../../custom_hooks/useScroll";
import { SearchContext } from "../../context/SearchContext";
import NumberSelctor from "../NumberSelector/NumberSelector";
import Calendar from "../Calendar/Calendar";
import SearchBarDesktop from "./SearchbarDesktop";
import SearchBarMobile from "./SearchBarMobile";

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
  const { scrollOffset } = useScroll();
  return (
    <>
      <SearchBarDesktop
        forceShowLargeBar={forceShowLargeBar}
        setForceShowLargeBar={setForceShowLargeBar}
      />
      <SearchBarMobile />
    </>
  );
}
