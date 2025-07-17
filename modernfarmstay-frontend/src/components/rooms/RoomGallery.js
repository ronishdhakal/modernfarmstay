"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import buildImageUrl from "@/utils/buildImageUrl";

export default function RoomGallery({ gallery, roomTitle }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!gallery || gallery.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 h-96 mb-8">
        {/* Main Image */}
        <div
          className="col-span-2 row-span-2 relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={
              gallery[selectedImage]?.image
                ? buildImageUrl(gallery[selectedImage].image)
                : "/placeholder.svg"
            }
            alt={gallery[selectedImage]?.caption || `${roomTitle} main view`}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Thumbnails */}
        {gallery.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              setSelectedImage(index + 1);
              setIsModalOpen(true);
            }}
          >
            <Image
              src={
                image.image ? buildImageUrl(image.image) : "/placeholder.svg"
              }
              alt={image.caption || `${roomTitle} view ${index + 2}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}

        {/* Show more overlay */}
        {gallery.length > 5 && (
          <div
            className="relative cursor-pointer bg-black bg-opacity-50 rounded-lg flex items-center justify-center text-white font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            +{gallery.length - 5} more
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative">
              <Image
                src={
                  gallery[selectedImage]?.image
                    ? buildImageUrl(gallery[selectedImage].image)
                    : "/placeholder.svg"
                }
                alt={gallery[selectedImage]?.caption || `${roomTitle} view`}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
            </div>

            {gallery[selectedImage]?.caption && (
              <p className="text-white text-center mt-4">
                {gallery[selectedImage].caption}
              </p>
            )}

            <div className="flex justify-center mt-4 space-x-2">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === selectedImage ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
