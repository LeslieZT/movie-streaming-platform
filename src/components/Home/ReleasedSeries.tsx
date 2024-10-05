import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SerieCard } from "../Card/SerieCard";
import { QuarterGrid } from "../Section/QuarterGrid";
import { useReleasedSeries } from "../../hooks/home/useReleasedSeries";

export const ReleasedSeries = () => {
  const { results: series } = useReleasedSeries();

  return (
    <section>
      <div className="header-recommended flex justify-between mb-8 text-white ">
        <h2 className="text-xl font-bold ">New Released - Series</h2>
        <div className="flex items-center text-xl opacity-50 font-bold">
          <h2>View all</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <QuarterGrid>
        {series.map((serie) => (
          <SerieCard key={serie.id} data={serie} />
        ))}
      </QuarterGrid>
    </section>
  );
};
