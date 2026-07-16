export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <p className="text-orange-600 font-semibold mb-4">
          Fresh Chicken Delivered In Muzaffarpur
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Still Getting Chicken
          <br />
          The Ancient Way?
        </h1>

        <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
          Skip the smell, the crowd, and the trip to the market.
          Freshly cut chicken delivered straight to your home.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/919204810544?text=Hi%20I%20want%20to%20order%20fresh%20chicken"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Order on WhatsApp
          </a>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-6 inline-block">
          <p className="font-semibold text-lg">
            ✅ Not satisfied with the quality?
          </p>

          <p className="text-gray-600 mt-2">
            Simply refuse the order at delivery.
          </p>
        </div>
      </div>
    </section>
  );
}