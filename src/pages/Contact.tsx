import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch for your free estimate</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Location
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">176 South 400 East</p>
                    <p className="text-gray-700">Logan, Utah, 84321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:info@UtahPioneerPainting.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@UtahPioneerPainting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:435-232-5383"
                      className="text-blue-600 hover:underline text-lg font-medium"
                    >
                      435-232-5383
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-800 mb-4">
                  Call us today for your free estimate!
                </p>
                <a
                  href="tel:435-232-5383"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <Phone size={20} />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Drop us a line...
              </h2>

              {/* Elfsight Contact Form Widget */}
              <div
                className="elfsight-app-e752a41b-452b-4efd-9592-d8c87b4d7931"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Business Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Monday - Saturday</h3>
              <p className="text-2xl font-bold text-blue-600">
                8:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sunday</h3>
              <p className="text-2xl font-bold text-red-600">Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
