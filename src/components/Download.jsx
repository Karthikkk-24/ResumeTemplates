import html2pdf from 'html2pdf.js';
import { useState } from 'react';

export default function DownloadButton() {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
        const element = document.getElementById('resume-container');
        const opt = {
            margin: [10, 10, 10, 10],
            filename: 'Karthik_Shettigar_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                logging: true, 
                dpi: 192,
                letterRendering: true
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        html2pdf().set(opt).from(element).save();
    };

    return (
        <div
            className={`fixed bottom-4 right-4 transition-all duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={handleDownload}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
            >
                Download PDF
            </button>
        </div>
    );
}