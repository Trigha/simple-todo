import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineCheck } from 'react-icons/hi';

function listToDo({ data, onDelete, onCheck }) {
  function handleDelete(id) {
    onDelete(id);
  }

  function handleCheck(id) {
    onCheck(id);
  }

  return (
    <div className="max-w-xl pt-8 pb-12 mx-auto">
      <ul className="pt-5 mx-2">
        {data.map((item) => (
          <li className="flex flex-row items-start justify-between py-2.5 shadow-lg mb-5">
            <div className="flex flex-col items-start justify-start gap-x-5">
              <HiOutlineCheck
                className="inline mr-1.5 text-gray-600 mx-5"
                size={14}
              />
              <h6 className="text-indigo-600 hover:text-indigo-400 inline transition duration-300 ease-in-out text-base md:text-lg font-medium mx-5">
                {item.title}
              </h6>
              <p className="text-sm text-gray-500 font-light italic mx-5">
                No description
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-4 mx-5">
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleCheck(item.id)}
              />

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
        ))}
      </ul>
    </div>
  );
}

export default listToDo;
