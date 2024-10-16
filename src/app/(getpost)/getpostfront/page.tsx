"use client"
import React, { useEffect, useState } from "react";

const GetPost = () => {
    const [items, setItems] = useState([])

  const getData = async () => {
    try {
      const res = await fetch("/getpostroute");
      const articles = await res.json()
      setItems(articles) 
      console.log(articles)
    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData()
  }, [])
  
  return <div>
    <ul>
        {items.map((item, k) => <li key={k}>{item.label}</li>)}
    </ul>
  </div>;
};

export default GetPost;
