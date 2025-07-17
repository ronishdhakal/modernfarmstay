import Head from "next/head";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import FarmLifeGallery from "@/components/home/FarmLifeGallery";
import RoomPreviewSection from "@/components/home/RoomPreviewSection";
import HomeReviews from "@/components/home/HomeReviews"; // ✅ import added
import RecentActivitiesGallery from "@/components/home/RecentActivitiesGallery";
import OwnerMessageSection from "@/components/home/OwnerMessageSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Modern Farm House - Best Farm House / Stay in Bandipur</title>
        <meta
          name="description"
          content="Experience the ultimate farm stay at Modern Farm House in Bandipur. Enjoy luxurious accommodations, stunning farm views, and engaging activities in a serene environment."
        />
      </Head>
      <HomeHeroSection />
      <WhyChooseSection />
      <FarmLifeGallery />
      <RoomPreviewSection />
      <HomeReviews /> {/* ✅ inserted here above activities */}
      <RecentActivitiesGallery />
      <OwnerMessageSection />
      <CTASection />
    </div>
  );
}
