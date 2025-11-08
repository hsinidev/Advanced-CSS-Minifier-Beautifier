
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EditorPanel from './components/EditorPanel';
import ControlPanel from './components/ControlPanel';
import SeoArticle from './components/SeoArticle';
import { beautifyCss, minifyCss } from './services/cssProcessor';

const App: React.FC = () => {
    const [inputCss, setInputCss] = useState<string>('');
    const [outputCss, setOutputCss] = useState<string>('');
    const [indent, setIndent] = useState<string>('2');
    const [autoUpdate, setAutoUpdate] = useState<boolean>(false);
    const [lastAction, setLastAction] = useState<'minify' | 'beautify' | null>(null);

    const processCss = useCallback(() => {
        if (!inputCss) {
            setOutputCss('');
            return;
        }
        if (lastAction === 'minify') {
            setOutputCss(minifyCss(inputCss));
        } else if (lastAction === 'beautify') {
            const indentSize = parseInt(indent, 10);
            setOutputCss(beautifyCss(inputCss, indentSize));
        }
    }, [inputCss, indent, lastAction]);

    useEffect(() => {
        if (autoUpdate) {
            const timer = setTimeout(() => {
                processCss();
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [inputCss, autoUpdate, processCss]);

    const handleMinify = () => {
        setLastAction('minify');
        setOutputCss(minifyCss(inputCss));
    };

    const handleBeautify = () => {
        setLastAction('beautify');
        const indentSize = parseInt(indent, 10);
        setOutputCss(beautifyCss(inputCss, indentSize));
    };
    
    const placeholderCss = `/* Paste your CSS here */\n\nbody {\n  font-family: 'Arial', sans-serif;\n  line-height: 1.6;\n  background-color: #f0f2f5;\n}\n\na:hover {\n  color: #0056b3; text-decoration: underline;\n}\n`;

    return (
        <div className="flex flex-col min-h-screen bg-black/50 backdrop-blur-sm">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Advanced CSS Minifier & Beautifier</h1>
                    <p className="text-lg md:text-xl text-gray-300 mt-2 max-w-3xl mx-auto">Optimize your stylesheets for performance or format them for readability.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-start">
                    <EditorPanel 
                        title="Input"
                        value={inputCss}
                        onChange={setInputCss}
                        placeholder={placeholderCss}
                    />
                    <ControlPanel
                        onBeautify={handleBeautify}
                        onMinify={handleMinify}
                        outputCss={outputCss}
                        indent={indent}
                        setIndent={setIndent}
                        autoUpdate={autoUpdate}
                        setAutoUpdate={setAutoUpdate}
                    />
                    <EditorPanel 
                        title="Output"
                        value={outputCss}
                        readOnly={true}
                        placeholder="Your processed CSS will appear here..."
                    />
                </div>

                <SeoArticle />

            </main>
            <Footer />
        </div>
    );
};

export default App;
   