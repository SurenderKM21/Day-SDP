import React, { useState } from 'react';

const EnrollmentForm = ({ course }) => {
    const [formData, setFormData] = useState({
        rollNumber: '',
        name: '',
        batch: '',
        degree: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, courseName: course?.name || 'Unknown Course' });
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto my-8">
            <h2 className="text-2xl font-bold mb-6">Enroll in {course?.name || 'Unknown Course'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Roll Number</label>
                    <input
                        type="text"
                        name="rollNumber"
                        value={formData.rollNumber}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Batch</label>
                    <input
                        type="text"
                        name="batch"
                        value={formData.batch}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="reset"
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnrollmentForm;
