import React from 'react';

const Container = (props) => {
  return (
    <main className="flex flex-col h-full w-full no-scrollbar overflow-scroll bg-gray-300 dark:bg-gray-800">
      {props.children}
    </main>
  );
};

export default Container;
