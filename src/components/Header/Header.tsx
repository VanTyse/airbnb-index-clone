import Icon from "../../assets/icons/Icon";
import useScroll from "../../custom_hooks/useScroll";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import { useEffect, useMemo, useState } from "react";

export default function ({
  onHeightChange,
}: {
  onHeightChange: (height: 24 | 44) => void;
}) {
  const [forceShowLargeSearchBar, setForceShowLargeSearchBar] = useState(false);

  const { scrollOffset } = useScroll();

  const reduceHeaderHeight = useMemo(() => {
    if (forceShowLargeSearchBar) return false;
    return scrollOffset && +scrollOffset > 50 ? true : false;
  }, [scrollOffset, forceShowLargeSearchBar]);

  useEffect(() => {
    if (reduceHeaderHeight) onHeightChange(24);
    else onHeightChange(44);
  }, [reduceHeaderHeight]);

  return (
    <>
      <header
        className={`fixed z-10 bg-white ${
          reduceHeaderHeight
            ? "h-44"
            : forceShowLargeSearchBar
            ? "h-44"
            : "h-64"
        } w-full transition-[height] duration-500 top-0 left-0 px-[5%]`}
      >
        <div className="flex items-center justify-between py-4 z-50">
          <div className="basis-1/4">
            <Logo />
          </div>
          <SearchBar
            forceShowLargeBar={forceShowLargeSearchBar}
            setForceShowLargeBar={setForceShowLargeSearchBar}
          />

          <div className="basis-1/4 flex gap-6 items-center">
            <p className="text-vantyse-grey-text font-bold hover:bg-vantyse-grey-2 p-3 w-full rounded-full cursor-pointer">
              Airbnb your home
            </p>
            <div className="hover:bg-vantyse-grey-2 p-3 rounded-full cursor-pointer">
              <Icon name="WorldIcon" />
            </div>
            <ProfileMenu />
          </div>
        </div>
        {!forceShowLargeSearchBar && (
          <div
            className={`absolute bottom-0 w-full left-0 border-y px-[5%]${
              reduceHeaderHeight ? "shadow-md" : ""
            }`}
          >
            <Navbar />
          </div>
        )}
      </header>
      {forceShowLargeSearchBar && (
        <div
          onClick={() => setForceShowLargeSearchBar(false)}
          className="min-w-[100dvw] min-h-[100dvh] bg-vantyse-grey-1 opacity-30 fixed top-44 left-0"
        ></div>
      )}
    </>
  );
}
