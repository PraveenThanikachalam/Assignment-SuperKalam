"use client";

import { CiHeart } from "react-icons/ci";
import MotionWrapper from "../Motions/FadingMotions";
import { CgAddR } from "react-icons/cg";
import { IoClose, IoShuffle } from "react-icons/io5";
import { MdPlayCircleFilled } from "react-icons/md";
import { PiDevices, PiSkipBack, PiSkipForward } from "react-icons/pi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { SlVolume1 } from "react-icons/sl";
import { LuMic } from "react-icons/lu";
import { RiShareLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../context/store";

export default function PlayBar() {
  const { hamburgerState, setHamburgerState } = useGlobalContext();
  const onClickHandler = () => {
    setHamburgerState(true);
  };
  return (
    <MotionWrapper
      className={
        "md:absolute fixed inset-x-0 bottom-0 flex md:justify-center lg:justify-between item-center h-[10%] bg-zinc-950 shadow-lg shadow-white text-white w-full "
      }
      type={"FadeUp"}
      duration={0.3}
    >
      <div className="lg:flex hidden w-[320px] h-full justify-center p-2 gap-x-10 items-center">
        <div>Song Name</div>
        <CiHeart className="w-6 h-6" />
        <CgAddR className="w-5 h-5" />
      </div>
      <div className="w-[500px] pt-2 flex flex-col justify-center items-center h-full">
        <div className="flex w-full h-full justify-center items-center p-2 gap-x-7 md:gap-x-10">
          <CiHeart className="w-7 h-7 lg:hidden flex" />
          <IoShuffle className="w-7 h-7" />
          <PiSkipBack className="w-6 h-6" />
          <MdPlayCircleFilled className="w-7 h-7" />
          {/* <MdOutlinePauseCircleFilled className="w-6 h-6" /> */}
          <PiSkipForward className="w-6 h-6" />
          <HiOutlineArrowPathRoundedSquare className="w-6 h-6" />
          <div
            className={
              hamburgerState
                ? " flex ease-in-out w-[150px] lg:hidden flex-col justify-start items-center gap-y-6 right-0 p-5 bottom-[91px] bg-zinc-950 rounded-t-lg absolute h-[200px] "
                : " hidden "
            }
          >
            <LuMic className="w-5 h-5" />
            <PiDevices className="w-6 h-6" />
            <RiShareLine className="w-5 h-5 text-white" />
            <div className=" flex items-center gap-x-4 ">
              <SlVolume1 className="w-5 h-5" />
              <input type="range" className="w-[50%] h-[2px]" />
            </div>
          </div>
          {hamburgerState ? (
            <button
              onClick={() => setHamburgerState(false)}
              className="w-6 h-6 lg:hidden flex"
            >
              <IoClose className="text-white w-6 h-6" />
            </button>
          ) : (
            <button onClick={onClickHandler} className="w-6 h-6 lg:hidden flex">
              <RxHamburgerMenu className="w-full h-full text-white" />
            </button>
          )}
        </div>
        <div className="w-full h-full">
          <input className="w-full h-[3px]" type="range"></input>
        </div>
      </div>
      <div className="w-[320px] hidden lg:flex gap-x-4 justify-center items-center h-full">
        <SlVolume1 className="w-5 h-5" />
        <input type="range" className="w-[30%] h-[2px]"></input>
        <LuMic className="w-5 h-5" />
        <PiDevices className="w-6 h-6" />
        <RiShareLine className="w-5 h-5 text-white" />
      </div>
    </MotionWrapper>
  );
}
