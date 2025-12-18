import Image from 'next/image';

const services = [
    {
        title: 'Interior Painting',
        description: 'Flawless walls, ceilings, and trim with careful protection of your home and furnishings.',
        image: '/media/newphotos/interiorpainting.JPG',
    },
    {
        title: 'Exterior Painting',
        description: 'High-quality finishes that boost curb appeal and protect every exterior surface.',
        image: '/media/fwsalinaspaintingnewphotospage2/IMG_8978.JPG',
    },
    {
        title: 'Deck & Fence Staining',
        description: 'Clean, sand, and stain to restore and protect your outdoor wood features.',
        image: '/media/fwsalinaspaintingnewphotospage2/IMG_8980.JPG',
    },
    {
        title: 'Drywall Repair',
        description: 'Seamless patching for holes, cracks, and water damage before fresh paint.',
        image: '/media/fwsalinaspaintingnewphotospage2/IMG_8985.JPG',
    },
    {
        title: 'Commercial Painting',
        description: 'Professional finishes for offices, retail spaces, and commercial buildings with minimal disruption.',
        image: '/media/commercialpaitning.PNG',
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-20 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Painting Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Detail-oriented residential and commercial painting across the Tri Cities, TN.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.title} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white z-10">{service.title}</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
