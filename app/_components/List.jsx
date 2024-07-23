'use client'
import React, { useState, useEffect } from 'react';

const List = () => {
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let displayedItems = items;

  if (isMobile){
    displayedItems = items.slice(0, 3)
  }


  return (
    <div className="dark bg-gray-900 text-white p-4">
      <ul className="space-y-2">
        {
        displayedItems.map((item, index) => (
          <li
            key={index}
            className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          >
            {item}
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default List;
