import { useEffect, useState } from "react";

interface Service {
  name: string;
  description: string;
  price: number;
  features: string[];
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((services) => {
        setServices(services);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load services:", err);
        setError("Error loading services.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">
          Our Services
        </h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="text-xl text-gray-600">Loading services...</div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  {service.name}
                </h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="text-left space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="relative pl-6 text-gray-700">
                      <span className="absolute left-0 text-green-600 font-bold">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
