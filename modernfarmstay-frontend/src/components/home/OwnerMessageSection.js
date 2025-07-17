"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { fetchOwnerMessage } from "@/utils/api"
import buildImageUrl from "@/utils/buildImageUrl"

export default function OwnerMessageSection() {
  const [owner, setOwner] = useState(null)

  useEffect(() => {
    async function loadOwner() {
      try {
        const data = await fetchOwnerMessage()
        setOwner(data.results[0])
      } catch (err) {
        console.error("Failed to fetch owner message:", err)
      }
    }
    loadOwner()
  }, [])

  if (!owner) {
    return <div className="py-16 text-center text-gray-500">Loading...</div>
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">A Personal Welcome</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {owner.message ||
                "Welcome to our family farm! We're passionate about sustainable farming and love sharing our way of life with visitors from around the world."}
            </p>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold text-lg">Farm Owners</p>
                <p className="text-gray-500">Modern Farm Stay</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              {owner.image ? (
                <Image
                  src={buildImageUrl(owner.image) || "/placeholder.svg"}
                  alt="Farm Owner"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
