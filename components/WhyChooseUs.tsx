import { CheckCircleIcon, CurrencyDollarIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Detailed Prep & Cleanup',
        description: 'We take pride in our preparation, ensuring surfaces are perfect before painting and leaving your space spotless after.',
        icon: SparklesIcon,
    },
    {
        name: 'High-Quality Materials',
        description: 'We use only premium paints and materials to ensure a long-lasting, durable, and beautiful finish.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Transparent Pricing',
        description: 'No hidden fees. We provide honest, upfront quotes so you know exactly what to expect.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Locally Trusted',
        description: 'As a local team, we care about our community and treat every home like it is our own.',
        icon: UserGroupIcon,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-primary">Salinas Painting</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We strive for high-quality results that transform your home or business. We provide integrity, trust, and ensure every detail is executed flawlessly, enhancing the beauty and value of your property.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

