import { Fragment } from 'react';
import { ReactComponent as ArrowDownSvg } from '../assets/icons/arrowDown.svg';
import { ReactComponent as PointerLeftSvg } from '../assets/icons/pointerLeft.svg';
import { ReactComponent as PointerRightSvg } from '../assets/icons/pointerRight.svg';
import resumeLogo from '../assets/images/resume-project.png';
import apiLogo from '../assets/images/api-project.png';
import bootstrapLogo from '../assets/images/bootstrap-project.png';

const Skills = (props) => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-5 sm:m-10 text-black dark:text-white text-lg">
          <div>
            <ul>
              <li className="text-green-700 dark:text-green-500 inline-flex">
                <PointerLeftSvg className="h-6 w-6" />
                <span>Essential</span>
                <PointerRightSvg className="h-6 w-6" />
              </li>
              <li>HTML</li>
              <li>CSS</li>
              <li className="ml-4 mt-2 text-orange-700 dark:text-orange-500">
                <div className="inline-flex">
                  <PointerLeftSvg className="h-6 w-6" />
                  <span>TailwindCSS</span>
                  <PointerRightSvg className="h-6 w-6" />
                </div>
              </li>
              <li className="ml-4 mt-2 text-orange-700 dark:text-orange-500">
                <div className="inline-flex">
                  <PointerLeftSvg className="h-6 w-6" />
                  <span>Bootstrap</span>
                  <PointerRightSvg className="h-6 w-6" />
                </div>
              </li>
              <li className="ml-4 mt-2 text-orange-700 dark:text-orange-500">
                <div className="inline-flex">
                  <PointerLeftSvg className="h-6 w-6" />
                  <span>SASS</span>
                  <PointerRightSvg className="h-6 w-6" />
                </div>
              </li>
              <li>JavaScript</li>
              <li className="ml-4 mt-2 text-orange-700 dark:text-orange-500">
                <div className="inline-flex">
                  <PointerLeftSvg className="h-6 w-6" />
                  <span>jQuery</span>
                  <PointerRightSvg className="h-6 w-6" />
                </div>
              </li>
              <li className="ml-4 mt-2 text-orange-700 dark:text-orange-500">
                <div className="inline-flex">
                  <PointerLeftSvg className="h-6 w-6" />
                  <span>React</span>
                  <PointerRightSvg className="h-6 w-6" />
                </div>
              </li>
              <li>SQL</li>
              <li>GIT</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-green-700 dark:text-green-500 inline-flex">
                <PointerLeftSvg className="h-6 w-6" />
                <span>Design</span>
                <PointerRightSvg className="h-6 w-6" />
              </li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li className="text-green-700 dark:text-green-500 inline-flex mt-3">
                <PointerLeftSvg className="h-6 w-6" />
                <span>SEO</span>
                <PointerRightSvg className="h-6 w-6" />
              </li>
              <li>Ahrefs</li>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Google Search Console</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-green-700 dark:text-green-500 inline-flex">
                <PointerLeftSvg className="h-6 w-6" />
                <span>CMS</span>
                <PointerRightSvg className="h-6 w-6" />
              </li>
              <li>Wordpress</li>
              <li className="text-green-700 dark:text-green-500 inline-flex mt-3">
                <PointerLeftSvg className="h-6 w-6" />
                <span>Other skills</span>
                <PointerRightSvg className="h-6 w-6" />
              </li>
              <li>Hosting management</li>
              <li>Web performance optimization</li>
              <li>Responsive design</li>
              <li className="text-green-700 dark:text-green-500 inline-flex mt-3">
                <PointerLeftSvg className="h-6 w-6" />
                <span>Service</span>
                <PointerRightSvg className="h-6 w-6" />
              </li>
              <li>Jira</li>
              <li>Zendesk</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-fit bg-gray-300 dark:bg-gray-800">
        <ul>
          <li className="mt-5 sm:pl-10 items-center inline-flex w-full justify-center sm:justify-start">
            <h1 className="dark:text-white text-black text-lg tracking-widest font-roboto capitalize">
              Projects
            </h1>
            <ArrowDownSvg className="h-4 w-4 dark:stroke-white stroke-black" />
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 sm:gap-3 m-5 sm:m-10 text-black dark:text-white text-lg bg-gray-300 dark:bg-gray-800 place-items-center sm:place-items-start">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img src={resumeLogo} alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <div className="text-green-700 dark:text-green-500 text-xl text-center">
                <span>Resume website</span>
              </div>
              <p className="leading-loose text-sm my-5">
                <span className="text-orange-700 dark:text-orange-500">
                  Skills used:
                </span>{' '}
                TailwindCSS, TailwindCSS/Forms, React, Redux/Toolkit, React
                Router.
              </p>
              <a
                href="https://github.com/gvilia/resume-project"
                className="px-4 rounded-md text-black  dark:bg-black dark:text-white dark:hover:bg-blue-600 bg-gray-300 py-2 hover:bg-black hover:text-white hover:shadow-md duration-75"
              >
                Github
              </a>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img src={apiLogo} alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <div className="text-green-700 dark:text-green-500 text-xl text-center">
                <span>Holiday api website</span>
              </div>
              <p className="leading-loose text-sm my-5">
                <span className="text-orange-700 dark:text-orange-500">
                  Skills used:
                </span>{' '}
                React, External API (
                <a
                  href="https://date.nager.at/api"
                  className="text-green-700 dark:text-green-500"
                >
                  https://date.nager.at/api
                </a>
                ), Module.css
              </p>
              <a
                href="https://github.com/gvilia/api-example"
                className="px-4 rounded-md text-black  dark:bg-black dark:text-white dark:hover:bg-blue-600 bg-gray-300 py-2 hover:bg-black hover:text-white hover:shadow-md duration-75"
              >
                Github
              </a>
              <a
                href="https://gvidasl.com/api"
                className="ml-3 px-4 rounded-md text-black  dark:bg-black dark:text-white dark:hover:bg-blue-600 bg-gray-300 py-2 hover:bg-black hover:text-white hover:shadow-md duration-75"
              >
                Visit
              </a>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img src={bootstrapLogo} alt="plant" className="h-auto w-full" />
            <div className="p-5">
              <div className="text-green-700 dark:text-green-500 text-xl text-center">
                <span>Figma to Bootstrap website</span>
              </div>
              <p className="leading-loose text-sm my-5">
                <span className="text-orange-700 dark:text-orange-500">
                  Skills used:
                </span>{' '}
                Figma, Bootstrap 5 CSS framework, SASS, Prepros.io
              </p>
              <a
                href="https://github.com/gvilia/bootstrap-example/tree/bootstrap-example-v1"
                className="px-4 rounded-md text-black  dark:bg-black dark:text-white dark:hover:bg-blue-600 bg-gray-300 py-2 hover:bg-black hover:text-white hover:shadow-md duration-75"
              >
                Github
              </a>
              <a
                href="https://gvidasl.com/bootstrap"
                className="ml-3 px-4 rounded-md text-black  dark:bg-black dark:text-white dark:hover:bg-blue-600 bg-gray-300 py-2 hover:bg-black hover:text-white hover:shadow-md duration-75"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
