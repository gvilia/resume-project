import React from 'react';

const Wrapper = (props) => {
  return (
    <div className="flex flex-col h-full w-full sm:ml-20 pb-20 sm:pb-0">
      {props.children}
    </div>
  );
};

export default Wrapper;
