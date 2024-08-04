import { CiHeart } from "react-icons/ci";
import MotionWrapper from "../Motions/FadingMotions";
import Image from "next/image";
import { CgAddR } from "react-icons/cg";
import { IoShuffle } from "react-icons/io5";
import { MdOutlinePauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { PiDevices, PiSkipBack, PiSkipForward } from "react-icons/pi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { SlVolume1 } from "react-icons/sl";
import { LuMic } from "react-icons/lu";

export default function PlayBar() {
  return (
    <MotionWrapper
      classNames={
        "absolute inset-x-0 bottom-0 flex justify-between item-center h-[10%] bg-zinc-950 shadow-lg shadow-white text-white w-full "
      }
      type={"FadeUp"}
      duration={0.3}
    >
      <div className="flex w-[320px] h-full justify-center p-2 gap-x-10 items-center">
        <div>Song Name</div>
        <CiHeart className="w-6 h-6" />
        <CgAddR className="w-5 h-5" />
      </div>
      <div className="w-[500px] pt-2 flex flex-col justify-center items-center h-full">
        <div className="flex w-full h-full justify-center items-center p-2 gap-x-10">
          <IoShuffle className="w-7 h-7" />
          <PiSkipBack className="w-6 h-6" />
          <MdPlayCircleFilled className="w-7 h-7" />
          {/* <MdOutlinePauseCircleFilled className="w-6 h-6" /> */}
          <PiSkipForward className="w-6 h-6" />
          <HiOutlineArrowPathRoundedSquare className="w-6 h-6" />
        </div>
        <div className="w-full h-full">
          <input className="w-full h-[3px]" type="range"></input>
        </div>
      </div>
      <div className="w-[320px] flex gap-x-2 justify-center items-center h-full">
        <SlVolume1 className="w-5 h-5" />
        <input type="range" className="w-[30%] h-[2px]"></input>
        <LuMic className="w-5 h-5" />
        <PiDevices className="w-6 h-6" />
      </div>
    </MotionWrapper>
  );
}
