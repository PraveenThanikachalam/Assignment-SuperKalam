"use client";

import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { TbMusicHeart } from "react-icons/tb";
import {
  PiCompassBold,
  PiDownloadSimpleBold,
  PiFileMinusBold,
} from "react-icons/pi";
import Link from "next/link";
import MotionWrapper from "../Motions/FadingMotions";
import { useGlobalContext } from "../context/store";
import { IoClose } from "react-icons/io5";
import { TbChevronDown } from "react-icons/tb";

interface Links {
  routeName: string;
  href: string;
  component: React.ReactNode;
}

const Features: Array<Links> = [
  {
    routeName: "Home",
    href: "/",
    component: <GrHomeRounded className="w-5 ml-[1.5px] mr-[10px] h-5" />,
  },
  {
    routeName: "Discover",
    href: "",
    component: <PiCompassBold className="w-6 mr-2 h-6 " />,
  },
  {
    routeName: "Collections",
    href: "",
    component: <MdOutlineLibraryMusic className="w-6 mr-2 h-6" />,
  },
];

const Library: Array<Links> = [
  {
    routeName: "Downloads",
    href: "",
    component: (
      <PiDownloadSimpleBold className="w-5 ml-[1.5px] mr-[10px] h-5" />
    ),
  },
  {
    routeName: "Favourites",
    href: "",
    component: <TbMusicHeart className="w-6 mr-2 h-6 " />,
  },
  {
    routeName: "Local Files",
    href: "",
    component: <PiFileMinusBold className="w-6 mr-2 h-6" />,
  },
];

export default function LeftSideBar() {
  const { buttonState, setButtonState } = useGlobalContext();

  const onClickHandler = () => {
    setButtonState(false);
  };

  return (
    <MotionWrapper
      className={
        buttonState
          ? "flex absolute w-[230px] h-full z-10 bg-black "
          : "hidden w-[25%] bg-zinc-950 h-[90%] " +
            " lg:flex md:flex-col relative  text-white "
      }
      duration={0.5}
      type={"FadeRight"}
    >
      <div className="lg:flex justify-between hidden px-6 py-16">
        <a
          className="text-black justify-center flex items-center font-bold bg-white  w-16 rounded-full h-16"
          href="/"
        >
          Logo
        </a>
        <button className="text-white">
          <TbChevronDown className="w-6 h-6" />
        </button>
      </div>
      <div className="pl-6 pt-5">
        <p className="pb-3 tracking-wider text-sm font-semibold text-gray-600">
          FEATURES
        </p>
        <ul className="pl-1 flex justify-center text-gray-400 items-start flex-col">
          {Features.map((links, idx) => (
            <li className="hover:bg-zinc-900 p-2 rounded-lg" key={idx}>
              <Link legacyBehavior href={links.href}>
                <a href={links.href} className="flex gap-x-4 items-center">
                  {links.component}
                  {links.routeName}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p className="pb-3 pt-4 tracking-wider text-sm font-semibold text-gray-600">
          LIBRARY
        </p>
        <ul className="pl-1 flex justify-center text-gray-400 items-start flex-col">
          {Library.map((links, idx) => (
            <li className="hover:bg-zinc-900 p-2 rounded-lg" key={idx}>
              <Link legacyBehavior href={links.href}>
                <a className="flex gap-x-4 items-center">
                  {links.component}
                  {links.routeName}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="flex lg:hidden justify-start" onClick={onClickHandler}>
        <IoClose className="text-white m-4 w-6 h-6" />
      </button>
      <div className="absolute hidden inset-x-0 md:flex justify-center items-center border-2 border-white bottom-0 h-[30%] bg-zinc-900 text-white w-full ">
        Thumbnail
      </div>
    </MotionWrapper>
  );
}
