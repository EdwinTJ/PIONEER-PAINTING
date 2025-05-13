import { Phone, Star, Check } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-900 to-amber-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>100% SATISFACTION GUARANTEED</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Quality & Affordable Painting
              </h2>
              <p className="text-xl mb-8 text-amber-100">
                RESIDENTIAL • COMMERCIAL • INTERIOR • EXTERIOR
              </p>
              <p className="text-lg mb-8 text-amber-100">
                Pioneer Painting is a small, affordable, but yet QUALITY
                painting contractor from Cache Valley, Utah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors">
                  GET FREE ESTIMATE
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-amber-900 font-bold py-3 px-8 rounded-lg transition-colors">
                  VIEW PORTFOLIO
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="font-bold mb-4">GET YOUR FREE ESTIMATE</h3>
                <p className="text-lg font-bold text-blue-600 mb-4">
                  435-232-5383
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">QUALITY PAINTING</h3>
              <p className="text-gray-600">
                Our work is done right from the beginning... you WON'T find a
                higher quality painting contractor with the same attention to
                detail for a cheaper price... anywhere!
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">PERSONALIZED SERVICE</h3>
              <p className="text-gray-600">
                We know what it's like to have strangers working in your home,
                so we go out of our way... so that YOU don't have to... we get
                in and get it done so you can sit back and enjoy your new paint
                job!
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">WORK IS WARRANTIED</h3>
              <p className="text-gray-600">
                Our warranty stands the test of time... even after we're long
                gone... that's why most of our clients are RETURN clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8">
            Get your free estimate today and see why we're Cache Valley's
            trusted painting professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors">
              <Phone className="inline mr-2" size={20} />
              CALL 435-232-5383
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
              REQUEST QUOTE ONLINE
            </button>
          </div>
        </div>
      </section>
      {/* Mobile CTA Button */}
      <div className="md:hidden fixed bottom-4 left-4 right-4">
        <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg shadow-lg transition-colors flex items-center justify-center space-x-2">
          <Phone size={20} />
          <span>CALL 435-232-5383</span>
        </button>
      </div>
    </div>
  );
}
