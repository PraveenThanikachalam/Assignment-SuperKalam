import Image from "next/image";
import StickySearchBar from "./components/StickySearchBar";
import banner from "@/public/banner.jpg";
import Recommands from "./components/Recommends";
import cover1 from "@/public/covers/cover1.jpg";
import cover2 from "@/public/covers/cover2.jpg";

const Items1 = [
  {
    thumbnail: cover1,
    desp1: "Pain",
    desp2: "Rayan Jones",
  },
  {
    thumbnail: cover1,
    desp1: "Pain",
    desp2: "Rayan Jones",
  },
  {
    thumbnail: cover1,
    desp1: "Pain",
    desp2: "Rayan Jones",
  },
  {
    thumbnail: cover1,
    desp1: "Pain",
    desp2: "Rayan Jones",
  },
  {
    thumbnail: cover1,
    desp1: "Pain",
    desp2: "Rayan Jones",
  },
];

const Items2 = [
  {
    thumbnail: cover2,
    desp1: "Piano Jazz",
    desp2: "By Joy Fabiani",
  },
  {
    thumbnail: cover2,
    desp1: "Piano Jazz",
    desp2: "By Joy Fabiani",
  },
  {
    thumbnail: cover2,
    desp1: "Piano Jazz",
    desp2: "By Joy Fabiani",
  },
  {
    thumbnail: cover2,
    desp1: "Piano Jazz",
    desp2: "By Joy Fabiani",
  },
  {
    thumbnail: cover2,
    desp1: "Piano Jazz",
    desp2: "By Joy Fabiani",
  },
];

export default function Home() {
  return (
    <div className="w-full md:relative absolute lg:h-full h-[90%] overflow-y-scroll overflow-x-hidden text-white px-2 md:px-10 lg:px-16 py-5 md:py-10 flex flex-col gap-y-5 md:gap-y-10 bg-zinc-900">
      <StickySearchBar />
      <div className="h-[500px] bg-[rgb(242,6,54)] p-4 rounded-lg w-full">
        <Image className="object-cover w-full h-full" src={banner} alt={""} />
      </div>
      <div className="w-full h-full">
        <Recommands title={"Hello, Aseem"} items={Items1} />
        <Recommands title={"New releases for you"} items={Items2} />
      </div>
    </div>
  );
}
