import React, { useState } from 'react';
import NavEdit from '../component/navEdit.jsx';

function EditItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { title, description }]);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <NavEdit />
      <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl mt-10">
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
          class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none focus:border-gray-500 focus:bg-white"
          spellcheck="false"
          placeholder="e.g Buy milk for the family"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div class="buttons flex justify-end pt-10">
          <div
            class="btn border border-blue-500  p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-orange-500 hover:bg-orange-700"
            onSubmit={handleSubmit}
          >
            Submit
          </div>
        </div>
      </div>
    </>
  );
}

export default EditItem;
