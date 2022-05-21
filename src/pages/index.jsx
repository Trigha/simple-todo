import React, { useState, useEffect } from 'react';
import NavHome from '../component/navHome.jsx';
import ListToDo from '../component/listToDo.jsx';
import Loading from '../component/loading.jsx';
import { db } from '../config/firebase_config';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          description: doc.data().description,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  return (
    <div>
      <NavHome />
      {data.map((item) => (
        <ListToDo
          key={item.id}
          id={item.id}
          todo={item.todo}
          description={item.description}
          inprogress={item.inprogress}
        />
      ))}
      {/* {data ? <ListToDo data={data} id={data.id} /> : <Loading />} */}
    </div>
  );
}

export default HomePage;
