export default function RoomOther({ room, formatTime }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Check-in/Check-out</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Check-in:</span>
            <span>{formatTime(room.check_in_time)}</span>
          </div>
          <div className="flex justify-between">
            <span>Check-out:</span>
            <span>{formatTime(room.check_out_time)}</span>
          </div>
          <div className="flex justify-between">
            <span>Min. stay:</span>
            <span>{room.min_stay_days} night{room.min_stay_days > 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Room Details</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Max Guests:</span>
            <span>{room.max_guests}</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span className="text-[#54b435] font-semibold">
              NPR {room.price}/night
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
