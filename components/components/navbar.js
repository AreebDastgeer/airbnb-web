import { FaAirbnb, FaBars, FaGlobe, FaSearch, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
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
      const customTheme = {
        dateRange: {
          color: '#E11D48', // Set the text color of the date range selection
        },
      };
      
    return (

        <div className='parent   px-10 py-5 bg-white'>
        <div className='flex flex-row justify-between'>
            <div className="brand flex flex-row text-rose-600 text-2xl">
                <div className="m-1">
                    <FaAirbnb />
                </div>
                <b> airbnb </b>
            </div>
            <div className="search flex items-center md:border-2 rounded-full p-2 md:shadow-sm ">
                <input
                    className="pl-5 transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Start your search"
                    name="search"
                    onChange={handleInputChange}
                />
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
            {showCalendar && (
            <div className='flex flex-col col-span-3 mx-auto mt-10 text-black'>
            <div className='calendar-container'>
            <DateRangePicker
                    onChange={(item) => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={state}
                    direction="horizontal"
                    theme={customTheme}
 
                />
                </div>
            </div>
            )}
        </div>
        
    );
}
export { Navbar };
