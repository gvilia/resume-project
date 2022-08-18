import React, { Fragment } from 'react';

import NavigationItem from './NavigationItem';
import { ReactComponent as GithubSvg } from '../../assets/icons/github.svg';
import authorLogo from '../../assets/images/gvidasl.jpg';

const NAV_ITEMS = [
  {
    id: 'd1',
    name: 'Skills',
    path: '/skills',
    svg: 'skills',
  },
  {
    id: 'd2',
    name: 'Experience',
    path: '/experience',
    svg: 'experience',
  },
  {
    id: 'd3',
    name: 'Education',
    path: '/education',
    svg: 'education',
  },
  {
    id: 'd4',
    name: 'Contact',
    path: '/contact',
    svg: 'contact',
  },
];

const NavigationList = () => {
  const navItemsList = NAV_ITEMS.map((item) => {
    return (
      <NavigationItem
        id={item.id}
        key={item.id}
        name={item.name}
        path={item.path}
        svg={item.svg}
      />
    );
  });
  return (
    <Fragment>
      <ul className="m-0 p-0 list-none flex flex-row sm:flex-col items-center h-full">
        <li className="w-full bg-gray-900 dark:bg-blue-900 hidden sm:block">
          <div className="justify-center flex h-20 items-center no-underline cursor-not-allowed group">
            <img
              className="rounded-full min-w-[2rem] my-0 mx-6 max-w-[2rem] transform rotate-0 transition-all group-hover:scale-150"
              src={authorLogo}
              alt=""
            />
          </div>
        </li>
        {navItemsList}
        <li className="mt-auto w-full hidden sm:block">
          <a
            className="flex h-20 justify-center sm:justify-start items-center no-underline filter grayscale opacity-100 hover:grayscale-0 dark:opacity-70 transition-all dark:hover:grayscale-0 dark:hover:opacity-100 hover:bg-gray-300 dark:hover:bg-black group"
            href="https://github.com/gvilia"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSvg className="min-w-[2rem] max-w-[2rem] my-0 mx-6 stroke-blue-600 group-hover:stroke-blue-600 stroke-2" />
            <span className="text-black dark:text-white ml-4 hidden sm:group-hover:block">
              Github
            </span>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavigationList;
