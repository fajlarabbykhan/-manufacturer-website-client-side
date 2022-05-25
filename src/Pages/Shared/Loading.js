import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            {/* <button type="button" class="bg-indigo-500 rounded" disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
            </button> */}
        </div>
    );
};

export default Loading;