import { useState } from "react"

import ThemedButton from "./ui/ThemedButton"
import logo from "../assets/logo.svg"

export default function(){

    /*
        This piece of state is to control the open and closed state of the mobile menu (which is only visible on small screens) 
    */

    const [ showMobileMenu, setShowMobileMenu ] = useState(false)

    function toggleShowMobileMenu(){
        setShowMobileMenu(prevState => !prevState)
    }

    return (
        <div className="bg-primary">
            <div className="contain flex justify-between items-center p-5 relative">
                <a className="logo cursor-pointer" title="brand">
                    <img src={logo} alt="brand" className="w-[100px]"/>
                </a>
                <ul className="nav-items hidden tablet:flex">
                    <li>
                        <a className="block px-4 py-2 text-white font-bold cursor-pointer hover:underline underline-offset-8">Services</a>
                    </li>
                    <li>
                        <a className="block px-4 py-2 text-white font-bold cursor-pointer hover:underline underline-offset-8">Industries</a>
                    </li>
                    <li>
                        <a className="block px-4 py-2 text-white font-bold cursor-pointer hover:underline underline-offset-8">Cases</a>
                    </li>
                    <li>
                        <a className="block px-4 py-2 text-white font-bold cursor-pointer hover:underline underline-offset-8">Contact</a>
                    </li>
                </ul>
                <div className="hidden tablet:block">
                    <ThemedButton title="let's talk" type="primary-inverse" round>Let's Talk</ThemedButton>
                </div>
                <div onClick={() => toggleShowMobileMenu()} className="tablet:hidden flex flex-col gap-2 p-2 cursor-pointer z-50">
                    <div className="bg-white w-10 h-1"></div>
                    <div className="bg-white w-10 h-1"></div>
                    <div className="bg-white w-10 h-1"></div>
                </div>
                <div className={`tablet:hidden absolute bg-primary top-0 right-0 pt-20 transition-opacity duration-250 ${showMobileMenu ? 'opacity-1 pointer-events-all' : 'opacity-0 pointer-events-none'}`}>
                    <ul className="nav-items">
                        <li>
                            <a className="block px-8 py-2 text-white font-bold cursor-pointer hover:underline underline-offset-8 hover:bg-primary-dark">Services</a>
                        </li>
                        <li>
                            <a className="block px-8 py-2 text-white font-bold cursor-pointer hover:underline underline-offset-8 hover:bg-primary-dark">Industries</a>
                        </li>
                        <li>
                            <a className="block px-8 py-2 text-white font-bold cursor-pointer hover:underline underline-offset-8 hover:bg-primary-dark">Cases</a>
                        </li>
                        <li>
                            <a className="block px-8 py-2 text-white font-bold cursor-pointer hover:underline underline-offset-8 hover:bg-primary-dark">Contact</a>
                        </li>
                    </ul>
                    <div className="p-2">
                        <ThemedButton title="let's talk" type="primary-inverse" round full>Let's Talk</ThemedButton>
                    </div>
                </div>
            </div>
        </div>
    )
}