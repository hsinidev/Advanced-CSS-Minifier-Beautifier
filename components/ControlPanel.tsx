
import React from 'react';

interface ControlPanelProps {
    onBeautify: () => void;
    onMinify: () => void;
    outputCss: string;
    indent: string;
    setIndent: (value: string) => void;
    autoUpdate: boolean;
    setAutoUpdate: (value: boolean) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    onBeautify,
    onMinify,
    outputCss,
    indent,
    setIndent,
    autoUpdate,
    setAutoUpdate
}) => {
    const handleDownload = () => {
        const blob = new Blob([outputCss], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'styles.css';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full lg:w-2/12 flex flex-col items-center gap-4 py-8">
            <button
                onClick={onBeautify}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
                Format / Beautify
            </button>
            <button
                onClick={onMinify}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
                Minify
            </button>
            <button
                onClick={handleDownload}
                disabled={!outputCss}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
            >
                Download
            </button>

            <div className="w-full mt-4 space-y-4">
                <div className="w-full">
                    <label htmlFor="indent" className="block text-sm font-medium text-gray-300 mb-1">
                        Indent
                    </label>
                    <select
                        id="indent"
                        value={indent}
                        onChange={(e) => setIndent(e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                        <option value="2">2 spaces</option>
                        <option value="4">4 spaces</option>
                        <option value="8">8 spaces</option>
                        <option value="0">0 spaces (Minify)</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <input
                        id="auto-update"
                        type="checkbox"
                        checked={autoUpdate}
                        onChange={(e) => setAutoUpdate(e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2"
                    />
                    <label htmlFor="auto-update" className="ml-2 text-sm font-medium text-gray-300">
                        Auto Update
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
   