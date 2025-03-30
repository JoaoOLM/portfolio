import React from "react";
import { User, Download, Github, Linkedin, Mail } from "lucide-react";

const Sidebar = () => {
    const items = [
        { icon: User, label: "Perfil", href: "" },
        { icon: Download, label: "Download CV", href: "/cv.pdf" },
        { icon: Github, label: "GitHub", href: "https://github.com/JoaoOLM" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/joaoolm" },
        { icon: Mail, label: "E-mail", href: "mailto:joaolangerm@gmail.com" },
    ];

    return (
        <aside className="fixed w-16 h-screen bg-black py-10 space-y-6 rounded-tr-3xl rounded-br-3xl shadow-lg flex flex-col items-center justify-between">
            {items.map((item, index) => (
                <a 
                    key={index} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative group flex items-center justify-center p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                    <item.icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />

                    {/* Tooltip dinâmico */}
                    <div className="absolute left-full ml-4 px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 origin-left shadow-lg bg-black text-white text-xs rounded-md border border-gray-700 whitespace-nowrap">
                        <span className="px-2 py-1">{item.label}</span>
                    </div>
                </a>
            ))}
        </aside>
    );
};

export default Sidebar;
