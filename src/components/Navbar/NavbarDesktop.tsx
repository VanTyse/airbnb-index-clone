import Icon from "../../assets/icons/Icon";
import Slider from "../Sliders/NavSlider";
import { Switch } from "antd";

export default function NavbarDesktop() {
  return (
    <div className="flex gap-8 items-center">
      <div className="basis-3/4 max-w-[calc(100%-410px)]">
        <Slider />
      </div>
      <div className="basis-1/4 flex gap-4">
        <div className="p-3 border rounded-md flex gap-3 items-center">
          <Icon name="SettingsIcon" />
          <span>Filters</span>
        </div>
        <div className="p-3 border rounded-md flex gap-3 items-center">
          <span className="font-semibold whitespace-nowrap">
            Display total before taxes
          </span>
          <Switch className="bg-vantyse-grey-2" />
        </div>
      </div>
    </div>
  );
}
