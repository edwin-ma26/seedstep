// pages/HireStudents.js

import React from 'react';
import config from '@/config/general';

const HireStudents = () => {
    const {title1, title2, description, button, call} = config.contents.hirestudents;
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                {title1} <br />
                {title2}
            </h1>
            <p className="text-lg text-center text-gray-600 mb-8">
                {description}
            </p>
            <div className="flex space-x-4">
                <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-md shadow-md hover:bg-blue-600">
                    {button}
                </button>
                <span className="text-lg text-gray-700 flex items-center">
                    {call}
                </span>
            </div>
        </div>
    );
}

export default HireStudents;
