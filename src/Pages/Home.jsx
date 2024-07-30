import React from 'react'
import Navbar from '../Components/Navbar'
import { IoSearch } from 'react-icons/io5'
import Products from '../Components/Products'

const Home = () => {

    const scrollBottom = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }

    return (
        <>
            <div className="relative h-screen">
                <img src="/Home/bgTop.jpeg" loading='eager' className=' select-none absolute -z-10 md:h-screen w-full' alt="" />
                <div className="bg-gradient-to-r from-[#858c96] to-[#273343] h-screen absolute w-full -z-50"></div>
                {/* <Navbar /> */}
                <div className="max-w-[35rem] w-full flex flex-col justify-center items-center h-screen md:h-[80%] gap-3 m-auto text-center">
                    <h1 className='text-2xl md:text-4xl text-white md:leading-[3rem] font-extrabold'>Bring Serenity to Your Place With Interior Plants</h1>
                    <p className='max-w-[22rem] text-[#ffffff96]'>find your dream plant for you home decoration with us, and we will make it happen.</p>
                    <div className="flex justify-center bg-[#5c6573] p-1 items-center border-2 border-white rounded-full">
                        <input type="text" className=' bg-transparent text-white  px-4' placeholder='Search Plants' />
                        <IoSearch onClick={scrollBottom} className='text-4xl cursor-pointer rounded-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 p-2' />
                    </div>
                </div>
            </div>

            <div className="products">
                <Products />
            </div>
        </>
    )
}

export default Home