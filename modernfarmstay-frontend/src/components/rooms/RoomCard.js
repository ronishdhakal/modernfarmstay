import Image from "next/image";
import Link from "next/link";
import { Users, Clock, Calendar } from "lucide-react";
import buildImageUrl from "@/utils/buildImageUrl";

export default function RoomCard({ room }) {
  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
      {/* Image on the left */}
      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
        <Image
          src={
            room.gallery && room.gallery.length > 0
              ? buildImageUrl(room.gallery[0].image)
              : "/placeholder.svg?height=300&width=400"
          }
          alt={room.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content on the right */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Title + Price on the same row */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-800">{room.title}</h3>
            <div className="text-2xl font-bold text-[#54b435] whitespace-nowrap">
              ${room.price}
              <span className="text-sm font-normal text-gray-500"> / Night</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>Up to {room.max_guests} guests</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{room.min_stay_days} night min</span>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-4 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Check-in: {formatTime(room.check_in_time)}</span>
          </div>

          {room.features && room.features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {room.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                    {feature.feature}
                  </span>
                ))}
                {room.features.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                    +{room.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-4">
          <Link href={`/rooms/${room.slug}`} className="flex-1">
            <button className="w-full bg-[#54b435] hover:bg-[#459a2d] text-white py-2 px-4 rounded-md font-semibold transition-colors">
              View Details
            </button>
          </Link>
          <Link href={`/rooms/${room.slug}#booking`}>
            <button className="border border-[#54b435] text-[#54b435] hover:bg-[#54b435] hover:text-white py-2 px-4 rounded-md font-semibold transition-colors">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
