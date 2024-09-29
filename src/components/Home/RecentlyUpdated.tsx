"use client";

import { useState, useRef, useEffect } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecentlyUpdateItemData } from "../../types/RecentlyUpdate";
import { RecentlyUpdatedCard } from "../Card/RecentlyUpdatedCard";

const shows: RecentlyUpdateItemData[] = [
  {
    id: "001",
    title: "The Flash",
    series: "Series/S 2/EP 9",
    airDate: "11/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "002",
    title: "Fubar",
    series: "Series/S 1/EP 8",
    airDate: "11/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "003",
    title: "Manifest",
    series: "Series/S 4/EP 12",
    airDate: "11/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "004",
    title: "Stranger Things",
    series: "Series/S 4/EP 9",
    airDate: "12/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "005",
    title: "The Witcher",
    series: "Series/S 3/EP 1",
    airDate: "13/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "006",
    title: "Bridgerton",
    series: "Series/S 2/EP 8",
    airDate: "14/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "007",
    title: "The Crown",
    series: "Series/S 5/EP 10",
    airDate: "15/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "008",
    title: "Silo",
    series: "Series/S 1/EP 10",
    airDate: "11/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "009",
    title: "Bridgerton",
    series: "Series/S 2/EP 8",
    airDate: "14/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "010",
    title: "The Crown",
    series: "Series/S 5/EP 10",
    airDate: "15/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
  {
    id: "011",
    title: "Silo",
    series: "Series/S 1/EP 10",
    airDate: "11/05/23",
    imageUrl: "./src/assets/avatar.jpeg",
  },
];

export default function RecentlyUpdatedShows() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

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
            <RecentlyUpdatedCard item={show} />
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
