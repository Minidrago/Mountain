import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { mnt } from './data';
import { Link, useParams } from 'react-router-dom'


function Home() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); 

  async function loadData (){
    const load = await mnt(`/`, page);
    console.log(load);
    // const newData = load.data.results;
  }

  useEffect(()=>{ loadData(); },[])


  return (
    <div>
      Home
    </div>
  )
}

export default Home