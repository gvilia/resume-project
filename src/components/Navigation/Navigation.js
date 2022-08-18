import React, { Fragment } from 'react';
import NavigationList from './NavigationList';

const Navigation = () => {
  return (
    <Fragment>
      <nav className="bottom-0 h-20 w-full flex flex-col sm:h-full sm:w-20 fixed bg-white dark:bg-gray-900 sm:hover:w-52 transition-all ease-in-out duration-200 group overflow-auto no-scrollbar">
        <NavigationList />
      </nav>
    </Fragment>
  );
};

export default Navigation;
