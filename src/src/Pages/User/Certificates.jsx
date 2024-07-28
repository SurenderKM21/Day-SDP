import React, { useState } from 'react';
import UserTopbar from './UserTopbar';
import UserLeftbar from './UserLeftbar';
import CertificateCard from '@/components/CertificateCard';

const certificationsData = [
    {
        title: 'React Developer Certification',
        date: 'January 2024',
        institution: 'Coursera',
        description: 'A comprehensive course covering React fundamentals and advanced topics.',
    },
    {
        title: 'Full Stack Web Development',
        date: 'March 2024',
        institution: 'Udacity',
        description: 'An intensive program that teaches both frontend and backend development skills.',
    },
    // Add more certifications here
];

const Certificates = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleDownload = (title) => {
        alert(`Downloading certificate for ${title}`);
    };

    const filteredCertifications = certificationsData.filter(cert => {
        return cert.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
     
                <div className='pt-[8vh] px-10'>
                    <h1 className='text-3xl px-80 font-bold my-4 p-6'>My Certifications</h1>
                    <div className='px-80 p-6 grid grid-cols-1 gap-32'>
                        {filteredCertifications.map(cert => (
                            <CertificateCard
                                key={cert.title}
                                title={cert.title}
                                onDownload={() => handleDownload(cert.title)}
                            />
                        ))}
                    </div>
                </div>
          
    );
};

export default Certificates;
