import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const SubNavbar = () => {
  return (
    <div className="subNav">
      <ul>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/"}>
          <li>About Us</li>
        </Link>
        <Link href={"/"}>
          <li>Contact Us</li>
        </Link>
      </ul>
      <div>
        <FaFacebook />
        <FaYoutube />
        <FaPinterest />
        <FaInstagram />
      </div>
    </div>
  );
};

export default SubNavbar;