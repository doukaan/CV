import React from 'react';

function Referances() {
    const references = [
        {
            id: 1,
            title: "TGL ELECTRİC",
            description: "TGL Electric için modern ve kullanıcı dostu bir web sitesi tasarımı gerçekleştirdim. Site, elektrik altyapı hizmetlerini tanıtırken hızlı ve duyarlı bir kullanıcı deneyimi sunarak müşterilerin bilgiye kolay erişimini sağlıyor.",
            image: "/İmages/tgl.png", 
            link: "https://cerkezkoytglelektrik.com.tr/"
        },
        {
            id: 2,
            title: "SÖYLEMEZ AVUKATLIK",
            description: "Söylemez Avukatlık bürosu için profesyonel ve güvenilir bir web sitesi oluşturuldu. Site, avukatlık hizmetlerini detaylı şekilde tanıtırken kurumsal kimliği yansıtan sade ve şık bir tasarıma sahip.",
            image: "/İmages/Logo.png",
            link: "https://xn--soylemezavukatlk-oqc.av.tr/"
        },
        {
            id: 3,
            title: "EFE ELEKTRONİK",
            description: "Efe Elektronik için teknik ürünlerin tanıtımını ve satışını destekleyen bir web sitesi geliştirildi. Kullanıcıların ihtiyaç duydukları bilgilere hızla ulaşabilmeleri için düzenli ve SEO uyumlu bir yapı hazırlandı.",
            image: "/İmages/EFELOG.png",
            link: "https://www.efeelektronik.com"
        },
        {
            id: 4,
            title: "TİGER THERMOFORMING",
            description: "Tiger Thermoforming için endüstriyel üretim süreçlerini tanıtan bir web sitesi tasarlandı. Site, firmanın ürün ve hizmetlerini görsel olarak zenginleştirerek müşterilere detaylı bilgi sunuyor.",
            image: "/İmages/TİGERLOGO.png",
            link: "https://tiger.web.tr/"
        },
    ];

    return (
        <div className="min-h-screen bg-[#202020] flex flex-col items-center justify-center p-8">
            <div className="max-w-7xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="col-span-1">
                        <h1 className="text-3xl md:text-4xl text-[#FF1A1A] font-bold mb-4">REFERANCE</h1>
                        <div className="w-32 h-1 bg-[#FF1A1A] mb-8 rounded-xl"></div>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {references.map((reference) => (
                            <div
                                key={reference.id}
                                className="bg-[#292929] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-start"
                            >
                                <div className="mb-4">
                                    <img 
                                        src={reference.image} 
                                        alt={reference.title} 
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{reference.title}</h3>
                                <p className="text-gray-400 text-xs mb-4">{reference.description}</p>
                                <a
                                    href={reference.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-block bg-[#FF1A1A] text-white font-semibold py-1 px-3 rounded hover:bg-[#e61414] transition-colors duration-300 text-xs"
                                >
                                    Visit to Website
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Referances;
