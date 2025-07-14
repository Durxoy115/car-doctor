import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          {/* <details>
            <summary>Services</summary>
            <ul className="p-2">
              <li>
                <Link href={'/service1'}>Services 1</Link>
              </li>
              <li>
                <Link href={'/service2'}>Services 2</Link>
              </li>
            </ul>
          </details> */}
            <Link href={'/services'}>Services</Link>
        </li>
        <li>
          <Link href={'/blogs'}>Blogs</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/contacts'}>Contacts</Link>
        </li>
      </>
    );
  };
  return (
    <div className="navbar bg-base-100 shadow-sm sm:px-1 md:px-8 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>
        <Link href={'/'}>
          <Image src={"/assets/logo.svg"} width={50} height={30} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navMenu()}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact Us</a>
      </div>
    </div>
  );
}
