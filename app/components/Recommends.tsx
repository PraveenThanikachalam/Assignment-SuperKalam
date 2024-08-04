import Image from "next/image";

interface GridItem {
  thumbnail: any;
  desp1: string;
  desp2: string;
}

interface Types {
  title: string;
  items: Array<GridItem>;
}

export default function Recommands({ title, items }: Types) {
  return (
    <div>
      <div className="flex w-full justify-between items-end">
        <h3 className="text-white font-bold tracking-wider text-3xl">
          {title}
        </h3>
        <h4 className="self-end text-gray-400 p-0 pr-2">See all</h4>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-2 md:pl-5 md:gap-x-4 py-4 gap-y-3 ">
        {items.map((item, idx) => (
          <div className="" key={idx}>
            <div className="rounded-md overflow-hidden  w-[200px] h-[200px]">
              <Image
                className="object-cover w-full h-full "
                src={item.thumbnail}
                alt={""}
              />
            </div>
            <div>
              <h3 className="pt-2 font-bold tracking-wider">{item.desp1}</h3>
              <h3 className="text-gray-400 text-sm">{item.desp2}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
