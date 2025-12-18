import Image from 'next/image';

const galleryImages = [
    '/media/fwsalinaspaintingnewphotos/IMG_8975.JPG',
    '/media/fwsalinaspaintingnewphotos/IMG_8977.JPG',
    '/media/fwsalinaspaintingnewphotos/IMG_8969.jpg',
    '/media/salinaspainting/IMG_8990.JPG',
];

export default function HomeGallery() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Recent Work
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A glimpse into the quality and detail we bring to every project across the Tri Cities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src={src}
                                alt={`Recent work ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a href="/gallery" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2">
                        View Full Gallery
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
