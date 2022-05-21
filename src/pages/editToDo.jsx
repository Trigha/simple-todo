import React, { useState } from 'react';
import NavEdit from '../component/navEdit.jsx';
import { db } from '../config/firebase_config';
import { useNavigate } from 'react-router-dom';

function EditItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);
  const history = useNavigate();

  function handleUpdate(e) {
    e.preventDefault();

    db.collection('todos').update({
      description: description,
      inprogress: false,
      todo: title,
    });

    history('/');
  }

  return (
    <>
      <NavEdit />
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl mt-10">
        <h1>Name</h1>
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none focus:border-gray-500 focus:bg-white"
          spellcheck="false"
          placeholder="e.g Buy Milk"
          type="text"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h1>Description</h1>
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none focus:border-gray-500 focus:bg-white"
          spellcheck="false"
          placeholder="e.g Buy milk for the family"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="buttons flex justify-end pt-10">
          <div
            className="btn border border-blue-500  p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-orange-500 hover:bg-orange-700"
            onSubmit={handleUpdate}
          >
            Edit
          </div>
        </div>
      </div>
    </>
  );
}

export default EditItem;
