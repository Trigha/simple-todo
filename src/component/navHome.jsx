import React from 'react';

function NavHome() {
  return (
    <div>
      <div className="mx-auto">
        <div className="bg-blue-500 w-full h-20">
          <div className="flex justify-end items-center w-full h-full">
            <h1 className="absolute left-2/4  py-6 font-bold text-xl">To Do</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-20">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHome;
