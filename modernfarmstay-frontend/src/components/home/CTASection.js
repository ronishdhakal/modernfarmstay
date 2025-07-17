"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { fetchCTASection } from "@/utils/api"

export default function CTASection() {
  const [cta, setCta] = useState(null)

  useEffect(() => {
    async function fetchCTA() {
      try {
        const data = await fetchCTASection()
        setCta(data.results?.[0] || { text: "Ready for Your Farm Adventure?" })
      } catch (err) {
        console.error("Failed to fetch CTA section:", err)
        setCta({ text: "Ready for Your Farm Adventure?" })
      }
    }
    fetchCTA()
  }, [])

  if (!cta) {
    return <div className="py-16 text-center text-gray-500">Loading...</div>
  }

  return (
    <section className="bg-[#54b435] text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">{cta.text}</h2>
        <p className="text-xl mb-8 opacity-90">
          Book your stay today and experience the magic of farm life. Create memories that will last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/rooms">
            <button className="bg-white text-[#54b435] hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors text-lg">
              Book Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#54b435] px-8 py-4 rounded-md font-semibold transition-colors text-lg bg-transparent">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
