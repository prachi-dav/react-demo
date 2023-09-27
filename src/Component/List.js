import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function List() {
  const [data, setData] = useState([]);

  const getdata = () => {
    fetch("http://localhost:3000/prachi")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setData(data)
    })
  };

  useEffect(()=>{
    getdata()
  },[])
console.log(data,"shivam")
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
      <th scope="col">SirName</th>
      <th scope="col">Number</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item)=>{
          return <tr>
          <td>{item.email}</td>
          <td>{item.name}</td>
          <td>{item.sirname}</td>
          <td>{item.number}</td>
          <td>{item.description}</td>
        </tr>
        })
      }
    
   
  </tbody>
</table>
    
  );
}
