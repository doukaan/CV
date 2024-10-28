import React from 'react';
import { FaCode, FaReact, FaWordpressSimple } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

function Skills() {
    return (
        <div className="min-h-screen bg-[#202020] flex flex-col items-center justify-center p-8">
            <div className="max-w-7xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        <h1 className="text-4xl md:text-5xl text-[#FF1A1A] font-bold mb-8">SKILLS</h1>
                        <div className="w-32 h-1 bg-[#FF1A1A] mb-8 rounded-xl"></div>
                    </div>

                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="gap-3 flex flex-col">
                                <FaReact className="font-extrabold text-6xl md:text-7xl p-2 rounded-full text-white bg-[#FF1A1A]" />
                                <h1 className="text-3xl md:text-4xl font-bold text-white">React</h1>
                                <p className="text-white">
                                    I have strong skills in React and am proficient in frameworks like Next.js and Vite.
                                    My experience with these frameworks enables me to build and optimize responsive,
                                    high-performance websites using modern, efficient development practices.
                                </p>
                            </div>

                            <div className="gap-3 flex flex-col">
                                <FaWordpressSimple className="font-bold text-6xl md:text-7xl p-2 rounded-full text-white bg-[#FF1A1A]" />
                                <h1 className="text-3xl md:text-4xl font-bold text-white">WordPress</h1>
                                <p className="text-white">
                                    I have intermediate WordPress skills and am skilled with plugins like Elementor,
                                    especially for headers and footers.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="gap-3 flex flex-col">
                                <FaCode className="font-bold text-6xl md:text-7xl p-2 rounded-full text-white bg-[#FF1A1A]" />
                                <h1 className="text-3xl md:text-4xl font-bold text-white">C & C#</h1>
                                <p className="text-white">
                                    I have intermediate coding skills in both C and C#, allowing me to work effectively
                                    with these languages for various programming tasks and applications.
                                </p>
                            </div>

                            <div className="gap-3 flex flex-col">
                                <MdOutlineDesignServices className="font-bold text-6xl md:text-7xl p-2 rounded-full text-white bg-[#FF1A1A]" />
                                <h1 className="text-3xl md:text-4xl font-bold text-white">Figma & Canva</h1>
                                <p className="text-white">
                                    I have basic design skills in Figma and Canva, allowing me to create simple and
                                    effective visual designs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
