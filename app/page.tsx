import Image from "next/image";
import StickySearchBar from "./components/StickySearchBar";
import banner from "@/public/pic.png";
import Recommands from "./components/Recommends";
import pic from "@/public/pic.png";

const Items1 = [
  {
    thumbnail: pic,
    desp1: "New Song",
    desp2: "By Praveen",
  },
  {
    thumbnail: pic,
    desp1: "New Song",
    desp2: "By Praveen",
  },
  {
    thumbnail: pic,
    desp1: "New Song",
    desp2: "By Praveen",
  },
  {
    thumbnail: pic,
    desp1: "New Song",
    desp2: "By Praveen",
  },
  {
    thumbnail: pic,
    desp1: "New Song",
    desp2: "By Praveen",
  },
];

export default function Home() {
  return (
    <div className="w-full md:relative absolute md:h-full h-[90%] overflow-y-scroll text-white px-2 md:px-16 py-5 md:py-10 flex flex-col gap-y-5 md:gap-y-10 bg-zinc-900">
      <StickySearchBar />
      <div className="h-[300px] bg-white p-4 rounded-lg w-full">
        <Image className="object-cover w-full h-full" src={banner} alt={""} />
      </div>
      <div className="w-full h-full">
        <Recommands title={"Hello, Aseem"} items={Items1} />
        <Recommands title={"New releases for you"} items={Items1} />
      </div>
    </div>
  );
}
