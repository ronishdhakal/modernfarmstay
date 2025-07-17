import { Check } from "lucide-react";

export default function RoomFeatures({ features }) {
  if (!features || features.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Room Features & Amenities</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#54b435]" />
            <span>{feature.feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
