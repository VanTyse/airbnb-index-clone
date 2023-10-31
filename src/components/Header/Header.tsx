import { useState } from "react";
import Icon from "../../assets/icons/Icon";
import { VISIT_OPTIONS } from "../../lib/data";
import Logo from "../Logo/Logo";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import { VisitType } from "../../lib/types";

export default function () {
  const [selectedVisitOption, setSelectedVisitOption] =
    useState<VisitType>("stays");

  return (
    <header className="h-48 border-b sticky top-0 left-0 px-[5%]">
      <div className="flex items-center py-4">
        <div className="basis-1/4">
          <Logo />
        </div>
        <div className="basis-1/2 flex justify-center">
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
        <div className="basis-1/4 flex gap-6 items-center">
          <p className="text-vantyse-grey-text font-bold hover:bg-vantyse-grey-2 p-3 rounded-full cursor-pointer">
            Airbnb your home
          </p>
          <div className="hover:bg-vantyse-grey-2 p-3 rounded-full cursor-pointer">
            <Icon name="WorldIcon" />
          </div>
          <ProfileMenu />
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  );
}
