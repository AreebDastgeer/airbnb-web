import { FaAirbnb, FaBars, FaGlobe, FaSearch, FaUser } from 'react-icons/fa';
import React from 'react';

 function Navbar() {
    return (
            <div className="parent flex flex-row justify-between px-10 py-5 bg-white">
                <div className="brand flex flex-row text-rose-600 text-2xl">
                <div className="m-1"> 
                <FaAirbnb />
                </div>
                    <b> airbnb </b>
                </div>
                <div className="search flex items-center md:border-2 rounded-full p-2 md:shadow-sm ">
                    <input className="pl-5 transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search"  name="search"></input>
                    <div className=" bg-rose-600 text-white rounded-full p-1 text-xs">
                    <FaSearch />
                    </div>
                </div>
                <div className="right flex flex-row  items-center space-x-4 justify-end text-gray-500">
                    <h5>Become a host</h5>
                    <FaGlobe />

                    <div className="flex items-center space-x-2 border-2 p-2 rounded-full"> <FaBars /><FaUser /></div>
                </div>
            </div>
            );
 }
 export {Navbar};
