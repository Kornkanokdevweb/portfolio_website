import React from "react";
import { Link } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href.substring(1)}  // Remove the leading "#"
      className="block pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white cursor-pointer"
      smooth={true}
      offset={-70}  // Adjust the offset as needed to account for fixed navbar
      duration={500} // Adjust the duration as needed
    >
      {title}
    </Link>
  );
};

export default NavLink;