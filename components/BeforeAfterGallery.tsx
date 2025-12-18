import Image from 'next/image';

const projects = [
    {
        before: '/media/fwsalinaspaintingnewphotospage2/IMG_8988.jpg',
        after: '/media/fwsalinaspaintingnewphotospage2/IMG_8989.jpg',
    },
    {
        before: '/media/crossmuralbefore.jpg',
        after: '/media/crossmuralafter.jpg',
    },
    {
        before: '/media/fwsalinaspaintingnewphotospage2/IMG_8981.jpg',
        after: '/media/fwsalinaspaintingnewphotospage2/IMG_8967.jpg',
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
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-8 items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                <div className="relative group overflow-hidden rounded-xl">
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={project.before}
                                            alt="Project before"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                                        Before
                                    </div>
                                </div>

                                <div className="relative group overflow-hidden rounded-xl">
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={project.after}
                                            alt="Project after"
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

