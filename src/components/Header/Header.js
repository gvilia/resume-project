import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { themeActions } from '../../store/theme';

import { ReactComponent as ArrowDownSvg } from '../../assets/icons/arrowDown.svg';
import { ReactComponent as DownloadArrowSvg } from '../../assets/icons/downloadArrow.svg';
import { ReactComponent as MoonSvg } from '../../assets/icons/moon.svg';
import { ReactComponent as SunSvg } from '../../assets/icons/sun.svg';

import cvPdf from '../../assets/CV/CV_Gvidas_Liausas.pdf';

const Header = (props) => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  const darkThemeHandler = () => {
    dispatch(themeActions.dark());
  };

  const lightThemeHandler = () => {
    dispatch(themeActions.light());
  };

  return (
    <header className="h-fit bg-white dark:bg-gray-900 w-full">
      <ul className="m-0 p-0 list-none flex flex-row w-full justify-end items-center">
        <li className="mr-auto items-center cursor-not-allowed hidden sm:inline-flex">
          <h1 className="dark:text-white text-black text-lg ml-10 tracking-widest font-roboto capitalize">
            {props.pageName}
          </h1>
          <ArrowDownSvg className="h-4 w-4 dark:stroke-white stroke-black" />
        </li>
        <li className="ml-5 mr-auto sm:mr-5">
          <a
            href={cvPdf}
            className="bg-gray-300 dark:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black hover:bg-gray-900 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <DownloadArrowSvg className="fill-current w-4 h-4 mr-2" />
            <span>Download CV</span>
          </a>
        </li>
        <li>
          <button
            className="flex change-theme h-20 items-center no-underline group bg-white dark:bg-gray-900 px-3"
            onClick={theme === 'light' ? darkThemeHandler : lightThemeHandler}
          >
            {theme === 'light' && (
              <MoonSvg className="min-w-[2rem] max-w-[2rem] my-0 mx-3 stroke-blue-600 group-hover:stroke-black transition-all transform duration-500 group-hover:rotate-45 stroke-2 dark-icon" />
            )}
            {(theme === 'dark' || theme === undefined) && (
              <SunSvg className="min-w-[2rem] max-w-[2rem] my-0 mx-3 stroke-amber-400 group-hover:stroke-yellow-300 stroke-2 transition-all transform duration-500 group-hover:rotate-180 light-icon" />
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
