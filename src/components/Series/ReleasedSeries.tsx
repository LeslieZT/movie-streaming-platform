import { useEffect, useState } from "react";
import { getReleasedSeries } from "./Serie.service";
import { Serie } from "./Serie.type";
import { SerieCard } from "./SerieCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReleasedSeries = () => {
  const [Series, setSeries] = useState<Serie[]>([]);
  useEffect(() => {
    const fetchSeries = async () => {
      const SeriesData = await getReleasedSeries();
      const first4Elements = SeriesData.results.slice(0, 4);
      setSeries(first4Elements);
    };
    fetchSeries();
  }, []);

  return (
    <section>
      <div className="header-recommended flex justify-between mb-8 text-white ">
        <h2 className="text-xl font-bold ">New Released - Series</h2>
        <div className="flex items-center text-xl opacity-50 font-bold">
          <h2>View all</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-16">
        {Series.map((serie) => (
          <SerieCard key={serie.id} data={serie} />
        ))}
      </div>
    </section>
  );
};
