"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { fetchRoomDetail } from "@/utils/api";
import RoomGallery from "@/components/rooms/RoomGallery";
import RoomHeader from "@/components/rooms/RoomHeader";
import RoomFeatures from "@/components/rooms/RoomFeatures";
import RoomPolicies from "@/components/rooms/RoomPolicies";
import RoomOther from "@/components/rooms/RoomOther";
import BookingForm from "@/components/rooms/BookingForm";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function RoomDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const loadRoomDetail = async () => {
      try {
        setLoading(true);
        const roomData = await fetchRoomDetail(slug);
        setRoom(roomData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRoomDetail();
  }, [slug]);

  // 🚀 Force scroll to booking if URL has #booking
  useEffect(() => {
    if (!slug) return;
    if (window.location.hash === "#booking") {
      const el = document.getElementById("booking");
      if (el) {
        // Use slight timeout to ensure layout rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [slug]);

  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#54b435] mx-auto mb-4" />
          <p className="text-gray-600">Loading room details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading room: {error}</p>
          <Link href="/rooms">
            <button className="bg-[#54b435] text-white px-4 py-2 rounded-md hover:bg-[#459a2d]">
              Back to Rooms
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Room not found</p>
          <Link href="/rooms">
            <button className="bg-[#54b435] text-white px-4 py-2 rounded-md hover:bg-[#459a2d]">
              Back to Rooms
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{room.title} - Modern Farm Stay</title>
        <meta name="description" content={room.short_description} />
      </Head>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link
              href="/rooms"
              className="text-[#54b435] hover:underline flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Rooms
            </Link>
          </div>

          <RoomGallery gallery={room.gallery} roomTitle={room.title} />
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="order-1 lg:order-none lg:col-span-2">
            <RoomHeader room={room} />
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{room.short_description}</p>
            <RoomFeatures features={room.features} />
            <RoomPolicies policies={room.policies} />
            <RoomOther room={room} formatTime={formatTime} />
          </div>

          <div id="booking" className="scroll-mt-24 order-2 lg:order-none lg:col-span-1">
            <BookingForm room={room} />
          </div>
        </div>
      </section>
    </div>
  );
}
