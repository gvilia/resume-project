import React, { Fragment } from 'react';
import { ReactComponent as ArrowDownSvg } from '../assets/icons/arrowDown.svg';

const Notfound = () => {
  return (
    <Fragment>
      <div className="h-fit bg-gray-300 dark:bg-gray-800">
        <ul>
          <li className="mt-5 items-center cursor-not-allowed inline-flex w-full justify-center">
            <div className="dark:text-white text-black text-lg tracking-widest font-roboto capitalize">
              Page not found - 404
            </div>
            <ArrowDownSvg className="h-4 w-4 dark:stroke-white stroke-black" />
          </li>
          <li className="mt-5 p-5 items-center cursor-not-allowed inline-flex w-full justify-center">
            <div className="dark:text-white text-black text-lg tracking-widest font-roboto">
              If you haven't found what you're looking for, please contact me
            </div>
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 m-5 sm:m-10 text-black dark:text-white text-lg">
          <div>
            <ul className="text-xl">
              <li className="text-black dark:text-white border-b-2 pb-2 border-blue-600">
                <span>By phone</span>
              </li>
              <li className="pt-2 text-green-700 dark:text-green-500">
                <a href="tel:+447491529471">075 915 294 71</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-xl">
              <li className="text-black dark:text-white border-b-2 pb-2 border-blue-600">
                <span>By email</span>
              </li>
              <li className="pt-2 text-green-700 dark:text-green-500">
                <a href="mailto:contact@gvidasl.com">contact@gvidasl.com</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-xl">
              <li className="text-black dark:text-white border-b-2 pb-2 border-blue-600">
                <span>Social Media</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.facebook.com/gvidas.liausas/"
                  className="pt-2 text-black dark:text-white hover:text-green-800 hover:underline dark:hover:text-green-600"
                >
                  Facebook
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/gvidasliausas/?hl=en"
                  className="pt-2 text-black dark:text-white hover:text-green-800 hover:underline dark:hover:text-green-600"
                >
                  Instagram
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.linkedin.com/in/gvidasliausas/"
                  className="pt-2 text-black dark:text-white hover:text-green-800 hover:underline dark:hover:text-green-600"
                >
                  LinkedIn
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://twitter.com/gvidasliausas"
                  className="text-black dark:text-white hover:text-green-800 hover:underline dark:hover:text-green-600"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Notfound;
