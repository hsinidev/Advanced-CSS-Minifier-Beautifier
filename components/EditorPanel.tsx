
import React from 'react';

interface EditorPanelProps {
    title: string;
    value: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
    placeholder: string;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ title, value, onChange, readOnly = false, placeholder }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(value);
    };
    
    const handleClear = () => {
        if (onChange) {
            onChange('');
        }
    };

    return (
        <div className="flex-1 w-full lg:w-5/12 bg-gray-900/70 rounded-lg shadow-2xl border border-gray-700 backdrop-blur-sm flex flex-col min-h-[500px]">
            <div className="flex justify-between items-center p-3 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <div className="flex gap-2">
                    {!readOnly && (
                         <button 
                            onClick={handleClear}
                            className="text-xs bg-gray-700 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-md transition-colors"
                         >
                            Clear
                         </button>
                    )}
                    <button 
                        onClick={handleCopy}
                        className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-1 px-3 rounded-md transition-colors"
                    >
                        Copy
                    </button>
                </div>
            </div>
            <div className="flex-grow p-1">
                <textarea
                    value={value}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    className="editor-textarea w-full h-full bg-transparent text-gray-200 resize-none border-none focus:ring-0 p-3 text-sm leading-relaxed"
                    spellCheck="false"
                />
            </div>
        </div>
    );
};

export default EditorPanel;
   