import Head from "next/head";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Head>
        <title>About Us - Modern Farm Stay</title>
        <meta 
          name="description" 
          content="Discover comfort, local cuisines, and adventure at Modern Farm Stay in Bandipur." 
        />
      </Head>

      <h1 className="text-4xl font-bold mb-6 text-center">About Modern Farm Stay</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Discover Comfort at Modern Farm Stay</h2>
        <p className="text-gray-700 leading-relaxed">
          From solo travelers to families, our lodging caters to all with single, double, and family packages. 
          Experience the serenity of nature combined with the comfort of well-appointed rooms, ensuring a restful stay for everyone.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Explore Nature with Amazing Foods</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We provide lodging facilities for a few days based on your requirements. 
          Whether you wish to stay for a weekend getaway or a longer retreat, we tailor the experience to your needs.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Crave a meal? Order with us for a delightful culinary experience. 
          We serve a variety of dishes from local to western cuisines, prepared only upon your pre-booking, 
          using locally sourced ingredients to ensure freshness and authentic flavors.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Explore Nearby Wonders</h2>
        <p className="text-gray-700 leading-relaxed">
          We help you explore local areas like Siddha Cave, Bandipur Hills, and other popular destinations around us. 
          Embark on unforgettable journeys tailored to your preferences with our expert guidance, ensuring you 
          capture the true essence of Bandipur and its natural wonders.
        </p>
      </section>
    </div>
  );
}
