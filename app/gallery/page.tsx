import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery | Salinas Painting',
    description: 'View our portfolio of residential and commercial painting projects in Elizabethton, TN.',
};

// All images from the salinaspainting folder
const galleryImages = [
    '/media/salinaspainting/IMG_8973.JPG',
    '/media/salinaspainting/IMG_8974.JPG',
    '/media/salinaspainting/IMG_8975.JPG',
    '/media/salinaspainting/IMG_8976.JPG',
    '/media/salinaspainting/IMG_8977.JPG',
    '/media/salinaspainting/IMG_8978.JPG',
    '/media/salinaspainting/IMG_8979.JPG',
    '/media/salinaspainting/IMG_8980.JPG',
    '/media/salinaspainting/IMG_8985.JPG',
    '/media/salinaspainting/IMG_8986.JPG',
    '/media/salinaspainting/IMG_8987.JPG',
    '/media/salinaspainting/IMG_8990.JPG',
    '/media/salinaspainting/IMG_8991.JPG',
    '/media/salinaspainting/IMG_8992.JPG',
    '/media/salinaspainting/IMG_8993.JPG',
];

export default function GalleryPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Our Work
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A showcase of our recent projects. From interiors to exteriors, we take pride in every brushstroke.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="break-inside-avoid relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                                <Image
                                    src={src}
                                    alt={`Project photo ${index + 1}`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your space?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/#quote"
                            className="bg-secondary hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
                        >
                            Get a Free Quote
                        </a>
                        <a
                            href="tel:+14232976489"
                            className="bg-white border-2 border-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
                        >
                            Call (423) 297-6489
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
