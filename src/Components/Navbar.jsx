import React, { useState, useEffect } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const selector = useSelector(state => state.addToCartItem.quantity)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <nav className={`container fixed h-16 flex justify-between z-50 items-center ${isScrolled ? 'bg-gradient-to-r from-[#858c96] to-[#273343]' : 'bg-transparent'} transition-colors duration-300`}> */}
      <nav className={`container fixed h-16 flex justify-between z-50 items-center bg-gradient-to-r from-[#858c96] to-[#273343] transition-colors duration-300`}>
        <Link to={"/"}><img src="/logo.png" alt="Logo" /></Link>
        <div className="hidden md:block">
          <ul className='flex justify-center items-center gap-7 text-white'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            {/* <li><NavLink to={"/shop"}>Shop</NavLink></li> */}
            <li><NavLink to={"/carts"}>Carts</NavLink></li>
            {/* <li><NavLink to={"/contact"}>Contact</NavLink></li> */}
            <li className='opacity-0 select-none'>jkjjjjjjjjjjjjjjjjj</li>
          </ul>
        </div>
        <Link to={"/carts"}>
          <div className="relative cursor-pointer">
            <FaShoppingBag className='text-white text-2xl' />
            <p className='absolute  top-[-.5rem]  bg-gradient-to-r from-cyan-500 to-blue-500 right-[-1rem] p-[.5rem] py-0 rounded-full text-white'> {selector}</p>
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
