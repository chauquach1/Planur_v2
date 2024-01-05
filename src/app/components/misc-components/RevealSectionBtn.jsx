import { IoIosArrowDown } from "react-icons/io";

export default function RevealSectionBtn({category, buttonClicked, arrowUp }) {
  return (
    <button onClick={() => buttonClicked()}>
      <div className="flex flex-row w-full justify-between p-2 pe-10 items-center">
        <h1 className="font-bold text-lg text-white">{category}</h1>
        <IoIosArrowDown className={arrowUp ? "arrowup" : "arrowup revealed"} />
      </div>
    </button>
  );
}
