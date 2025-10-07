// pages/Home.jsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero section */}
      <section className="bg-green-700 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">AgriAlert</h1>
        <p className="text-lg">Timely SMS alerts for farmers in their local language and region</p>
        <button
          onClick={() => navigate("/register")}
          className="mt-4 bg-white text-green-700 px-6 py-2 rounded font-semibold hover:bg-green-100"
        >
          Get Started
        </button>
      </section>

      {/* Features section */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-2">📍 Region-Based Alerts</h3>
          <p>Send updates tailored to specific counties and farming zones.</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-2">🗣️ Local Language Support</h3>
          <p>Communicate in Kimeru, Kikuyu, Dholuo, and more.</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-2">📲 Easy Farmer Registration</h3>
          <p>Capture names, ID, phone, farming type, and region in seconds.</p>
        </div>
      </section>

      {/* CTA section */}
      <section className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to empower all farmers</h2>
        <p className="mb-4">Join AgriAlert and make your outreach smarter and more inclusive.</p>
        <button
          onClick={() => navigate("/register")}
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Register Farmers
        </button>
      </section>
    </div>
  );
};

export default Home;
