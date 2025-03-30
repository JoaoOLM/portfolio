'use client';

import { useState } from "react";
import { Menu, Download, Github, Linkedin, Mail } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { icon: Download, label: "Download CV", href: "/cv.pdf" },
        { icon: Github, label: "GitHub", href: "https://github.com/JoaoOLM" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/joaoolm" },
        { icon: Mail, label: "E-mail", href: "mailto:joaolangerm@gmail.com" },
    ];

    return (
        <>
            {/* Sidebar para telas médias e grandes */}
            <aside className={`hidden sm:flex fixed ${isOpen ? 'w-40 items-start px-5' : 'w-16 items-center'} h-screen bg-black py-10 space-y-6 rounded-tr-3xl rounded-br-3xl shadow-lg flex-col justify-between transition-all duration-300`}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Menu className="w-6 h-6 text-gray-400 hover:text-green-400 transition-colors duration-300" />
                </button>
                {items.map((item, index) => (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="relative group flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110">
                        <item.icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                        {!isOpen && (
                            <div className="absolute left-full ml-6 px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 origin-left shadow-lg bg-black text-white text-xs rounded-md border border-gray-700 whitespace-nowrap">
                                <span className="px-2 py-1">{item.label}</span>
                            </div>
                        )}
                        {isOpen && (
                            <span className="ml-3 text-white text-sm group-hover:text-green-400 transition-colors duration-300 whitespace-nowrap">
                                {item.label}
                            </span>
                        )}
                    </a>
                ))}
            </aside>

            {/* Footer para telas pequenas */}
            <footer className="sm:hidden fixed bottom-0 left-0 w-full z-10 bg-black py-4 shadow-lg flex justify-around items-center min-h-[10vh] max-h-[10dvh]">
                {items.map((item, index) => (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-400 hover:text-green-400 transition-all">
                        <item.icon className="w-6 h-6" />
                        <span className="text-xs mt-1">{item.label}</span>
                    </a>
                ))}
            </footer>
        </>
    );
};

export default Sidebar;