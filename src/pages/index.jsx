import React, { useState, useEffect } from 'react';
import NavHome from '../component/navHome.jsx';
import ListToDo from '../component/listToDo.jsx';
import axios from 'axios';
import Loading from '../component/loading.jsx';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavHome />
      {data ? <ListToDo data={data} /> : <Loading />}
    </div>
  );
}

export default HomePage;
