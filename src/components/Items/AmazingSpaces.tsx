import { useContext } from "react";
import { ItemType } from "../../lib/types";
import ImageSlider from "../Sliders/ImageSlider";
import Icon from "../../assets/icons/Icon";
import { ItemsContext } from "../../context/ItemsContext";

export default function () {
  const { data: items } = useContext(ItemsContext);
  console.log(items);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 justify-items-center">
      {items.map((item, index) => {
        if (index < 10) return <Item {...item} />;
      })}
    </div>
  );
}

const Item = ({
  shortDescription,
  location,
  rating,
  images,
  price,
  dates,
}: ItemType) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <ImageSlider images={images} />
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-black">
          <h1 className="font-semibold">{location}</h1>
          <div className="gap-2 flex items-center">
            <Icon name="StarFill" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="text-sm">
          <p>{shortDescription}</p>
          <p>{dates}</p>
        </div>
        <div>
          <h1 className="text-black font-semibold">
            ${price}{" "}
            <span className="text-vantyse-grey-text font-normal">night</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
