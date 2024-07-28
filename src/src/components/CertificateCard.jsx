import React from 'react';
import { Button } from '@/components/ui/button';

const CertificateCard = ({ title, onDownload }) => {
    return (
        <div className="light: bg-white p-6 border-2 border-bl
         rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-bold text-blue-700 mb-4">{title}</h2>
            <Button onClick={onDownload} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Download Certificate
            </Button>
        </div>
    );
};

export default CertificateCard;
