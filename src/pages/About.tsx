import { Phone } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">A Little History...</h1>
          </div>
        </div>
      </section>

      {/* Company Story Section - Text Left, Image Right */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                About the Company:
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Pioneer Painting is a Cache Valley based Painting Contractor
                  with an emphasis on
                  <span className="font-semibold text-amber-900">
                    {" "}
                    CUSTOMER SATISFACTION
                  </span>
                  . Just ask around... we focus on making YOUR experience...
                  virtually EFFORTLESS.
                </p>
                <p>
                  Owner, David James, is a 4th generation painter from Park
                  City, Utah, who has traveled the world with his world renowned
                  master painter father, Charles James, and other contractors to
                  work on projects where they wouldn't use anyone else, but the
                  best.
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src="/images/aboutMain.avif"
                alt="Pioneer Painting team and owner"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Image Left, Text Right */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/images/about2.avif"
                alt="David James with his dog"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Vision and Mission Text */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Vision & Mission
              </h2>
              {/* Philosophy Section */}
              <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700">
                      Whether you want a simple repaint or are building your
                      dream home, we work side by side with clients, designers
                      and builders to help you achieve
                      <span className="font-semibold text-amber-900">
                        {" "}
                        YOUR VISION
                      </span>
                      , from conception to completion.
                    </p>

                    <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-600">
                      <h3 className="text-2xl font-bold text-amber-900 mb-4">
                        - OUR MOTTO -
                      </h3>
                      <h4 className="text-xl font-semibold text-amber-800 mb-4">
                        "WE WARRANTY ALL WORK"
                      </h4>
                      <p className="text-gray-700">
                        We make sure the finished product not only looks
                        perfect, but will last for years to come. From elegant
                        to rustic, we can add a touch of the old world,
                        traditional beauty or contemporary flair to any space,
                        and turn your HOME... into a
                        <span className="font-semibold text-amber-900">
                          {" "}
                          WORK OF ART!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Contact us today and see why we're Cache Valley's most trusted
            painting professionals.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors">
            <Phone className="inline mr-2" size={20} />
            CALL 435-232-5383
          </button>
        </div>
      </section>
    </div>
  );
}
