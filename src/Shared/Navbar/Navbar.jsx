// ICONS
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useEffect, useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`md:py-6 py-3 md:px-10 px-5 flex items-center justify-between fixed top-0 w-full hover:bg-white transition duration-500 ${
          scrolling ? "bg-white border-b-1 border-gray-400" : "bg-transparent"
        }`}
      >
        {/* Menu and Search */}
        <div className="flex items-center md:gap-6 md:pl-10">
          {/* menu */}
          <div className="flex items-center gap-3">
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
              <button
                onClick={toggleSidebar}
                className="toggle-button fixed md:top-[30px] z-1 md:ml-10 top-4 ml-4"
              >
                {isOpen ? (
                  <AiOutlineClose
                    className="transition duration-300"
                    size={"25px"}
                  ></AiOutlineClose>
                ) : (
                  <HiOutlineBars3
                    className="transition duration-300"
                    size={"25px"}
                  ></HiOutlineBars3>
                )}
              </button>

              <div className="sidebar-content">
                {/* Sidebar content goes here */}
                <ul className="text-2xl space-y-5  md:ml-10">
                  <li className="hover:text-gray-500">Gifts</li>
                  <li className="hover:text-gray-500">New</li>
                  <li className="hover:text-gray-500">Bags</li>
                  <li className="hover:text-gray-500">Women</li>
                  <li className="hover:text-gray-500">Men</li>
                  <li className="hover:text-gray-500">Jewelry</li>
                  <li className="hover:text-gray-500">Watches</li>
                  <li className="hover:text-gray-500">Perfumes</li>
                  <li className="hover:text-gray-500">Art of living</li>
                  <li className="hover:text-gray-500">Services</li>
                  <li className="hover:text-gray-500">
                    World of Louis Vuitton
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {isOpen ? (
                <p className="text-[13px] hidden md:block">Close</p>
              ) : (
                <p className="text-[13px] hidden md:block">Menu</p>
              )}
            </div>
          </div>

          {/* search */}
          <div className="flex items-center md:gap-3">
            <div className="hidden md:block">
              <AiOutlineSearch size={"25px"}></AiOutlineSearch>
            </div>
            <div>
              <p className="text-[13px] hidden md:block">Search</p>
            </div>
          </div>
        </div>

        {/* Louis vuitton */}
        <div>
          <h2 className="font-bold md:text-3xl text-2xl md:ml-14">
            LOUIS VUITTON
          </h2>
        </div>

        {/* Call, wishlist , mylv */}

        {/* call */}
        <div className="flex items-center md:gap-8">
          <div>
            <p className="text-[13px] hidden md:block">Call us</p>
          </div>
          <div>
            <p className="text-[13px] hidden md:block">Wishlist</p>
          </div>
          <div>
            <p className="text-[13px] hidden md:block">MyLV</p>
          </div>
          <div>
            <HiOutlineShoppingBag size={"20px"}></HiOutlineShoppingBag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
