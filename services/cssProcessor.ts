
export const minifyCss = (css: string): string => {
    let minified = css;
    // Remove comments
    minified = minified.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove newlines and tabs
    minified = minified.replace(/[\n\r\t]/g, '');
    // Remove extra whitespace
    minified = minified.replace(/\s+/g, ' ');
    // Remove whitespace around selectors and braces
    minified = minified.replace(/\s*([{};:,])\s*/g, '$1');
    // Remove trailing semicolon in a rule
    minified = minified.replace(/;}/g, '}');
    
    return minified.trim();
};

export const beautifyCss = (css: string, indentSize: number): string => {
    if (indentSize === 0) {
        return minifyCss(css);
    }
    
    const indent = ' '.repeat(indentSize);
    let level = 0;
    let beautified = '';
    const minified = minifyCss(css);

    for (let i = 0; i < minified.length; i++) {
        const char = minified[i];
        
        if (char === '{') {
            beautified += ' {\n';
            level++;
            beautified += indent.repeat(level);
        } else if (char === '}') {
            level--;
            beautified = beautified.trimEnd();
            beautified += '\n' + indent.repeat(level) + '}\n';
            if(i + 1 < minified.length) {
                 beautified += indent.repeat(level);
            }
        } else if (char === ';') {
            beautified += ';\n' + indent.repeat(level);
        } else {
            beautified += char;
        }
    }

    // Final cleanup for multiple newlines
    return beautified.replace(/\n\s*\n/g, '\n').trim();
};
   