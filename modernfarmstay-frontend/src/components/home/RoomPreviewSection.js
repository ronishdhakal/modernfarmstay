"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { fetchRooms } from "@/utils/api"
import buildImageUrl from "@/utils/buildImageUrl"

export default function RoomPreviewSection() {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    async function loadRooms() {
      try {
        const data = await fetchRooms()
        setRooms(data.slice(0, 3))
      } catch (err) {
        console.error("Failed to fetch rooms:", err)
      }
    }
    loadRooms()
  }, [])

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Comfortable Rooms</h2>
          <p className="text-xl text-gray-600">Choose from our selection of cozy, well-appointed accommodations</p>
        </div>

        {rooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {rooms.map((room) => (
              <div
                key={room.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  {room.gallery && room.gallery[0]?.image ? (
                    <Image
                      src={buildImageUrl(room.gallery[0].image) || "/placeholder.svg"}
                      alt={room.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                  {/* <div className="absolute top-3 right-3 bg-[#54b435] text-white px-2 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    4.8
                  </div> */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.slice(0, 5).map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {feature.feature}
                      </span>
                    ))}
                    {room.features.length > 5 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        +{room.features.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[#54b435] font-bold text-2xl">
                     NPR {room.price}
                      <span className="text-gray-500 font-normal text-sm">/night</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/rooms/${room.slug}`} className="flex-1">
                      <button className="w-full bg-[#54b435] hover:bg-[#459a2d] text-white py-2 px-4 rounded-md font-semibold transition-colors">
                        View Details
                      </button>
                    </Link>
                    <Link href={`/rooms/${room.slug}#booking`}>
                      <button className="border-2 border-[#54b435] text-[#54b435] hover:bg-[#54b435] hover:text-white py-2 px-4 rounded-md font-semibold transition-colors">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">Loading rooms...</div>
        )}

        <div className="text-center">
          <Link href="/rooms">
            <button className="border-2 border-[#54b435] text-[#54b435] px-8 py-3 rounded-md hover:bg-[#54b435] hover:text-white font-semibold transition-colors text-lg">
              View All Rooms
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
