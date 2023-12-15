import { IoIosArrowDown } from "react-icons/io";

export default function RevealSectionBtn({ buttonClicked, arrowUp }) {
  return (
    <button onClick={() => buttonClicked()}>
      <IoIosArrowDown className={arrowUp ? "arrowup" : "arrowup revealed"} />
    </button>
  );
}
