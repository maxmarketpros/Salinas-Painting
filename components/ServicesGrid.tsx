import Image from 'next/image';

const services = [
    {
        title: 'Interior Painting',
        description: 'Refresh your living spaces with flawless walls, ceilings, and trim. We protect your furniture and floors.',
        image: '/media/newphotos/interiorpainting.JPG',
    },
    {
        title: 'Exterior Painting',
        description: 'Boost curb appeal and protect your home from the elements with high-quality weather-resistant paints.',
        image: '/media/salinaspainting/IMG_8976.JPG',
    },
    {
        title: 'Cabinet Painting',
        description: 'Update your kitchen or bathroom without the cost of replacement. Factory-finish results for your cabinets.',
        image: '/media/newphotos/cabinetpainting.JPG',
    },
    {
        title: 'Deck & Fence Staining',
        description: 'Restore and protect your outdoor wood structures. We clean, sand, and stain for a beautiful finish.',
        image: '/media/salinaspainting/IMG_8978.JPG',
    },
    {
        title: 'Drywall Repair',
        description: 'Seamless patching and repair for holes, cracks, and water damage before we paint.',
        image: '/media/newphotos/drywallrepair.JPG',
    },
    {
        title: 'Commercial Painting',
        description: 'Professional painting for offices, retail spaces, and commercial buildings with minimal disruption.',
        image: '/media/salinaspainting/IMG_8980.JPG',
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-20 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Painting Services in Johnson City, TN
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive painting solutions for your home and business.
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
