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

interface Links {
  routeName: string;
  href: string;
  component: React.ReactNode;
}

const Features: Array<Links> = [
  {
    routeName: "Home",
    href: "/home",
    component: <GrHomeRounded className="w-5 ml-[1.5px] mr-[10px] h-5" />,
  },
  {
    routeName: "Discover",
    href: "/discover",
    component: <PiCompassBold className="w-6 mr-2 h-6 " />,
  },
  {
    routeName: "Collections",
    href: "/collections",
    component: <MdOutlineLibraryMusic className="w-6 mr-2 h-6" />,
  },
];

const Library: Array<Links> = [
  {
    routeName: "Downloads",
    href: "/",
    component: (
      <PiDownloadSimpleBold className="w-5 ml-[1.5px] mr-[10px] h-5" />
    ),
  },
  {
    routeName: "Favourites",
    href: "/discover",
    component: <TbMusicHeart className="w-6 mr-2 h-6 " />,
  },
  {
    routeName: "Local Files",
    href: "/collections",
    component: <PiFileMinusBold className="w-6 mr-2 h-6" />,
  },
];

export default function LeftSideBar() {
  return (
    <div className="bg-zinc-950 relative h-[90%] text-white w-[25%]">
      <div className="flex justify-between px-6 py-16">
        <a href="/">Logo</a>
        <button onClick={() => console.log("hi")}>click me</button>
      </div>
      <div className="pl-6 pt-5">
        <p className="pb-3 tracking-wider text-sm font-semibold text-gray-600">
          FEATURES
        </p>
        <ul className="pl-1 flex gap-y-3 justify-center text-gray-400 items-start flex-col">
          {Features.map((links, idx) => (
            <li key={idx}>
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
        <ul className="pl-1 flex gap-y-3 justify-center text-gray-400 items-start flex-col">
          {Library.map((links, idx) => (
            <li key={idx}>
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
      <div className="absolute inset-x-0 flex justify-center items-center border-2 border-white bottom-0 h-[30%] bg-zinc-950 text-white w-full ">
        Thumbnail
      </div>
    </div>
  );
}
