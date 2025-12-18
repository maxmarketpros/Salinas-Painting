import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                <Image
                    src="/media/heroimage.jpg"
                    alt="Salinas Painting Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">
                        Providing Painting Services in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-rose-200">
                            Tri Cities, TN
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                        At Salinas Painting, we specialize in enhancing the beauty of your home or business by providing our detail-oriented painting service. Experience a fresh look and lasting quality that will impress for years to come.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <a
                            href="#quote"
                            className="bg-secondary hover:bg-red-700 text-white text-lg font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(192,38,45,0.35)] transform transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(192,38,45,0.5)] text-center"
                        >
                            Get My Free Quote
                        </a>
                        <a
                            href="tel:+14232976489"
                            className="bg-white/10 backdrop-blur-md border hover:bg-white/20 border-white/30 text-white text-lg font-bold py-4 px-10 rounded-full transition-all text-center flex items-center justify-center gap-2"
                        >
                            <span>(423) 297-6489</span>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-gray-700"></div>
                        </div>
                        <div className="flex gap-8">
                            <span>- Licensed & Insured</span>
                            <span>- 5-Star Rated</span>
                            <span>- Free Estimates</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smooth scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-50 hidden md:block">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}

