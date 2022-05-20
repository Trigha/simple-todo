import React from 'react';
// import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineCheck } from 'react-icons/hi';
import { VscOpenPreview } from 'react-icons/vsc';

function listToDo() {
  return (
    <div className="max-w-xl pt-8 pb-12 mx-auto">
      <ul className="pt-5 mx-2">
        <li className="flex flex-row items-start justify-between py-2.5 shadow-2xl">
          <div className="flex flex-col items-start justify-start gap-x-5">
            <HiOutlineCheck
              className="inline mr-1.5 text-gray-600 mx-5"
              size={14}
            />
            <h6 className="text-indigo-600 hover:text-indigo-400 inline transition duration-300 ease-in-out text-base md:text-lg font-medium mx-5">
              asd
            </h6>
            <p className="text-sm text-gray-500 font-light italic mx-5">
              No description
            </p>
            {/* </Link> */}
          </div>
          <div className="flex flex-row items-center gap-x-4 mx-5">
            <button
              type="button"
              className="transition duration-300 ease-in-out "
              onClick={() => {
                console.log('Delete');
              }}
            >
              <VscOpenPreview
                className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-yellow-500"
                size={20}
              />
            </button>
            <button
              type="button"
              className="transition duration-300 ease-in-out"
              onClick={() => {
                console.log('Delete');
              }}
            >
              <HiOutlineTrash
                className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500"
                size={20}
              />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default listToDo;
