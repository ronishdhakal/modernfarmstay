import { TreePine, Waves, Utensils } from "lucide-react"

export default function WhyChooseSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Our Farm Stay?</h2>
          <p className="text-xl text-gray-600">Experience the authentic countryside lifestyle</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-[#54b435] text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#459a2d] transition-colors">
              <TreePine className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Organic Farm Experience</h3>
            <p className="text-gray-600 leading-relaxed">
              Immerse yourself in sustainable farming practices and enjoy fresh, organic produce daily.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-[#54b435] text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#459a2d] transition-colors">
              <Waves className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Peaceful Environment</h3>
            <p className="text-gray-600 leading-relaxed">
              Escape the city noise and enjoy the tranquil sounds of nature and farm animals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-[#54b435] text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#459a2d] transition-colors">
              <Utensils className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Farm-to-Table Dining</h3>
            <p className="text-gray-600 leading-relaxed">
              Savor delicious meals prepared with fresh ingredients straight from our farm.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
