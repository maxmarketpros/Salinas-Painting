"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary tracking-tight group">
                            <PaintBrushIcon className="h-8 w-8 text-secondary group-hover:rotate-12 transition-transform" />
                            <span>Salinas Painting</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-primary font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-3 pl-2">
                            <a
                                href="tel:+14232976489"
                                className="text-secondary font-bold hover:text-primary transition-colors text-lg"
                            >
                                (423) 297-6489
                            </a>
                            <a
                                href="/#quote"
                                className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all hover:scale-105 shadow-md flex items-center gap-2"
                            >
                                <span>Request a Quote</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <a
                            href="tel:+14232976489"
                            className="mr-2 text-xs font-bold text-primary border border-primary px-2 py-1.5 rounded-full whitespace-nowrap"
                        >
                            (423) 297-6489
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen">
                    <div className="space-y-1 px-4 py-6 sm:px-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-lg px-3 py-4 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary border-b border-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="/#quote"
                            className="block mt-6 text-center rounded-lg px-3 py-4 text-lg font-bold text-white bg-secondary hover:bg-amber-600 mb-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Request a Quote
                        </a>
                        <a
                            href="tel:+14232976489"
                            className="block text-center rounded-lg px-3 py-4 text-lg font-bold text-white bg-primary hover:bg-primary/90"
                        >
                            Call +1 (423) 297-6489
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
