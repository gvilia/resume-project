import React, { Fragment } from 'react';

import { ReactComponent as SkillsSvg } from '../../assets/icons/skills.svg';
import { ReactComponent as EducationSvg } from '../../assets/icons/education.svg';
import { ReactComponent as ExperienceSvg } from '../../assets/icons/experience.svg';
import { ReactComponent as ContactSvg } from '../../assets/icons/contact.svg';
import { NavLink } from 'react-router-dom';

const icons = {
  skills: SkillsSvg,
  education: EducationSvg,
  experience: ExperienceSvg,
  contact: ContactSvg,
};

const NavigationItem = (props) => {
  //   Using webpack, adding dynamically
  //   const svgName = `${props.svg}`;
  //   const svgDir = require.context('../../icons/');

  const SpecificIcon = icons[props.svg];

  return (
    <Fragment>
      <li id={props.id} className="w-full">
        <NavLink
          className={(navData) =>
            navData.isActive
              ? 'flex h-20 justify-center sm:justify-start items-center no-underline grayscale-0 opacity-100 bg-gray-200 dark:bg-black group'
              : 'flex h-20 justify-center sm:justify-start items-center no-underline filter grayscale opacity-100 hover:grayscale-0 dark:opacity-70 transition-all dark:hover:grayscale-0 dark:hover:opacity-100 hover:bg-gray-300 dark:hover:bg-black group'
          }
          to={props.path}
          onClick={() => {
            console.log('clicked');
          }}
        >
          {/* Using webpack, adding dynamically  */}
          {/* <img src={svgDir(`./${svgName}.svg`)} alt={props.name} /> */}
          <SpecificIcon className="min-w-[2rem] max-w-[2rem] my-0 mx-6 stroke-blue-600 group-hover:stroke-blue-600 stroke-2" />
          <span className="text-black dark:text-white ml-4 hidden sm:group-hover:block">
            {props.name}
          </span>
        </NavLink>
      </li>
    </Fragment>
  );
};

export default NavigationItem;
