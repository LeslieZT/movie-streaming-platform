import { RecentlyUpdateSerie } from "../../types/Serie.type";

export const RecentlyUpdatedCard = ({ data }: { data: RecentlyUpdateSerie }) => {
  return (
    <div key={data.id} className="flex gap-2 flex-shrink-0 w-[300px]">
      <img src={data.posterPath} alt={data.name} className="w-[80px] h-[120px] object-cover rounded-lg" />
      <div className="w-f">
        <h3 className="font-medium text-base text-white">{data.name}</h3>
        <p className="text-sm text-gray-400">{data.overview.substring(0, 50)}</p>
        <p className="text-sm text-gray-400">{data.firtAirDate}</p>
      </div>
    </div>
  );
};
