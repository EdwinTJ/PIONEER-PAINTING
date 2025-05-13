import { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  quote: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then(setTestimonials);
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">What Our Customers Say</h1>
      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow border">
            <p className="text-gray-800 italic">"{t.quote}"</p>
            <p className="mt-2 font-semibold text-right">- {t.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        {/* Elfsight Google Reviews Widget */}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          className="elfsight-app-75ebf99a-3a07-46d9-836c-4be4a8927014"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}
