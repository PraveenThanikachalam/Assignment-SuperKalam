"use client";

import { BsThreeDots } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { useGlobalContext } from "../context/store";

export default function StickySearchBar() {
  const { setButtonState } = useGlobalContext();
  const { setButtonTwoState } = useGlobalContext();
  const onClickHandlerOne = () => {
    setButtonState(true);
  };
  const onClickHandlerTwo = () => {
    setButtonTwoState(true);
  };

  return (
    <div className="flex gap-x-6 items-center justify-center">
      <div className="md:flex hidden gap-x-4">
        <GoChevronLeft className="w-6 h-6" />
        <GoChevronRight className="w-6 h-6" />
      </div>
      <div className="w-full justify-center items-center flex">
        <button
          onClick={onClickHandlerOne}
          className="w-7 h-7 flex md:hidden mr-2"
        >
          <GoChevronLeft className=" w-full h-full " />
        </button>
        <button className="bg-white rounded-l-full w-10 p-4">
          <LuSearch className="text-black w-6 h-6" />
        </button>
        <input
          placeholder="Search for artists, songs or albums"
          className=" w-full p-4 text-black rounded-r-full outline-none"
          type="search"
        />
        <button
          onClick={onClickHandlerTwo}
          className="w-7 h-7 flex md:hidden ml-2"
        >
          <GoChevronRight className="w-full h-full" />
        </button>
      </div>
      <BsThreeDots className="w-6 hidden md:flex h-6 text-white" />
    </div>
  );
}
