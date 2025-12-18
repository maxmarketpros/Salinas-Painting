"use client";

import { useEffect } from 'react';

export default function QuoteSection() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="quote" className="quote-section py-12 md:py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-900">
                    Request a Free Painting Quote
                </h2>
                <p className="text-center mb-6 text-gray-600">
                    Tell us about your project and we will get back to you as soon as possible.
                </p>

                <div className="quote-form-wrapper w-full min-h-[700px] rounded-xl overflow-hidden shadow-lg bg-white">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/form/khQR6Y0TkHb0tILHhDNx"
                        style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
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
        </section>
    );
}

