import { useState } from "react";
import Icon from "../../assets/icons/Icon";

export default function () {
  return (
    <div className="max-w-[60%] w-full rounded-full flex gap-1 border border-vantyse-grey-2 absolute left-1/2 -translate-x-1/2 shadow-vantyse-grey">
      <button className="group basis-1/3 hover:bg-vantyse-grey-2 rounded-full py-3.5 pl-8 text-left">
        <div>
          <h1 className="text-xs font-semibold text-vantyse-grey-1">Where</h1>
          <h3 className="text-sm text-vantyse-grey-text">
            Search destinations
          </h3>
        </div>
      </button>
      <div className="basis-1/3 flex gap-1">
        <button className="basis-1/2 group hover:bg-vantyse-grey-2 hover:rounded-full py-3.5 text-left">
          <div className="border-x group-hover:border-none px-8">
            <h1 className="text-xs font-semibold text-vantyse-grey-1">Where</h1>
            <h3 className="text-sm text-vantyse-grey-text">Add dates</h3>
          </div>
        </button>
        <button className="basis-1/2 group hover:bg-vantyse-grey-2 hover:rounded-full py-3.5 text-left">
          <div className="border-r group-hover:border-none px-8">
            <h1 className="text-xs font-semibold text-vantyse-grey-1">Where</h1>
            <h3 className="text-sm text-vantyse-grey-text">Add dates</h3>
          </div>
        </button>
      </div>
      <div className="basis-1/3">
        <button className="block w-full group hover:bg-vantyse-grey-2 hover:rounded-full py-3.5 text-left">
          <div className="px-8">
            <h1 className="text-xs font-semibold text-vantyse-grey-1">Who</h1>
            <h3 className="text-sm text-vantyse-grey-text">Add guests</h3>
          </div>
        </button>
        <SearchCircle onClick={() => null} />
      </div>
    </div>
  );
}

const SearchCircle = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-vantyse-primary text-white flex items-center ${
        active && "gap-4"
      }`}
      onClick={(e) => {
        onClick(e), setActive((x) => !x);
      }}
    >
      <Icon name="Lens" width={20} height={20} color="white" />
      <p
        className={`text-sm transition duration-1000 max-w-0 overflow-x-hidden ${
          active && "max-w-full"
        }`}
      >
        Search
      </p>
    </button>
  );
};
