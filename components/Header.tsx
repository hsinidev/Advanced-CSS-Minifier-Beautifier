
import React, { useState } from 'react';
import Modal from './Modal';

const Header: React.FC = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    
    const navItems = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

    const getModalContent = (modalName: string) => {
        switch(modalName) {
            case 'About': return "This Advanced CSS Minifier & Beautifier is a powerful tool designed to help developers optimize their stylesheets. Built with modern web technologies, it provides a fast, reliable, and user-friendly experience.";
            case 'Contact': return "For any inquiries, please reach out to us at hsini.web@gmail.com. We appreciate your feedback!";
            case 'Guide': return "1. Paste your CSS code into the 'Input' panel.\n2. Choose your desired indentation level from the dropdown.\n3. Click 'Format' to beautify or 'Minify' to compress the code.\n4. Optionally, check 'Auto Update' to see live results as you type.\n5. Copy or download the result from the 'Output' panel.";
            case 'Privacy Policy': return "We respect your privacy. All CSS processing is done in your browser. No data is sent to or stored on our servers. Your code remains your own.";
            case 'Terms of Service': return "This tool is provided 'as is' without any warranty. By using this service, you agree not to hold us liable for any issues that may arise from its use.";
            case 'DMCA': return "If you believe your copyrighted work has been infringed upon, please contact us at hsini.web@gmail.com with the necessary information for its removal.";
            default: return "";
        }
    };

    return (
        <>
            <header className="bg-gray-900/50 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-black/20">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-center py-4">
                        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base">
                            {navItems.map(item => (
                                <li key={item}>
                                    <button 
                                        onClick={() => setActiveModal(item)}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            {activeModal && (
                <Modal title={activeModal} isOpen={!!activeModal} onClose={() => setActiveModal(null)}>
                    <p className="text-gray-300 whitespace-pre-wrap">{getModalContent(activeModal)}</p>
                </Modal>
            )}
        </>
    );
};

export default Header;
   