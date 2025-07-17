"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchFarmhouseGallery } from "@/utils/api";
import buildImageUrl from "@/utils/buildImageUrl";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function FarmLifeGallery() {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await fetchFarmhouseGallery();
        setImages(data.results || []);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      }
    }
    loadGallery();
  }, []);

  const lightboxImages = images.map((img) => ({
    src: buildImageUrl(img.image),
    alt: img.caption || "Farm Image",
  }));

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Farm Life Gallery
        </h2>

        {images.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square relative rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  {img.image ? (
                    <Image
                      src={buildImageUrl(img.image)}
                      alt={img.caption || "Farm Image"}
                      fill
                      className="object-cover transition-opacity duration-300 hover:opacity-90"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Lightbox
              open={selectedImageIndex !== null}
              index={selectedImageIndex}
              close={() => setSelectedImageIndex(null)}
              slides={lightboxImages}
              onPrev={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
              onNext={() => setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
              carousel={{ finite: false }}
              render={{ buttonPrev: null, buttonNext: null }}
              styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
            />
          </>
        ) : (
          <div className="text-center text-gray-500 text-lg">Loading gallery...</div>
        )}
      </div>
    </section>
  );
}