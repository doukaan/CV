import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

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
                        <a href="https://www.instagram.com/dou.kaan/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#FF1A1A] transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/do%C4%9Fu-kaan-ilgaz-423568251/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#FF1A1A] transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://wa.me/905550750942"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-[#2A2A2A] p-3 rounded-full hover:bg-[#FF1A1A] transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2zm-3.498 14.103l-2.066-.548-2.183.516.551-2.037C4.28 13.1 3.99 12.06 3.99 11c0-4.415 3.592-8.006 8.007-8.006 2.139 0 4.15.833 5.66 2.344a7.935 7.935 0 012.343 5.661c0 4.415-3.592 8.007-8.007 8.007-.945 0-1.867-.166-2.739-.493l-2.74.59z"/>
                                <path d="M8.693 7.434c-.162-.283-.334-.289-.488-.293-.126-.003-.271-.003-.416-.003a.8.8 0 00-.582.273c-.2.218-.763.745-.763 1.817s.781 2.108.89 2.253c.11.145 1.52 2.424 3.75 3.301 1.858.729 2.235.584 2.64.547.404-.036 1.307-.534 1.489-1.051.183-.516.183-.958.128-1.051-.055-.091-.201-.145-.418-.254-.218-.109-1.289-.636-1.488-.709-.2-.072-.346-.109-.491.11-.146.217-.563.707-.69.852-.128.145-.255.163-.473.054-.218-.109-.919-.338-1.751-1.079-.647-.577-1.083-1.289-1.21-1.507-.126-.218-.013-.335.096-.444.097-.098.218-.254.327-.38.11-.128.146-.218.218-.364.073-.145.037-.273-.018-.38-.055-.109-.487-1.194-.678-1.636z"/>
                            </svg>
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