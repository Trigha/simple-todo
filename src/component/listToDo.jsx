import React from 'react';
// import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineCheck } from 'react-icons/hi';

function listToDo() {
  return (
    <div className="max-w-xl pt-8 pb-12 mx-auto">
      <div className="flex items-center justify-between">
        <h6 className="text-base font-medium text-gray-600">Your list</h6>
        <p className="text-sm font-light text-gray-500">asd</p>
      </div>
      <ul className="pt-5">
        <li className="flex flex-row items-start justify-between py-2.5">
          <div className="flex flex-col items-start justify-start gap-x-5">
            {/* <Link */}
            {/* // to={`/todo/${item._id}`}
            // id={item.id}
            // htmlFor={item.title}
            > */}
            {/* {item.isCompleted && ( */}
            <HiOutlineCheck className="inline mr-1.5 text-gray-600" size={14} />
            {/* )} */}
            <h6 className="text-indigo-600 hover:text-indigo-400 inline transition duration-300 ease-in-out text-base md:text-lg font-medium">
              asd
            </h6>

            <p className="text-sm text-gray-500 font-light italic">
              No description
            </p>
            {/* </Link> */}
          </div>
          <div className="flex flex-row items-center gap-x-4">
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
