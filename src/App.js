import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Hello, React + Tailwind CSS!');

  const handleClick = () => {
    setMessage(null); // ตั้งค่าเป็น null แล้วพยายามเรียกใช้ -> Runtime Error!
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          {message.toUpperCase()}
        </h1>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Change Message
        </button>
      </div>
    </div>
  );
}

export default App;
