import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import 'tailwindcss/tailwind.css'; // Ensure you have TailwindCSS imported

const TimeSelector = () => {
    const [timeInSeconds, setTimeInSeconds] = useState(0);

    const handleChange = (event) => {
        const value = event.target.value;
        setTimeInSeconds(Number(value));
    };

    const incrementTime = (increment) => {
        setTimeInSeconds(timeInSeconds + increment);
    };

    const decrementTime = (decrement) => {
        setTimeInSeconds(Math.max(0, timeInSeconds - decrement));
    };

    const formatTime = (totalSeconds) => {
        const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
        const months = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        return `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="">
            <input
                type="number"
                value={timeInSeconds}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
                placeholder="Enter time in seconds"
            />
            <Input className="text-xl font-semibold">Time: {formatTime(timeInSeconds)}</Input>
            <div className="flex flex-wrap space-x-2 mb-4">
                <button
                    onClick={() => incrementTime(1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >+1s</button>
                <button
                    onClick={() => incrementTime(60)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >+1m</button>
                <button
                    onClick={() => incrementTime(3600)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >+1h</button>
                <button
                    onClick={() => incrementTime(86400)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >+1d</button>
                <button
                    onClick={() => incrementTime(2592000)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >+1mo</button>
                <button
                    onClick={() => incrementTime(31536000)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >+1y</button>
            </div>
            <div className="flex flex-wrap space-x-2 mb-4">
                <button
                    onClick={() => decrementTime(1)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >-1s</button>
                <button
                    onClick={() => decrementTime(60)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >-1m</button>
                <button
                    onClick={() => decrementTime(3600)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >-1h</button>
                <button
                    onClick={() => decrementTime(86400)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >-1d</button>
                <button
                    onClick={() => decrementTime(2592000)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >-1mo</button>
                <button
                    onClick={() => decrementTime(31536000)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >-1y</button>
            </div>
        </div>
    );
};

export default TimeSelector;
