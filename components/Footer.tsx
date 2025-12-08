export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Salinas Painting</h3>
                        <p className="text-gray-600 mb-4">
                            Professional residential and commercial painting services in Elizabethton, TN and surrounding areas.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+14232976489" className="text-gray-600 hover:text-primary transition-colors block">
                                    (423) 297-6489
                                </a>
                            </li>
                            <li>
                                <a href="mailto:SalinasPainting7@yahoo.com" className="text-gray-600 hover:text-primary transition-colors block break-words">
                                    SalinasPainting7@yahoo.com
                                </a>
                            </li>
                            <li className="text-gray-600">
                                Elizabethton, TN
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-gray-600 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="/#quote" className="text-gray-600 hover:text-primary transition-colors">Request Quote</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {currentYear} Salinas Painting. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Website by Max Market Pros</p>
                </div>
            </div>
        </footer>
    );
}
