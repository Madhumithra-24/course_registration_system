import React from 'react'

function courseRegistration() {
    return (
        <div className="w-full">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Department Elective 1
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="option"
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Multimedia Compression</option>
                        <option value="option2">Machine Learning</option>
                        <option value="option3">Asic Design</option>
                    </select>
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Department Elective 2
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="option"
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Multimedia Compression</option>
                        <option value="option2">Machine Learning</option>
                        <option value="option3">Asic Design</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Open Elective 
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="option"
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Principles of Management</option>
                        <option value="option2">Bio Fuels</option>
                        <option value="option3">Energy Conservation</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Add On Registration
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="option"
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default courseRegistration
