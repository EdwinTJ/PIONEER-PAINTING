import Carousel from "../components/Carousel";

export default function Portfolio() {
  const portfolioSections = [
    {
      id: "interiors",
      title: "Interiors",
      description:
        "Not only do we take time to give you a BEAUTIFUL paint job, but we also take time to keep your house clean during AND after the project. On our larger projects where lots of dust is created, we even hire cleaning companies to come in after us and dust, sweep, vacuum, and mop ALL affected areas.",
      images: [
        {
          src: "/images/interiors/interior1.avif",
          alt: "Interior painting project 1",
        },
        {
          src: "/images/interiors/interior2.avif",
          alt: "Interior painting project 2",
        },
        {
          src: "/images/interiors/interior3.avif",
          alt: "Interior painting project 3",
        },
      ],
    },
    {
      id: "exteriors",
      title: "Exteriors",
      description:
        "As you know, the most important part of ANY paint job, is the preparation. Whether your exterior is wood, stucco, cement fiber board, or any other material, we take the time to properly prepare all surfaces so the paint bonds well, and looks great... for years to come!",
      images: [
        {
          src: "/images/exteriors/restorationA1.avif",
          alt: "Exterior painting project 1",
        },
        {
          src: "/images/exteriors/exterior2.avif",
          alt: "Exterior painting project 2",
        },
      ],
    },
    {
      id: "restorations",
      title: "Restorations",
      description:
        "We love our restorations... because no one comes close to the amount of care and preparation we put into making sure the exterior surfaces of your house are restored to the best condition possible before we even THINK of applying any finish coats.",
      images: [],
    },
    {
      id: "wood-restorations",
      title: "Wood Restorations",
      description:
        "Wood is one type of material which, without proper care, you could end up needing to replace it every 10 years. So, with that in mind, we use nothing but the quality penetrating stains and sealers with the BEST UV PROTECTION.",
      images: [],
    },
    {
      id: "decorative-finishes",
      title: "Decorative Finishes",
      description:
        "Decorative finishes have always been a fun past time with us. The ability to watch a project get transformed from ordinary to extraordinary, is very rewarding, and brings smiles to all who get to witness the art.",
      images: [
        {
          src: "/images/decorative/decorative1.jpg",
          alt: "Decorative finish project 1",
        },
      ],
    },
    {
      id: "cabinet-woodwork",
      title: "Cabinet and Woodwork Finishing",
      description:
        "From refinishing an antique chair, to a distressed finish to all the cabinets in your house, we take the time to use the right techniques and highest quality materials to bring beauty and durability back to the furniture you have grown to love.",
      images: [
        {
          src: "/images/cabinets/cabinet1.jpg",
          alt: "Cabinet refinishing project 1",
        },
      ],
    },
    {
      id: "commercial",
      title: "Commercial",
      description:
        "From new production to historic restoration, we have finished products of all types in commercial painting, ranging from Lowes in Ogden and office buildings all over, to the Ellen Eccles Theater in Logan and the LDS conference center in Salt Lake City.",
      images: [],
    },
    {
      id: "concrete-finishes",
      title: "Concrete Finishes",
      description:
        "Whether you just want an oil stained garage floor thoroughly cleaned, etched and painted, or a beautiful colorful decorative stained finish to the floor of your restaurant, Pioneer Painting has been providing durable decorative concrete finishes since 2003.",
      images: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <h2 className="text-2xl">Before and After</h2>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {portfolioSections.map((section, index) => (
            <div
              key={section.id}
              className={`mb-20 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } lg:flex lg:items-center lg:gap-12`}
            >
              {/* Image Carousel */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <Carousel
                  images={section.images}
                  title={section.title}
                  description={section.description}
                />
              </div>

              {/* Text Content */}
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                  {section.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
