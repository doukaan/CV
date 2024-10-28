import React from 'react';
import { Facebook, Twitter, Linkedin, Dribbble, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#202020] text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
                    <div className="w-24 h-1 bg-[#FF1A1A]"></div>

                    <div className="flex flex-col items-center space-y-4 mt-8">
                        <div className="flex items-center space-x-2">
                            <MapPin className="text-[#FF1A1A]" />
                            <p className="text-gray-300">Edirne/Merkez</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="text-[#FF1A1A]" />
                            <a href="mailto:ilgazdogukaan0@gmail.com"
                               className="text-gray-300 hover:text-[#FF1A1A] transition-colors">
                                ilgazdogukaan0@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="text-[#FF1A1A]" />
                            <a href="tel:+905550750942"
                               className="text-gray-300 hover:text-[#FF1A1A] transition-colors">
                                +90 (555) 075 09 42
                            </a>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6 mt-8">
                        <a href="#" className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#FF1A1A] transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#FF1A1A] transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#FF1A1A] transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#FF1A1A] transition-colors">
                            <Dribbble className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 mt-8 border-t border-gray-800 w-full">
                        <p className="text-gray-500 text-sm">
                            Copyright ©2024 Doğu Kaan Ilgaz. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
