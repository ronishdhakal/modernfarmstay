"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { fetchRooms } from "@/utils/api";
import RoomCard from "@/components/rooms/RoomCard";
import { Wifi, Coffee, Car, TreePine, Loader2 } from "lucide-react";

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        setLoading(true);
        const roomsData = await fetchRooms();
        setRooms(roomsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRooms();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Head>
          <title>Book Farm Hosue / Stay Rooms in Bandipur - Modern Farm Stay</title>
          <meta
            name="description"
            content="Visiting Bandipur, Dumre, Tanahun and wondering where to stay? Book comfortable rooms at Modern Farm Stay and experience nature at its best!"
          />
        </Head>

        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#54b435] mx-auto mb-4" />
            <p className="text-gray-600">Loading rooms...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Head>
          <title>Our Rooms - Green Valley Farm Stay</title>
        </Head>

        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error loading rooms: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#54b435] text-white px-4 py-2 rounded-md hover:bg-[#459a2d]"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Rooms & Suites - Green Valley Farm Stay</title>
        <meta
          name="description"
          content="Choose from our comfortable accommodations designed for every budget and preference at Green Valley Farm Stay"
        />
      </Head>



      {/* Rooms Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {rooms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No rooms available at the moment.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {rooms.map((room) => (
                <RoomCard key={room.slug} room={room} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Farm Stay Amenities
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#54b435] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Free WiFi</h3>
              <p className="text-gray-600 text-sm">
                High-speed internet throughout the property
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#54b435] rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Farm Breakfast</h3>
              <p className="text-gray-600 text-sm">
                Fresh organic breakfast with farm produce
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#54b435] rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Free Parking</h3>
              <p className="text-gray-600 text-sm">
                Complimentary parking for all guests
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#54b435] rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Nature Activities</h3>
              <p className="text-gray-600 text-sm">
                Farm tours, hiking trails, and outdoor activities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
