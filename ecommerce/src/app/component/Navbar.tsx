'use client'
import React, {useState} from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaShareAlt } from 'react-icons/fa';
// import MobileNav from '../component/MobileNav';
import { IoShareOutline } from 'react-icons/io5';
import assets from '../../../public/assets/asset'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MobileNav from './MobileNav';



const Navbar = () => {
    const links =
    [      
        {name:'Shop Now', href: '/'},
        {name:'Collections', href: '/collections'},
        {name:'About', href: '/about'},
        {name:'Contact Us', href: '/contact'},

]

const pathName = usePathname()
//   const [activeLink, setActiveLink] = useState<null| string>(null); 

//   const handleClick = (category: React.SetStateAction<string | null>) => {
//     setActiveLink(category); // Set the clicked link as active
//   };
  return (
    <nav className="bg-black opacity-80 flex justify-between items-center  w-full py-[10px]  px-[10px]">
      <ul className="text-white capitalize flex  gap-[10px] max-xl:hidden">
        {/* <li className='text-[18px]'><a href="">Shop Now</a></li>
        <li className='text-[18px]'><a href="">Collections</a></li>
        <li className='text-[18px]'><a href="">About</a></li> */}

{/* {['Shop Now', 'Collections', 'About'].map((category) => (
        <p
          key={category}
          className={`font-semibold whitespace-nowrap p-1 cursor-pointer text-[18px] ${
            activeLink === category ? 'border-b-4 border-white text-[#C3D4E9]' : 'border-none'
          }`}
          onClick={() => handleClick(category)}
        >
          <a href="#">{category}</a>
        </p>
      ))} */}

      {links.map((link, idx) => (
             <p key={idx}  className={`font-semibold whitespace-nowrap p-1 cursor-pointer text-[18px]`}>
                  {pathName === link.href ? (
                     <Link href={link.href} className='border-b-4 border-white text-[#C3D4E9] tranistion-all duration-300'>{link.name}</Link>
                  ): (
                      <Link href={link.href} className='font-semibold  text-gray-600 tranistion-all duration-300 hover:text-red-900 border-none'>{link.name}</Link>
                  )}
             </p>
      ))}
      </ul>

      <Image src={assets.logo} alt="XsLogo" width='40' className='max-xl:hidden'/>
      <div className='flex gap-[20px] max-xl:hidden'>
        <div className=" p-[7px] w-[300px] flex items-center justify-between text-white   border-[#C3D4E9] border-[1px] border-solid rounded-full smm:w-[200px] ">
          <div className="flex gap-2">
            <Image src={assets.searchlogo} alt="" width ='20' height='20' className="" />
            <input
              type="text"
              className="bg-transparent outline-none rounded-xl "
              placeholder="Search something here"
            />
          </div>
        </div>
      </div>

      <div className='flex gap-[10px] max-xl:hidden'>
        <AiOutlineShopping className='text-white text-2xl' />
        {/* <FaShareAlt className='text-white text-2xl' /> */}
        <IoShareOutline size={24} className='text-white text-2xl'/>
      </div>


       <div className='hidden max-md:block w-[100vw]'>
         <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
