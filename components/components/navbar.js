import { FaAirbnb, FaBars, FaGlobe, FaSearch, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/theme/styles.css';
import { addDays } from 'date-fns';

function Navbar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setShowCalendar(inputValue.length > 0);
  };

  const handleClose = () => {
    setState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]);
    setShowCalendar(false);
  };

  return (
    <div className='parent  px-10 py-5 bg-white'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='brand flex flex-row text-rose-600 text-3xl'>
          <div className='m-1'>
            <FaAirbnb />
          </div>
          <b> airbnb </b>
        </div>
        <div className='search flex items-center md:border-2 rounded-full p-2 md:shadow-sm hover:shadow-xl'>
          <input
            className='pl-5 transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 caret-rose-500'
            type="text"
            placeholder="Start your search"
            name="search"
            onChange={handleInputChange}>

          </input>
          <div className='bg-rose-600 text-white rounded-full p-1 text-s hover:bg-rose-500'>
            <FaSearch />
          </div>
        </div>
        <div className='right flex items-center space-x-2 md:space-x-4 justify-end text-gray-500'>
          <div className='border-2 p-2 border-transparent rounded-full hover:shadow-l hover:bg-gray-200'>
            <h5>Become a host</h5>
          </div>
          <button className='border-2 p-2 border-transparent rounded-full hover:shadow-l hover:bg-gray-200'>
            <FaGlobe />
          </button>
          <div className='flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-xl'>
            <FaBars />
            <FaUser />
          </div>
        </div>
      </div>
      {showCalendar && (
        <div className='flex flex-col col-span-3 mx-auto mt-5  text-black'>
          <div className='calendar-container flex md:justify-center text-gray'>
            <DateRangePicker
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={1}
              ranges={state}
              direction="horizontal"
              rangeColors={["#e11d48"]}
              minDate={new Date()}
              className='text-gray'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center border-b mb-4 text-black'>
            <h2 className='text-2xl flex-grow font-semibold mb-2 md:mb-0 md:mr-4'>
              Number of Guests
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 mt-1"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <input
              className='w-12 pl-2 outline-none mb-1 text-rose-600 text-lg placeholder-rose-600'
              placeholder="1"
              min="1"
              max="999"
              type="number"
            />
          </div>
          <div className='flex flex-col md:flex-row'>
            <button className='flex-grow text-gray-500 mb-2 md:mb-0 md:mr-2 xs:mr-2' onClick={handleClose}>
              Cancel
            </button>
            <button className='flex-grow text-rose-600'>Search</button>
          </div>
        </div>

      )}
    </div>
  );
}

export { Navbar };
