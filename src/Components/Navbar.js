'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full h-fit pt-5">
            {/* Desktop & Mobile Navbar */}
            <div className="flex flex-row justify-between items-center px-4 md:px-8 lg:px-16">
                {/* Logo */}
                <div className="flex justify-start md:ml-32">
                    <img src="/İmages/doukaan.png" alt="logo" width={141} height={34} />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-center gap-8 mr-32">
                    <a href="#About" className="btn btn-outline text-white text-lg hover:text-[#e40f31]">
                        About
                    </a>
                    <a href="#Skills" className="btn btn-outline text-white text-lg hover:text-[#e40f31]">
                        Skills
                    </a>
                    <a href="#Footer" className="btn btn-outline text-white text-lg hover:text-[#e40f31]">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white hover:text-[#e40f31] transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute w-full bg-[#1A1A1A] z-50 py-4 px-4 mt-4 border-t border-gray-800">
                    <div className="flex flex-col gap-4">
                        <a
                            href="#About"
                            className="w-full text-left px-4 py-2 text-white text-lg font-bold hover:text-[#e40f31] hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#Skills"
                            className="w-full text-left px-4 py-2 text-white text-lg font-bold hover:text-[#e40f31] hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </a>
                        <a
                            href="#Footer"
                            className="w-full text-left px-4 py-2 text-white text-lg font-bold hover:text-[#e40f31] hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}