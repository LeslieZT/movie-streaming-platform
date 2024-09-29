import { RecentlyUpdateItemData } from "../../types/RecentlyUpdate";

export const RecentlyUpdatedCard = ({ item }: { item: RecentlyUpdateItemData }) => {
  return (
    <div key={item.id} className="flex items-center gap-2">
      <img src={item.imageUrl} alt={item.title} className="w-[80px] h-[120px] object-cover rounded-lg" />
      <div className="">
        <h3 className="font-bold text-base">{item.title}</h3>
        <p className="text-sm text-gray-400">{item.series}</p>
        <p className="text-sm text-gray-400">{item.airDate}</p>
      </div>
    </div>
  );
};
