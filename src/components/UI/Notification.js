import React from 'react';

const Notification = (props) => {
  return (
    <div className="bg-red-600/60 backdrop-blur-lg z-20 max-w-md absolute right-5 top-5 rounded-lg p-6 shadow animate-slide">
      <h1 className="text-xl text-white font-medium">
        Something went wrong...
      </h1>
      <div className="flex justify-between items-center">
        <a
          href="https://gvidasl.com"
          className="text-white text-lg inline-flex space-x-1 items-center"
        >
          <span>Please enter valid command.</span>
        </a>
      </div>
      <button
        className="mt-3 bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-blue-900 rounded go-button"
        onClick={props.onClose}
      >
        Close
      </button>
    </div>
  );
};

export default Notification;
