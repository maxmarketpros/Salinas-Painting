"use client";

import { useEffect } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
    useEffect(() => {
        // Load the form script
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Contact Salinas Painting
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start your project? Call us, email us, or fill out the form below for a free estimate.
                    </p>
                </div>
            </section>

            {/* Main Content: Info + Form */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left Column: Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

                                <div className="space-y-6">
                                    {/* Phone */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                <PhoneIcon className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                                            <p className="mt-1 text-gray-500">Mon-Sat, 8am - 6pm</p>
                                            <a href="tel:+14232976489" className="mt-2 block text-xl font-bold text-primary hover:text-amber-600 transition-colors">
                                                (423) 297-6489
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                <EnvelopeIcon className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                                            <p className="mt-1 text-gray-500">Send us a message anytime.</p>
                                            <a href="mailto:SalinasPainting7@yahoo.com" className="mt-2 block text-lg font-medium text-primary hover:text-amber-600 transition-colors break-words">
                                                SalinasPainting7@yahoo.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                <MapPinIcon className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">Service Area</h3>
                                            <p className="mt-1 text-gray-600">
                                                Proudly serving Elizabethton, TN and surrounding areas including Johnson City, Bristol, and Kingsport.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <a href="tel:+14232976489" className="block w-full text-center bg-secondary hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-colors">
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Key Form */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden min-h-[700px]">
                            <div className="w-full h-full p-1 bg-white">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/khQR6Y0TkHb0tILHhDNx"
                                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px", minHeight: '680px' }}
                                    id="inline-khQR6Y0TkHb0tILHhDNx"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="WebSite Form Template"
                                    data-height="679"
                                    data-layout-iframe-id="inline-khQR6Y0TkHb0tILHhDNx"
                                    data-form-id="khQR6Y0TkHb0tILHhDNx"
                                    title="WebSite Form Template"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Map Section */}
                    <section className="mt-20">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
                            Service Area – Elizabethton, TN
                        </h2>
                        <div className="overflow-hidden rounded-xl shadow-lg h-[400px] md:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32547.60699872379!2d-82.258!3d36.3487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a0a467f7c9a8b%3A0x55f8100b1c381d!2sElizabethton%2C%20TN!5e0!3m2!1sen!2sus!4v0000000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </section>

                </div>
            </section>
        </div>
    );
}
