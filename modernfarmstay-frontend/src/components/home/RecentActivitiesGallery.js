"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchActivitiesGallery } from "@/utils/api";
import buildImageUrl from "@/utils/buildImageUrl";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function RecentActivitiesGallery() {
  const [activities, setActivities] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    async function loadActivities() {
      try {
        const data = await fetchActivitiesGallery();
        setActivities(data.results || []);
      } catch (err) {
        console.error("Failed to fetch activities:", err);
      }
    }
    loadActivities();
  }, []);

  const lightboxImages = activities.map((item) => ({
    src: buildImageUrl(item.image) || "/placeholder.svg",
    alt: item.caption || "Farm activity",
  }));

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Recent Farm Activities</h2>
          <p className="text-xl text-gray-600">See what's happening around our farm</p>
        </div>

        {activities.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {activities.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <div className="relative aspect-square mb-3 rounded-lg overflow-hidden">
                    {item.image ? (
                      <Image
                        src={buildImageUrl(item.image) || "/placeholder.svg"}
                        alt={item.caption || "Farm activity"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No image</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[#54b435] transition-colors line-clamp-2">
                    {item.caption}
                  </h3>
                </div>
              ))}
            </div>
            <Lightbox
              open={selectedImageIndex !== null}
              index={selectedImageIndex}
              close={() => setSelectedImageIndex(null)}
              slides={lightboxImages}
              onPrev={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : activities.length - 1))}
              onNext={() => setSelectedImageIndex((prev) => (prev < activities.length - 1 ? prev + 1 : 0))}
              carousel={{ finite: false }}
              render={{ buttonPrev: null, buttonNext: null }}
              styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
            />
          </>
        ) : (
          <div className="text-center text-gray-500 text-lg py-12">Loading activities...</div>
        )}
      </div>
    </section>
  );
}