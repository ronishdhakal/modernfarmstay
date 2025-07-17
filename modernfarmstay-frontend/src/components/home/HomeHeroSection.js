"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchHeroSection } from "@/utils/api";
import buildImageUrl from "@/utils/buildImageUrl";

export default function HomeHeroSection() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    async function loadHero() {
      try {
        const data = await fetchHeroSection();
        setHero(data.results[0]);
      } catch (err) {
        console.error("Failed to fetch hero section:", err);
      }
    }
    loadHero();
  }, []);

  if (!hero) {
    return <div className="h-[600px] bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div
      className="relative flex items-center justify-center h-[600px] text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${buildImageUrl(hero.image)})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* simpler overlay */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{hero.heading}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{hero.subheading}</p>
        <div className="flex justify-center space-x-4">
          <Link href="/contact">
            <button className="bg-[#54b435] hover:bg-[#459a2d] text-white font-semibold px-6 py-3 rounded transition">
              Book Your Stay
            </button>
          </Link>
          <Link href="/rooms">
            <button className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#54b435] transition">
              Explore Rooms
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
