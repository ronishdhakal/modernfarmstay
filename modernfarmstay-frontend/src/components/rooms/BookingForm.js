"use client"

import { useState } from "react"
import { createBooking } from "@/utils/api";
import { Calendar, User, Phone, Mail, Globe, MessageSquare, Check, AlertCircle } from "lucide-react"

export default function BookingForm({ room }) {
  const [formData, setFormData] = useState({
    room: room.id, // ✅ changed from slug to ID
    full_name: "",
    phone: "",
    email: "",
    nationality: "",
    num_guests: 1,
    check_in: "",
    check_out: "",
    special_requests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateNights = () => {
    if (formData.check_in && formData.check_out) {
      const checkIn = new Date(formData.check_in)
      const checkOut = new Date(formData.check_out)
      const diffTime = checkOut - checkIn
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays > 0 ? diffDays : 0
    }
    return 0
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    return nights * Number.parseFloat(room.price)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage("")

    try {
      const nights = calculateNights()
      if (nights < room.min_stay_days) {
        throw new Error(`Minimum stay is ${room.min_stay_days} night(s)`)
      }

      if (formData.num_guests > room.max_guests) {
        throw new Error(`Maximum ${room.max_guests} guests allowed`)
      }

      await createBooking(formData)
      setSubmitStatus("success")

      setTimeout(() => {
        setFormData({
          room: room.id, // ✅ keep using ID on reset too
          full_name: "",
          phone: "",
          email: "",
          nationality: "",
          num_guests: 1,
          check_in: "",
          check_out: "",
          special_requests: "",
        })
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`)
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Book This Room</h3>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
          <Check className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-green-800 font-semibold">Booking Request Submitted!</p>
            <p className="text-green-700 text-sm">We'll contact you soon to confirm your reservation.</p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <div>
            <p className="text-red-800 font-semibold">Booking Failed</p>
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="check_in" className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 inline mr-1" />
              Check-in
            </label>
            <input
              type="date"
              id="check_in"
              name="check_in"
              value={formData.check_in}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54b435] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="check_out" className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 inline mr-1" />
              Check-out
            </label>
            <input
              type="date"
              id="check_out"
              name="check_out"
              value={formData.check_out}
              onChange={handleInputChange}
              required
              min={formData.check_in || new Date().toISOString().split("T")[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54b435] focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="num_guests" className="block text-sm font-medium text-gray-700 mb-1">
            <User className="w-4 h-4 inline mr-1" />
            Number of Guests
          </label>
          <select
            id="num_guests"
            name="num_guests"
            value={formData.num_guests}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54b435] focus:border-transparent"
          >
            {[...Array(room.max_guests)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Guest{i + 1 > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
            <User className="w-4 h-4 inline mr-1" />
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            required
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54b435] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            <Mail className="w-4 h-4 inline mr-1" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54b435] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            <Phone className="w-4 h-4 inline mr-1" />
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54b435] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
            <Globe className="w-4 h-4 inline mr-1" />
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            required
            placeholder="Enter your nationality"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54b435] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="special_requests" className="block text-sm font-medium text-gray-700 mb-1">
            <MessageSquare className="w-4 h-4 inline mr-1" />
            Special Requests
          </label>
          <textarea
            id="special_requests"
            name="special_requests"
            value={formData.special_requests}
            onChange={handleInputChange}
            rows={3}
            placeholder="Any special requests or dietary requirements?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54b435] focus:border-transparent"
          />
        </div>

        {formData.check_in && formData.check_out && (
          <div className="border-t pt-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Room Rate:</span>
                <span>${room.price}/night</span>
              </div>
              <div className="flex justify-between">
                <span>Nights:</span>
                <span>{calculateNights()}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total:</span>
                <span className="text-[#54b435]">${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#54b435] hover:bg-[#459a2d] text-white py-3 px-4 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Booking Request"}
        </button>

        <div className="text-center text-sm text-gray-500">
          <p>
            Check-in: {formatTime(room.check_in_time)} | Check-out: {formatTime(room.check_out_time)}
          </p>
          <p>
            Minimum stay: {room.min_stay_days} night{room.min_stay_days > 1 ? "s" : ""}
          </p>
        </div>
      </form>
    </div>
  )
}
