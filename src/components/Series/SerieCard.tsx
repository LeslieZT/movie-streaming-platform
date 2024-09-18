import { Serie } from "./Serie.type";
import { getImageUrl } from "./Serie.service";

export const SerieCard = ({ data }: { data: Serie }) => {
  const imgUrl = getImageUrl(data.poster_path);
  return (
    <div className="flex flex-col w-[256px] ">
      <img
        src={imgUrl}
        alt={data.name}
        className="w-[256px] h-[344px] mb-4 rounded-md"
      />
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-white text-left text-xs font-bold">{data.name}</h2>
        <div className="flex gap-1">
          <p className="bg-red-600 text-white text-xs p-2 rounded-md">HD</p>
          <div className="flex items-center gap-2 p-2 text-white text-xs border-solid border-[1px] border-red-600 rounded-md">
            <span>Season1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
