import React, { Fragment } from 'react';
import { ReactComponent as ArrowDownSvg } from '../assets/icons/arrowDown.svg';

const Education = (props) => {
  return (
    <Fragment>
      <div className="h-fit bg-gray-300 dark:bg-gray-800">
        <ul>
          <li className="mt-5 items-center cursor-not-allowed inline-flex sm:hidden w-full justify-center">
            <div className="dark:text-white text-black text-lg tracking-widest font-roboto capitalize">
              {props.pageName}
            </div>
            <ArrowDownSvg className="h-4 w-4 dark:stroke-white stroke-black" />
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 m-5 sm:m-10 text-black dark:text-white text-lg">
          <div>
            <ul>
              <li className="text-black dark:text-white border-b-2 pb-2 border-blue-600">
                <span>2021</span>
              </li>
              <li className="pt-2 text-green-700 dark:text-green-500">
                Certificate: Fundamentals of Digital Marketing
              </li>
              <li>Completed certification exam.</li>
              <li className="pt-2 text-orange-700 dark:text-orange-500">
                Google, Online
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-black dark:text-white border-b-2 pb-2 border-blue-600">
                <span>2017</span>
              </li>
              <li className="pt-2 text-green-700 dark:text-green-500">
                Qualification awarded: Web Developer
              </li>
              <li>
                Registered in national register of professional certifications
                (RNCP) (25468).
              </li>
              <li className="pt-2 text-orange-700 dark:text-orange-500">
                3W Academy, International
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-black dark:text-white border-b-2 pb-2 border-blue-600">
                <span>2016</span>
              </li>
              <li className="pt-2 text-green-700 dark:text-green-500">
                Professional Bachelor in Information Technology
              </li>
              <li>
                Informatics Engineering, Information Technology, Multimedia
                Technologies.
              </li>
              <li className="pt-2 text-orange-700 dark:text-orange-500">
                SVK, Siauliai, LT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
