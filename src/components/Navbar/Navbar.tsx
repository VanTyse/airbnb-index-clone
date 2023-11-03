import Icon from "../../assets/icons/Icon";
import Slider from "../Sliders/NavSlider";
import { Switch } from "antd";

export default function () {
  return (
    <div className="flex gap-8 items-center">
      <Slider />
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
