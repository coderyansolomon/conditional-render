import React from 'react';
import List from './_components/List';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white p-6">
      <div className="w-full max-w-screen-lg mx-auto p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">React.js Conditional Rendering</h1>
          <p className="text-xl leading-relaxed">
            Your components will often need to display different things depending on different conditions.
            You can conditionally render JSX using JavaScript syntax like if statements, &&, and ternary operators.
          </p>
        </header>
        <main className="max-w-3xl mx-auto">
          <List />
        </main>
      </div>
    </div>
  );
};

export default Home;
