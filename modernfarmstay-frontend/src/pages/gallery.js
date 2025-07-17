import Head from "next/head";
import FarmLifeGallery from "@/components/home/FarmLifeGallery";
import RecentActivitiesGallery from "@/components/home/RecentActivitiesGallery";

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Gallery - Modern Farm Stay</title>
        <meta
          name="description"
          content="Explore our gallery showcasing farm life and recent activities at Modern Farm Stay."
        />
      </Head>

      <FarmLifeGallery />
      <RecentActivitiesGallery />
    </div>
  );
}
