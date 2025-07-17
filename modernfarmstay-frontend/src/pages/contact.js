import Head from "next/head";
import UniversalBooking from "@/components/UniversalBooking";
import { Twitter, Instagram, Youtube, MapPin, Mail, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - Modern Farm Stay</title>
        <meta 
          name="description" 
          content="Get in touch with Modern Farm Stay for bookings and inquiries." 
        />
      </Head>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: Contact Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#333]">Contact Us</h1>
            <p className="text-gray-600 text-lg mb-10">
              We're here to help you plan your perfect farm stay.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-gray-800">
                <Mail className="w-6 h-6 text-[#54b435]" />
                <span className="text-lg">modernfarmstaydumre@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <PhoneCall className="w-6 h-6 text-[#54b435]" />
                <span className="text-lg">+977 9841362697</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <MapPin className="w-6 h-6 text-[#54b435]" />
                <span className="text-lg">Dumre (Near Bandipur Cable Car), Tanahun, Nepal</span>
              </div>
            </div>

            <div className="flex gap-8 mt-10">
              <Twitter className="w-6 h-6 text-blue-500 hover:scale-110 transition" />
              <Instagram className="w-6 h-6 text-pink-500 hover:scale-110 transition" />
              <Youtube className="w-6 h-6 text-red-600 hover:scale-110 transition" />
            </div>

            <p className="mt-8 text-gray-600 max-w-md">
              If you are comfortable, we recommend you to contact via direct phone call or email. 
              Thank you so much for considering Modern Farm Stay!
            </p>
          </div>

          {/* RIGHT: Booking Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#333]">Book Your Stay</h2>
            <UniversalBooking />
          </div>
        </div>
      </section>

      {/* MAP BELOW */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.4458829790324!2d84.4110671!3d27.954673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399505182ec294e1%3A0x89b2cb2eb5e64158!2sModern%20Farm%20Stay!5e1!3m2!1sen!2snp!4v1752657783132!5m2!1sen!2snp"
          width="100%" 
          height="450" 
          style={{ border:0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-md"
        ></iframe>
      </section>
    </div>
  );
}
