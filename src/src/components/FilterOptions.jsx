import React from 'react';

const FilterOptions = ({ filters, onFilterChange }) => {
    return (
        <div className='flex gap-4'>
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 border rounded-lg ${filter.active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => onFilterChange(filter)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default FilterOptions;
