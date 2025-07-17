import { UserRound, CalendarDays } from "lucide-react";

export default function RoomHeader({ room }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-200 pb-6">
      <div className="w-full md:w-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-sans leading-tight tracking-tight">
          {room.title}
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <UserRound className="w-5 h-5 text-[#54b435]" />
            <span>Up to {room.max_guests} guests</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-[#54b435]" />
            <span>{room.min_stay_days} Night Minimum Stay</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-auto mt-4 md:mt-0 text-right">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#54b435] block">
          NPR {room.price}
        </span>
        <span className="text-gray-500 text-sm sm:text-base block">per night</span>
      </div>
    </div>
  );
}