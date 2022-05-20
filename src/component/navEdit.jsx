import React from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';

function NavEdit() {
  return (
    <div>
      <div className="bg-blue-500 w-full h-20">
        <div className="flex ">
          <button className="flex flex-row items-center justify-between group py-7 mx-5">
            <HiOutlineChevronLeft
              size="24"
              className="text-white transition duration-300 ease-in-out group-hover:text-gray-800"
            />
            <p className="text-sm text-white transition duration-300 ease-in-out group-hover:text-gray-800">
              Back
            </p>
          </button>
          <div className="absolute left-[40%] laptop:left-[46%] top-5">
            <h1 className="text-white text-3xl font-bold">Edit ToDo</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavEdit;
