import Link from "next/link";
import MotionWrapper from "../Motions/FadingMotions";
import { PiBellSimpleLight } from "react-icons/pi";
import { TbChevronDown } from "react-icons/tb";
import PlayList from "./PlayList";
import pic from "@/public/pic.png";

const Songs = [
  {
    songName: "the song",
    authorName: "Praveen",
    thumbnail: pic,
    time: 4,
  },
  {
    songName: "the song",
    authorName: "Praveen",
    thumbnail: pic,
    time: 4,
  },
  {
    songName: "the song",
    authorName: "Praveen",
    thumbnail: pic,
    time: 4,
  },
  {
    songName: "the song",
    authorName: "Praveen",
    thumbnail: pic,
    time: 4,
  },
];

export default function RightSideBar() {
  return (
    <MotionWrapper
      duration={0.5}
      classNames="w-[25%] h-[90%] px-6 py-12 flex flex-col gap-y-5 bg-zinc-950 text-white"
      type={"FadeLeft"}
    >
      <div className="flex justify-between w-full h-auto items-center ">
        <Link href="/" className="w-[70%] items-center h-14 flex gap-x-2   ">
          <div className="text-black rounded-full flex items-center justify-center w-14 h-14 bg-white text-2xl font-bold">
            TL
          </div>
          <p>Timothy Luca</p>
        </Link>
        <div className=" relative ">
          <div className="absolute left-auto right-0 top-0 z-10 inline-block -translate-y-1 translate-x-1 rotate-0 skew-x-0 skew-y-0 scale-x-50 scale-y-50 rounded-full bg-blue-600 p-2.5 text-xs"></div>
          <PiBellSimpleLight className="w-6 relative h-6" />
        </div>
        <TbChevronDown className="w-6 h-6" />
      </div>
      <PlayList title={"Recently Played"} songList={Songs} />
      <PlayList title={"My Playlist"} songList={Songs} />
      <button className="p-4 bg-zinc-500 text-black font-bold tracking-wider rounded-lg">
        Create New Playlist
      </button>
    </MotionWrapper>
  );
}
