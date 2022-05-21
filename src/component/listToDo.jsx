import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineCheck } from 'react-icons/hi';
import { VscOpenPreview } from 'react-icons/vsc';
import { db } from '../config/firebase_config';
import './list.css';

function ListToDo({ data, id, todo, description, inprogress }) {
  function handleCheck() {
    db.collection('todos').doc(id).update({
      inprogress: true,
    });
  }

  function handleDelete() {
    db.collection('todos').doc(id).delete();
  }

  return (
    <div className="max-w-xl pt-8 pb-12 mx-auto">
      <ul className="pt-5 mx-2">
        {/* {data.map((item) => ( */}
        <li
          className="flex flex-row items-start justify-between py-2.5 shadow-lg mb-5"
          key={id}
        >
          <div className="flex flex-col items-start justify-start gap-x-5">
            <input
              type="checkbox"
              className="transition duration-300 ease-in-out"
              onClick={handleCheck}
              id="strike"
            />
            <h6 className="text-indigo-600 hover:text-indigo-400 inline transition duration-300 ease-in-out text-base md:text-lg font-medium mx-5">
              {todo}
            </h6>
            <p className="text-sm text-gray-500 font-light italic mx-5">
              {description}
            </p>
          </div>
          <div className="flex flex-row items-center gap-x-4 mx-5">
            <Link to={`/edit/${id}`}>
              <button
                type="button"
                className="transition duration-300 ease-in-out py-5"
                onClick={() => {
                  console.log('Edit');
                }}
              >
                <VscOpenPreview
                  className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-orange-500"
                  size={20}
                />
              </button>
            </Link>

            <button
              type="button"
              className="transition duration-300 ease-in-out"
              onClick={handleDelete}
            >
              <HiOutlineTrash
                className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500"
                size={20}
              />
            </button>
          </div>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
}

export default ListToDo;
