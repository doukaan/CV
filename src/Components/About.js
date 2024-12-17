import React from 'react';

export default function About() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/DoguKaanIlgaz.pdf';
        link.download = 'DoguKaanIlgaz.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-[#202020] p-2 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between max-w-6xl w-full">
                <div className="flex flex-col gap-3 md:gap-6 max-w-2xl md:pl-4 lg:pl-8 mt-6 md:mt-0 text-center md:text-left">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#FF1A1A]">
                        Hi, I'm Doğu Kaan Ilgaz
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                        Web & Frontend Developer
                    </h2>
                    <p className="text-xs sm:text-sm md:text-lg lg:text-xl max-w-xl leading-relaxed text-gray-300 px-4 md:px-0">
                        Hello, I'm Doğu Kaan Ilgaz. I'm a third-year student at Trakya University,
                        studying Management Information Systems, and I am a web developer.
                    </p>
                    <button
                        onClick={handleDownloadCV}
                        className="bg-[#FF1A1A] text-white px-5 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-xl font-medium hover:bg-[#E61233] w-1/3 transition-colors mx-auto md:mx-0"
                    >
                        Download CV
                    </button>
                </div>
                <div className="md:ml-8 lg:ml-12">
                    <img
                        src="/İmages/Personal.jpg"
                        alt="hero"
                        width={350}
                        height={300}
                        className="rounded-2xl w-[200px] sm:w-[250px] md:w-[320px] lg:w-[350px] object-cover border-4 border-red-700"
                    />
                </div>
            </div>
        </div>
    );
}