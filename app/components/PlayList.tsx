import Image from "next/image";
import Link from "next/link";

interface songList {
  songName: string;
  authorName: string;
  thumbnail: any;
  time: string;
}

interface Types {
  title: string;
  songList: Array<songList>;
}

export default function PlayList({ title, songList }: Types) {
  return (
    <div className="flex p-4 md:p-0 flex-col">
      <div className="flex justify-between items-center gap-x-3">
        <p className="font-bold text-white text-[18px] tracking-wider">
          {title}
        </p>
        <Link className="text-gray-400 px-2" href={""}>
          See all
        </Link>
      </div>
      <div className="flex flex-col pt-2 gap-y-2 ">
        {songList.map((item, idx) => (
          <button
            className="flex justify-between rounded-lg py-1 items-center hover:bg-zinc-900 "
            key={idx}
          >
            <div className="flex items-center pl-2  gap-x-3">
              <Image
                className="w-[40px] h-[40px]"
                src={item.thumbnail}
                alt={""}
              />
              <div className="flex flex-col">
                <h3 className="text-white">{item.songName}</h3>
                <h4 className="text-white">{item.authorName}</h4>
              </div>
            </div>
            <h3 className="text-gray-400 text-sm p-2">{item.time}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}
