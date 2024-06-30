import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeviceRow() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 relative">
      <div className="absolute cursor-pointer top-4 right-4">
        <FontAwesomeIcon className="size-4 text-gray-400" icon={faHeart} />
      </div>
      <div className="w-1/6 p-4">
        <span className="text-lg font-bold">iPhone 13 Pro</span>
      </div>
      <div className="w-1/6 p-4">
        <span className="text-lg font-bold">Grade A+</span>
      </div>
      <div className="w-1/6 p-4">
        <span className="text-lg font-bold">Info</span>
      </div>
      <div className="w-1/6 p-4">
        <span className="text-lg font-bold">Dark Gray</span>
      </div>
      <div className="w-1/6 p-4">
        <span className="text-lg font-bold">Quantity</span>
      </div>
      <div className="w-1/6 p-4">
        <span className="text-lg font-bold">500$</span>
      </div>
    </div>
  );
}
