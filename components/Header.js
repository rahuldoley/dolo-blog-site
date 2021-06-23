import { useState } from 'react';
import Image from 'next/image';
import download from '../images/download.svg'

export default function Header() {
    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => {
        setisOpen(!isOpen);
      }

      const NavItem = props => (
            <li>
                <a
                    href={props.href}
                    className="text-lg  text-gray-700 px-2 py-1 hover:bg-gray-300 rounded"
                >
                    {props.text}
                </a>    
            </li>
        ); 

    return (
        <div >
            <div className="container mx-auto justify-center">
            <nav className="flex justify-between p-4">
                <div className="flex items-center">
                    <Image src={download} alt="logo" />
                </div>
                <div className="hidden md:block ">
                    <ul className="flex space-x-2 ">
                        <NavItem  href="/" text="Home" />
                        <NavItem href="/" text="About" />
                        <NavItem href="/" text="Blog" />
                        <NavItem href="/" text="FAQ" />
                    </ul>
                </div>
                <button 
                    type="submit" 
                    className="hidden md:block bg-blue-900 text-white text-xs p-3 rounded-3xl">Sign In 
                </button>                           
                <button type="button" className="block md:hidden ml-24 md:ml-24" onClick={handleClick}>
                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen && (
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        )}
                        {!isOpen && (
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        )}
                    </svg>
                </button>
            </nav>
            <div>
                <div className="md:block lg:hidden">
                    <ul className={`flex flex-col items-center justify-center space-x-2 p-2 ${  isOpen ? "block" : "hidden" }`}>
                        <NavItem  href="/" text="Home" />
                        <NavItem href="/" text="About" />
                        <NavItem href="/" text="Blog" />
                        <button 
                            type="submit" 
                            className={`bg-blue-900 text-white text-xs mt-4 p-3 rounded-3xl` } >Sign In 
                        </button>  
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
