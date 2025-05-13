import { Clock, MapPin, Facebook } from "lucide-react";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Load the Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Contact Information */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="mx-auto text-blue-600 mb-3" size={32} />
              <h3 className="text-lg font-bold mb-2">HOURS</h3>
              <p className="text-gray-700">Monday-Saturday</p>
              <p className="text-gray-700 font-medium">8:00 AM - 6:00 PM</p>
              <p className="text-gray-700 mt-1">Sunday: Closed</p>
            </div>

            <div className="text-center">
              <MapPin className="mx-auto text-blue-600 mb-3" size={32} />
              <h3 className="text-lg font-bold mb-2">ADDRESS</h3>
              <p className="text-gray-700">176 South 400 East</p>
              <p className="text-gray-700">Logan, Utah 84321</p>
              <a
                href="mailto:pioneerpainting@live.com"
                className="text-blue-600 hover:underline block mt-2"
              >
                pioneerpainting@live.com
              </a>
              <p className="text-gray-700 mt-1">Tel: 435-232-5383</p>
            </div>

            <div className="text-center">
              <Facebook className="mx-auto text-blue-600 mb-3" size={32} />
              <h3 className="text-lg font-bold mb-2">FIND US</h3>
              <p className="text-gray-700 mb-3">Check out our Facebook Page</p>
              <a
                href="https://www.facebook.com/pioneer.painting.usa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 transition-colors"
              >
                <Facebook size={20} />
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Pioneer Painting LLC</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/pioneer.painting.usa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
