import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
    {
        name: 'Sarah M.',
        quote: 'They did an amazing job on our exterior! The team was professional, on time, and the cleanup was spotless. They transformed our home completely.',
        rating: 5,
    },
    {
        name: 'John D.',
        quote: 'Best painting service in the Tri Cities. They painted our entire home with great attention to detail - it looks like a brand new house. Highly recommend!',
        rating: 5,
    },
    {
        name: 'Michael R.',
        quote: 'Fair pricing and excellent quality. I appreciated how transparent they were with the quote and timeline. Will definitely hire again.',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-primary overflow-hidden relative">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Our Customers Are Saying
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Honest feedback from homeowners and business owners we have served.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white rounded-xl p-8 shadow-xl">
                            <div className="flex mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{t.quote}"</p>
                            <div className="font-bold text-gray-900 border-t pt-4 border-gray-100">
                                {t.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

