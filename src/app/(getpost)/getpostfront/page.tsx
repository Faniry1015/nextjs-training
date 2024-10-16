"use client"
import React, { useEffect, useState } from "react";
interface Item {
    id: number,
    label: string,
}

const GetPost = () => {
    const [items, setItems] = useState<Item[]>([])

  const fetchData = async () => {
    try {
      const res = await fetch("/getpostroute");
      const articles = await res.json()
      setItems(articles) 

    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])
  
  return <div>
    <ul>
        {items.map((item) => <li key={item.id}>{item.label}</li>)}
    </ul>
  </div>;
};

export default GetPost;
