import Image from 'next/image';

const projects = [
    {
        title: 'Kitchen Refresh',
        before: '/media/beforeandafter/IMG_8988.JPG',
        after: '/media/beforeandafter/IMG_8989.JPG',
    },
    {
        title: 'Exterior Makeover',
        before: '/media/beforeandafter/IMG_8993.JPG',
        after: '/media/beforeandafter/IMG_8994.JPG',
    },
    {
        title: 'Living Area Update',
        before: '/media/beforeandafter/IMG_8995.JPG',
        after: '/media/beforeandafter/IMG_8996.JPG',
    },
];

export default function BeforeAfterGallery() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Before & After Transformations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See the incredible difference a fresh coat of paint can make.
                    </p>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-8 items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">

                            {/* Info (visible on mobile above or below? Let's keep images side-by-side on desktop, stacked on mobile) */}
                            <div className="w-full lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0">
                                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                                <p className="text-gray-500">Professional preparation and premium finish.</p>
                            </div>

                            {/* Images Container */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                {/* Before */}
                                <div className="relative group overflow-hidden rounded-xl">
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={project.before}
                                            alt={`${project.title} Before`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                                        Before
                                    </div>
                                </div>

                                {/* After */}
                                <div className="relative group overflow-hidden rounded-xl">
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={project.after}
                                            alt={`${project.title} After`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm shadow-sm">
                                        After
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
