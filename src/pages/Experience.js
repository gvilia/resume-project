import React, { Fragment } from 'react';
import { ReactComponent as ArrowDownSvg } from '../assets/icons/arrowDown.svg';

const Experience = (props) => {
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
                <span>2022-2021</span>
              </li>
              <li className="pt-2 text-green-700 dark:text-green-500">
                Digital Designer
              </li>
              <li>
                Responsible for developing email templates using HTML and CSS,
                creating print-ready designs using Adobe Illustrator, designing
                web templates using Figma, using GIT for version control,
                working with tickets via Zendesk, and using some JavaScript and
                jQuery for daily tasks.
              </li>
              <li className="pt-2 text-orange-700 dark:text-orange-500">
                BriefYourMarket, Derby, UK
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-black dark:text-white border-b-2 pb-2 border-blue-600">
                <span>2020-2017</span>
              </li>
              <li className="pt-2 text-green-700 dark:text-green-500">
                Service Desk Manager
              </li>
              <li>
                Leading team of 5 people. Delegating tasks. Working together
                with different teams: developers, project managers, system
                administrators. Implementing new ideas. Responsible for
                continuous IT support (24/7).
              </li>
              <li className="pt-2 text-orange-700 dark:text-orange-500">
                Vilnius University Hospital Santaros Klinikos, Vilnius, LT
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-black dark:text-white border-b-2 pb-2 border-blue-600">
                <span>2017-2016</span>
              </li>
              <li className="pt-2 text-green-700 dark:text-green-500">
                Service Desk Ambassador
              </li>
              <li>
                Assisting customers in resolving complex technical problems on a
                primary account by providing guidance regarding software and
                hardware problems. Resolving and/or referring highly complex
                technical problems as appropriate.
              </li>
              <li className="pt-2 text-orange-700 dark:text-orange-500">
                DXC Technology, Vilnius, LT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
