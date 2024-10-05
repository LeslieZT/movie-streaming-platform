"use client";

import { useState, useRef, useEffect } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecentlyUpdatedCard } from "../Card/RecentlyUpdatedCard";
import { useRecentlyUpdateSeries } from "../../hooks/home/useRecentlyUpdatedSeries";

export default function RecentlyUpdatedShows() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  const { results: shows } = useRecentlyUpdateSeries();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1280) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleShows = shows.slice(startIndex, startIndex + visibleItems);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && startIndex > 0) {
      setStartIndex(Math.max(0, startIndex - visibleItems));
    } else if (direction === "right" && startIndex < shows.length - visibleItems) {
      setStartIndex(Math.min(shows.length - visibleItems, startIndex + visibleItems));
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Recently Updated</h2>

      <div className="flex items-center justify-between gap-1">
        {startIndex > 0 && (
          <button
            className="bg-gray-400 hover:bg-gray-300 rounded-full p-3"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="xl:h-8 xl:w-8 lg:h-6 lg:w-6 sm:h-4 sm:w-4" />
          </button>
        )}

        <div ref={containerRef} className="flex justify-around overflow-hidden w-full">
          {visibleShows.map((show) => (
            <RecentlyUpdatedCard data={show} key={show.id} />
          ))}
        </div>

        {startIndex < shows.length - 4 && (
          <button
            className="bg-gray-400 hover:bg-gray-300 rounded-full p-3"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <FontAwesomeIcon icon={faArrowRight} className="xl:h-8 xl:w-8 lg:h-6 lg:w-6 sm:h-4 sm:w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
