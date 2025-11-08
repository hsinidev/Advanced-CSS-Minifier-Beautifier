
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/30 py-6 mt-12">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p className="mb-2">
                    <a 
                        href="https://github.com/hsinidev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold transition-colors duration-200"
                        style={{ color: '#FFD700', textShadow: '0 0 5px rgba(255,215,0,0.5)' }}
                    >
                        Powered by HSINI MOHAMED
                    </a>
                </p>
                <div className="flex justify-center items-center gap-x-4 text-sm">
                    <span>doodax.com</span>
                    <span>&bull;</span>
                    <span>hsini.web@gmail.com</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
   