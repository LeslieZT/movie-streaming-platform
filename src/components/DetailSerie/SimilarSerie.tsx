import { useSimilarSeries } from "../../hooks/DetailSerie/useSimilarSeries";
import { SerieCard } from "../Card/SerieCard";

import { QuarterGrid } from "../Section/QuarterGrid";

export const SimilarSeries = () => {
  const { results: series, loading, errors } = useSimilarSeries();

  if (loading || !series) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Error: {errors}</div>;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-12">Similar Series</h2>
      <QuarterGrid>
        {series.map((serie) => (
          <SerieCard key={serie.id} data={serie} />
        ))}
      </QuarterGrid>
    </section>
  );
};
